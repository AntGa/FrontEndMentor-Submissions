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

export const ProductList = () => {
    const [cartItems, setCartItems] = useState<Dessert[]>([])
    const [itemCount, setItemCount] = useState<number>(0)

    const addToCart = (dessert: Dessert) => {
        setCartItems([...cartItems, dessert])
        setItemCount(itemCount + 1)
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
                    <div className="redhat h-[300px] w-[390px] rounded-xl bg-white p-6">
                        <p className="text-2xl font-bold text-[#C03D0D]">
                            Your Cart ({itemCount})
                        </p>
                        <div className="mt-10 flex justify-center">
                            <img src="ProductList/illustration-empty-cart.svg" />
                        </div>
                        <p className="my-4 text-center font-semibold text-[#7E7371]">
                            Your added items will appear here
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
