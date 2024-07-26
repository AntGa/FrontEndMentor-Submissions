import './ProductList.css'
import { DessertCard } from './Components/DessertCard'
import desserts from './desserts.json'
import { useState } from 'react'
import CartItem from './Components/CartItem' // Adjust the path as necessary

interface Dessert {
  category?: string
  name?: string
  price?: number
  image: {
    desktop: string
  }
}

interface CartItem extends Dessert {
  quantity: number
}

export const ProductList = () => {
  const [cartItems, setCartItems] = useState<Map<string, CartItem>>(new Map())
  const [itemCount, setItemCount] = useState<number>(0)

  const addToCart = (dessert: Dessert) => {
    setCartItems((prevCartItems) => {
      const newCartItems = new Map(prevCartItems)
      if (newCartItems.has(dessert.name || '')) {
        const existingItem = newCartItems.get(dessert.name || '')!
        existingItem.quantity += 1
        newCartItems.set(dessert.name || '', existingItem)
      } else {
        newCartItems.set(dessert.name || '', {
          ...dessert,
          quantity: 1,
        })
      }
      const newItemCount = Array.from(newCartItems.values()).reduce(
        (acc, item) => acc + item.quantity,
        0
      )
      setItemCount(newItemCount)
      return newCartItems
    })
  }

  const incrementItem = (name: string) => {
    setCartItems((prevCartItems) => {
      const newCartItems = new Map(prevCartItems)
      if (newCartItems.has(name)) {
        const existingItem = newCartItems.get(name)!
        existingItem.quantity += 1
        newCartItems.set(name, existingItem)
      }
      const newItemCount = Array.from(newCartItems.values()).reduce(
        (acc, item) => acc + item.quantity,
        0
      )
      setItemCount(newItemCount)
      return newCartItems
    })
  }

  const decrementItem = (name: string) => {
    setCartItems((prevCartItems) => {
      const newCartItems = new Map(prevCartItems)
      if (newCartItems.has(name)) {
        const existingItem = newCartItems.get(name)!
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1
          newCartItems.set(name, existingItem)
        } else {
          newCartItems.delete(name)
        }
      }
      const newItemCount = Array.from(newCartItems.values()).reduce(
        (acc, item) => acc + item.quantity,
        0
      )
      setItemCount(newItemCount)
      return newCartItems
    })
  }

  const removeItem = (name: string) => {
    setCartItems((prevCartItems) => {
      const newCartItems = new Map(prevCartItems)
      newCartItems.delete(name)
      const newItemCount = Array.from(newCartItems.values()).reduce(
        (acc, item) => acc + item.quantity,
        0
      )
      setItemCount(newItemCount)
      return newCartItems
    })
  }

  const totalOrderAmount = Array.from(cartItems.values()).reduce(
    (acc, item) => acc + (item.price || 0) * item.quantity,
    0
  )

  return (
    <div className="flex min-h-screen w-full justify-center bg-[#FCF8F5]">
      <div className="flex w-[1440px] px-28 pt-[88px]">
        <div className="w-[833px]">
          <p className="redhat mb-8 text-[40px] font-bold">Desserts</p>
          <div className="flex flex-wrap gap-5">
            {desserts.map((dessert, index) => (
              <DessertCard
                key={index}
                FoodType={dessert.category}
                Name={dessert.name}
                ImgSrc={dessert.image.desktop}
                Price={dessert.price}
                Count={cartItems.get(dessert.name || '')?.quantity || 0}
                OnAddToCart={() => addToCart(dessert)}
                OnIncrement={() => incrementItem(dessert.name || '')}
                OnDecrement={() => decrementItem(dessert.name || '')}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="redhat min-h-[300px] w-[390px] rounded-xl bg-white p-6">
            <p className="text-2xl font-bold text-[#C03D0D]">
              Your Cart ({itemCount})
            </p>
            {itemCount === 0 ? (
              <>
                <div className="mt-10 flex justify-center">
                  <img
                    src="ProductList/illustration-empty-cart.svg"
                    alt="Empty cart illustration"
                  />
                </div>
                <p className="my-4 text-center font-semibold text-[#7E7371]">
                  Your added items will appear here
                </p>
              </>
            ) : (
              <div className="mt-4 flex flex-col space-y-2">
                {Array.from(cartItems.values()).map((item, index) => (
                  <CartItem
                    key={index}
                    name={item.name || ''}
                    quantity={item.quantity}
                    price={item.price || 0}
                    onRemove={() => removeItem(item.name || '')}
                  />
                ))}
                <div className="mt-4 flex justify-between">
                  <p className="text-xl font-semibold">Total</p>
                  <p className="text-xl font-semibold">
                    ${totalOrderAmount.toFixed(2)}
                  </p>
                </div>
                <div className="mt-4 flex h-[50px] w-[337px] items-center justify-center bg-[#E3DAC9]">
                  <img
                    src="ProductList/icon-carbon-neutral.svg"
                    alt="Carbon neutral icon"
                    className="mr-2 h-6 w-6"
                  />
                  <p className="text-sm">This is a carbon neutral delivery</p>
                </div>
                <button className="mt-4 h-[53px] w-[337px] rounded bg-[#C03D0D] text-white">
                  Confirm Order
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
