import React, { useState } from 'react'
import '../Styling/MultiForm.css'

interface PlanProps {
  formData: {
    type: string
    cost: number
  }
  updateFormData: (newData: { plan: { type: string; cost: number } }) => void
}

export const Plan = ({ formData, updateFormData }: PlanProps) => {
  ;` `
  const [isYearly, setIsYearly] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string>(formData.type) // State to track selected plan

  const handleToggle = () => {
    setIsYearly(!isYearly)
  }

  const handlePlanSelect = (planType: string, cost: number) => {
    setSelectedPlan(planType)
    updateFormData({ plan: { type: planType, cost } })
  }

  const planData = [
    { type: 'Arcade', monthlyCost: 9, yearlyCost: 90 },
    { type: 'Advanced', monthlyCost: 12, yearlyCost: 120 },
    { type: 'Pro', monthlyCost: 15, yearlyCost: 150 },
  ]

  return (
    <div className="Ubuntu flex h-full w-full flex-col">
      <h1 className="text-[32px] font-bold text-[#00295B]">Select your plan</h1>
      <h2 className="mb-10 font-light text-[#CECFD1]">
        You have the option of monthly or yearly billing.
      </h2>
      <div className="flex gap-4 max-md:flex-col">
        {planData.map((plan) => (
          <div
            key={plan.type}
            className={`flex cursor-pointer rounded-lg border p-4 md:flex-col ${
              selectedPlan === plan.type
                ? 'border-[#6964A5] bg-[#F8F9FE]'
                : 'border-[#DBDBDD]'
            } hover:border-[#6964A5]`}
            onClick={() =>
              handlePlanSelect(
                plan.type,
                isYearly ? plan.yearlyCost : plan.monthlyCost
              )
            }
          >
            <img
              src={`MultiForm/icon-${plan.type.toLowerCase()}.svg`}
              className="h-[40px] w-[40px] max-md:mr-4 md:mb-10 md:mr-14"
              alt={`${plan.type} icon`}
            />
            <div>
              <h2 className="font-bold text-[#12233F]">{plan.type}</h2>
              <p>
                {isYearly
                  ? `$${plan.yearlyCost}/yr`
                  : `$${plan.monthlyCost}/mo`}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex w-full items-center justify-center rounded-xl bg-[#F8F9FE] p-4">
        <label className="flex items-center">
          <span className="mr-3 text-[#00295B]">Monthly</span>
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={isYearly}
              onChange={handleToggle}
            />
            <div className="h-7 w-14 rounded-full bg-[#04265B] shadow-inner"></div>
            <div
              className={`dot absolute left-1 top-[4px] h-5 w-5 rounded-full bg-white shadow transition ${
                isYearly ? 'translate-x-7 transform' : ''
              }`}
            ></div>
          </div>
          <span className="ml-3 text-[#00295B]">Yearly</span>
        </label>
      </div>
    </div>
  )
}
