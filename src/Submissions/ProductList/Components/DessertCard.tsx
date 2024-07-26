import React from 'react'
import '../ProductList.css'

export const DessertCard = ({
    FoodType,
    Name,
    Price,
    ImgSrc,
    OnAddToCart,
}: {
    FoodType?: string
    Name?: string
    Price?: number
    ImgSrc?: string
    OnAddToCart: () => void
}) => {
    return (
        <div className="redhat h-[344px] w-[252px]">
            <div className="relative h-[242px] w-[252px]">
                <img className="rounded-md" src={ImgSrc}></img>
                <button
                    onClick={OnAddToCart}
                    className="absolute h-11 w-40 -translate-y-5 translate-x-11 rounded-full border border-[#98908E] bg-white"
                >
                    <img
                        className="translate-x-5 translate-y-3"
                        src="ProductList/icon-add-to-cart.svg"
                    />
                    <p className="-translate-y-[10px] translate-x-2">
                        Add to Cart
                    </p>
                </button>
            </div>
            <p className="mt-[38px] text-sm font-normal text-[#7E7371]">
                {FoodType}
            </p>
            <p className="text-[15px] font-semibold text-[#180A07]">{Name}</p>
            <p className="text-[15px] font-semibold text-[#A64928]">
                ${Price?.toFixed(2)}
            </p>
        </div>
    )
}
