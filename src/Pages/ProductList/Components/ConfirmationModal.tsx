import React from 'react'
import { CartItemType } from '../ProductList' // Adjust the path as necessary

interface OrderConfirmationModalProps {
  cartItems: Map<string, CartItemType>
  onClose: () => void
}

const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  cartItems,
  onClose,
}) => {
  const totalPrice = Array.from(cartItems.values()).reduce(
    (acc, item) => acc + item.price! * item.quantity,
    0
  )

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[400px] rounded-md bg-white p-6">
        <h2 className="mb-4 text-xl font-bold">Order Confirmation</h2>
        {Array.from(cartItems.values()).map((item, index) => (
          <div key={index} className="mb-2 flex justify-between">
            <p>
              {item.name} x{item.quantity}
            </p>
            <p>${(item.price! * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <div className="flex justify-between font-bold">
          <p>Total:</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <button
          className="mt-4 rounded-md bg-[#C03D0D] px-4 py-2 text-white"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default OrderConfirmationModal
