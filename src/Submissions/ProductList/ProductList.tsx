import './ProductList.css'
import { DessertCard } from './Components/DessertCard'
import desserts from './desserts.json'
import { useState } from 'react'

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
            // Create a new map to avoid mutating the existing state
            const newCartItems = new Map(prevCartItems)
            const itemName = dessert.name || ''

            if (newCartItems.has(itemName)) {
                const existingItem = newCartItems.get(itemName)!
                existingItem.quantity += 1
                newCartItems.set(itemName, existingItem)
            } else {
                newCartItems.set(itemName, {
                    ...dessert,
                    quantity: 1,
                })
            }

            // Calculate the new item count
            const newItemCount = Array.from(newCartItems.values()).reduce(
                (acc, item) => acc + item.quantity,
                0,
            )

            setItemCount(newItemCount)

            return newCartItems
        })
    }

    return (
        <div className="flex min-h-screen w-full justify-center bg-[#FCF8F5]">
            <div className="flex w-[1440px] px-28 pt-[88px]">
                <div className="w-[833px]">
                    <p className="redhat mb-8 text-[40px] font-bold">
                        Desserts
                    </p>
                    <div className="flex flex-wrap gap-5">
                        {desserts.map((desserts, index) => (
                            <DessertCard
                                key={index}
                                FoodType={desserts.category}
                                Name={desserts.name}
                                ImgSrc={desserts.image.desktop}
                                Price={desserts.price}
                                OnAddToCart={() => addToCart(desserts)}
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
                                {Array.from(cartItems.values()).map(
                                    (item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center"
                                        >
                                            <img
                                                className="mr-2 h-16 w-16 rounded-md"
                                                src={item.image.desktop}
                                                alt={item.name}
                                            />
                                            <div>
                                                <p className="text-sm font-semibold text-[#180A07]">
                                                    {item.name}
                                                </p>
                                                <p className="text-sm text-[#7E7371]">
                                                    x{item.quantity}
                                                </p>
                                            </div>
                                        </div>
                                    ),
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
