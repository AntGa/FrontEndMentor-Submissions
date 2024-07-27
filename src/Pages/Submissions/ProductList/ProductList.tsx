import './ProductList.css'
import { DessertCard } from './Components/DessertCard'
import desserts from './desserts.json'
import { useState } from 'react'
import CartItemComponent from './Components/CartItem'
import OrderConfirmationModal from './Components/ConfirmationModal' // Adjust the path as necessary
import SwipeTransition from '../../../components/Swipetransition'
import { Layout } from '../../../components/Layout'
interface Dessert {
  category?: string
  name?: string
  price?: number
  image: {
    desktop: string
  }
}

export interface CartItemType extends Dessert {
  quantity: number
}

function ProductList() {
  const [cartItems, setCartItems] = useState<Map<string, CartItemType>>(
    new Map()
  )
  const [itemCount, setItemCount] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

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

  const handleOrderConfirm = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setCartItems(new Map())
    setItemCount(0)
  }

  const totalPrice = Array.from(cartItems.values()).reduce(
    (acc, item) => acc + item.price! * item.quantity,
    0
  )

  return (
    <Layout>
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
                    <CartItemComponent
                      key={index}
                      name={item.name || ''}
                      quantity={item.quantity}
                      price={item.price || 0}
                      onRemove={() => removeItem(item.name || '')}
                    />
                  ))}
                  <div className="mt-4 flex justify-between font-bold">
                    <p>Total:</p>
                    <p>${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="bg-beige mt-4 flex h-[50px] w-[337px] items-center justify-center">
                    <img
                      src="ProductList/icon-carbon-neutral.svg"
                      alt="Carbon neutral icon"
                      className="mr-2"
                    />
                    <p>This is a carbon neutral delivery</p>
                  </div>
                  <button
                    className="mt-4 h-[53px] w-[337px] rounded-md bg-[#C03D0D] px-4 py-2 text-white"
                    onClick={handleOrderConfirm}
                  >
                    Confirm Order
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {isModalOpen && (
          <OrderConfirmationModal
            cartItems={cartItems}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </Layout>
  )
}

export default SwipeTransition(ProductList)
