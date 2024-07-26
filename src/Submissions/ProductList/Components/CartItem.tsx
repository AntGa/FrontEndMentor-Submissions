import React from 'react'

interface CartItemProps {
  quantity: number
  price: number
  name: string
  onRemove: () => void // Add a callback for removing the item
}

const CartItem: React.FC<CartItemProps> = ({
  quantity,
  price,
  name,
  onRemove,
}) => {
  const totalPrice = quantity * price

  return (
    <div className="flex h-[70px] w-[337px] items-center justify-between border-b border-[#E0E0E0] bg-white p-4">
      <p className="text-[15px] font-semibold text-[#180A07]">{name}</p>
      <div className="flex items-center gap-2">
        <p className="text-[15px] font-semibold text-[#C83B0E]">{quantity}x</p>
        <p className="text-[15px] font-semibold text-[#A64928]">
          @{price.toFixed(2)}
        </p>
        <p className="text-[15px] font-semibold text-[#180A07]">
          ${totalPrice.toFixed(2)}
        </p>
      </div>
      <button
        onClick={onRemove}
        className="flex h-6 w-6 items-center justify-center"
      >
        <img
          className="h-4 w-4"
          src="ProductList/icon-remove-item.svg"
          alt="Remove Item"
        />
      </button>
    </div>
  )
}

export default CartItem
