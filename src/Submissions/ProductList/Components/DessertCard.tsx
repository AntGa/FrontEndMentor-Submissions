import React, { useState } from 'react'
import '../ProductList.css'

interface DessertCardProps {
  FoodType?: string
  Name?: string
  Price?: number
  ImgSrc?: string
  OnAddToCart: () => void
}

export const DessertCard: React.FC<DessertCardProps> = ({
  FoodType,
  Name,
  Price,
  ImgSrc,
  OnAddToCart,
}) => {
  // State to track if the item is in the cart and its count
  const [inCart, setInCart] = useState(false)
  const [count, setCount] = useState(0)

  // Handle adding to the cart
  const handleAddToCart = () => {
    setCount(1)
    setInCart(true)
    OnAddToCart()
  }

  // Handle incrementing the count
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  }

  // Handle decrementing the count
  const handleDecrement = () => {
    setCount((prevCount) => {
      if (prevCount > 1) {
        return prevCount - 1
      } else {
        setInCart(false) // Reset to initial state if count is 1
        return 0
      }
    })
  }

  return (
    <div className="redhat h-[344px] w-[252px]">
      <div className="relative h-[242px] w-[252px]">
        <img className="rounded-md" src={ImgSrc} alt={Name} />
        {!inCart ? (
          <button
            onClick={handleAddToCart}
            className="absolute h-11 w-40 -translate-y-5 translate-x-11 rounded-full border border-[#98908E] bg-white"
          >
            <img
              className="translate-x-5 translate-y-3"
              src="ProductList/icon-add-to-cart.svg"
              alt="Add to Cart"
            />
            <p className="-translate-y-[10px] translate-x-2">Add to Cart</p>
          </button>
        ) : (
          <div className="relative flex h-11 w-40 -translate-y-5 translate-x-11 items-center justify-between rounded-full border border-[#98908E] bg-orange-300">
            <button
              onClick={handleDecrement}
              className="flex h-5 w-5 translate-x-3 items-center justify-center rounded-full border border-white bg-transparent"
            >
              <img
                className="h-3 w-3"
                src="ProductList/icon-decrement-quantity.svg"
                alt="Decrement"
              />
            </button>
            <p className="mx-2 text-lg font-semibold text-[#180A07]">{count}</p>
            <button
              onClick={handleIncrement}
              className="flex h-5 w-5 -translate-x-3 items-center justify-center rounded-full border border-white bg-transparent"
            >
              <img
                className="h-3 w-3"
                src="ProductList/icon-increment-quantity.svg"
                alt="Increment"
              />
            </button>
          </div>
        )}
      </div>
      <p className="mt-[38px] text-sm font-normal text-[#7E7371]">{FoodType}</p>
      <p className="text-[15px] font-semibold text-[#180A07]">{Name}</p>
      <p className="text-[15px] font-semibold text-[#A64928]">
        ${Price?.toFixed(2)}
      </p>
    </div>
  )
}
