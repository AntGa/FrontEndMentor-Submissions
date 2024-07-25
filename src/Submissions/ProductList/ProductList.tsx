import './ProductList.css'
import { DessertCard } from './Components/DessertCard'
import desserts from './desserts.json'
const temp_value: number = 3

export const ProductList = () => {
    return (
        <div className="flex h-dvh w-dvw justify-center bg-white">
            <div className="flex h-[1320px] w-[1440px] bg-[#FCF8F5] px-28 pt-[86px]">
                <div className="w-[833px]">
                    <p className="redhat text-[40px] font-bold">Desserts</p>
                    <div className="flex flex-wrap gap-5">
                        {desserts.map((desserts, index) => (
                            <DessertCard
                                key={index}
                                FoodType={desserts.category}
                                Name={desserts.name}
                                ImgSrc={desserts.image.desktop}
                                Price={desserts.price}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <div className="h-[300px] w-[390px] rounded-xl bg-white p-6">
                        <p className="text-2xl font-bold text-[#C03D0D]">
                            Your Cart ({temp_value})
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
