import React from 'react'

interface SummaryProps {
  formData: {
    plan: {
      type: string
      cost: number
    }
    addOns: {
      onlineService: boolean
      largerStorage: boolean
      customizableProfile: boolean
    }
  }
  isYearly: boolean
  setCurrentStage: React.Dispatch<React.SetStateAction<number>>
}

export const Summary = ({
  formData,
  isYearly,
  setCurrentStage,
}: SummaryProps) => {
  const { plan, addOns } = formData

  const addOnsData = [
    { type: 'Online Service', monthlyCost: 1, yearlyCost: 10 },
    { type: 'Larger storage', monthlyCost: 2, yearlyCost: 20 },
    { type: 'Customizable profile', monthlyCost: 2, yearlyCost: 20 },
  ]

  // Calculate add-ons cost
  const addOnsCost = addOnsData.reduce((total, addOn) => {
    const isSelected =
      addOns[
        addOn.type.replace(/\s+/g, '').toLowerCase() as keyof typeof addOns
      ]
    if (isSelected) {
      return total + (isYearly ? addOn.yearlyCost : addOn.monthlyCost)
    }
    return total
  }, 0)

  const totalCost = plan.cost + addOnsCost
  const total = isYearly ? `$${totalCost}/yr` : `$${totalCost}/mo`

  const handleChangePlan = () => {
    setCurrentStage(1) // Assuming the "Select Plan" stage is index 1
  }

  return (
    <div className="relative flex h-full w-full flex-col">
      <h1 className="text-[32px] font-bold text-[#00295B]">Finishing Up</h1>
      <h2 className="mb-10 font-light text-[#CECFD1]">
        Double-check everything looks OK before confirming.
      </h2>
      <div className="flex flex-col rounded-lg bg-[#F8F9FE] p-4">
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-[#00295B]">
              {plan.type} ({isYearly ? 'Yearly' : 'Monthly'})
            </h1>
            <a
              className="cursor-pointer text-[#8F8BC8]"
              onClick={handleChangePlan}
            >
              Change
            </a>
          </div>
          <p className="font-semibold text-[#8F8BC8]">
            {isYearly ? `$${plan.cost}/yr` : `$${plan.cost}/mo`}
          </p>
          <div className="my-2 h-[1px] w-full bg-[#CECFD1]"></div>
          <div className="flex flex-col">
            {addOnsData.map(
              (addOn) =>
                addOns[
                  addOn.type
                    .replace(/\s+/g, '')
                    .toLowerCase() as keyof typeof addOns
                ] && (
                  <div
                    key={addOn.type}
                    className="flex items-center justify-between"
                  >
                    <p>{addOn.type}</p>
                    <p className="font-semibold text-[#8F8BC8]">
                      {isYearly
                        ? `+$${addOn.yearlyCost}/yr`
                        : `+$${addOn.monthlyCost}/mo`}
                    </p>
                  </div>
                )
            )}
          </div>
        </div>
        <div className="flex items-center justify-between font-semibold text-[#00295B]">
          <p>Total per {isYearly ? 'year' : 'month'}</p>
          <p>{total}</p>
        </div>
      </div>
    </div>
  )
}
