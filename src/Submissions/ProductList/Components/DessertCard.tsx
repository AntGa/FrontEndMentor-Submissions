import React, { useState } from 'react'
import '../ProductList.css'

interface DessertCardProps {
  FoodType?: string
  Name?: string
  Price?: number
  ImgSrc?: string
  Count: number // Add this prop
  OnAddToCart: () => void
  OnIncrement: () => void
  OnDecrement: () => void
}

export const DessertCard: React.FC<DessertCardProps> = ({
  FoodType,
  Name,
  Price,
  ImgSrc,
  Count,
  OnAddToCart,
  OnIncrement,
  OnDecrement,
}) => {
  return (
    <div className="redhat h-[344px] w-[252px]">
      <div
        className={`relative h-[242px] w-[252px] rounded-lg ${Count > 0 ? 'border-2 border-[#9D4C31]' : ''}`}
      >
        <img className="rounded-md" src={ImgSrc} alt={Name} />
        {Count === 0 ? (
          <button
            onClick={OnAddToCart}
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
          <div className="relative flex h-11 w-40 -translate-y-5 translate-x-11 items-center justify-between rounded-full border border-[#98908E] bg-[#C83B0E]">
            {/* Decrement Button */}
            <button
              onClick={OnDecrement}
              className="flex h-5 w-5 translate-x-3 items-center justify-center rounded-full border border-white bg-transparent"
            >
              <img
                className="h-3 w-3"
                src="ProductList/icon-decrement-quantity.svg"
                alt="Decrement"
              />
            </button>
            <p className="mx-2 text-lg font-semibold text-[#FFFFFF]">{Count}</p>
            {/* Increment Button */}
            <button
              onClick={OnIncrement}
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
