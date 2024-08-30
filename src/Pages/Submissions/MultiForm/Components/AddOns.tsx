interface AddOnsProps {
  addOns: {
    onlineService: boolean
    largerStorage: boolean
    customizableProfile: boolean
  }
  isYearly: boolean
  updateFormData: (newData: {
    addOns: {
      onlineService: boolean
      largerStorage: boolean
      customizableProfile: boolean
    }
  }) => void
}

const addOnData = [
  {
    type: 'Online Service',
    desc: 'Access to multiplayer games',
    monthlyCost: 1,
    yearlyCost: 10,
  },
  {
    type: 'Larger storage',
    desc: 'Extra 1TB of cloud save',
    monthlyCost: 2,
    yearlyCost: 20,
  },
  {
    type: 'Customizable profile',
    desc: 'Custom theme on your profile',
    monthlyCost: 2,
    yearlyCost: 20,
  },
]

export const AddOns = ({ addOns, isYearly, updateFormData }: AddOnsProps) => {
  const handleCheckboxChange = (type: string) => {
    updateFormData({
      addOns: {
        ...addOns,
        [type]: !addOns[type as keyof typeof addOns],
      },
    })
  }

  return (
    <div className="relative flex h-full w-full flex-col">
      <h1 className="text-[32px] font-bold text-[#00295B]">Pick add-ons</h1>
      <h2 className="mb-10 font-light text-[#CECFD1]">
        Add-ons help enhance your gaming experience.
      </h2>
      <div className="flex flex-col">
        {addOnData.map((addOn) => (
          <div
            key={addOn.type}
            className={`mb-3 flex items-center justify-between rounded-lg border px-4 py-3 ${
              addOns[
                addOn.type
                  .replace(/\s+/g, '')
                  .toLowerCase() as keyof typeof addOns
              ]
                ? 'border-[#534C99] bg-[#F8F8FF]'
                : 'border-[#DBDADF]'
            }`}
            onClick={() =>
              handleCheckboxChange(addOn.type.replace(/\s+/g, '').toLowerCase())
            }
          >
            <input
              type="checkbox"
              checked={
                addOns[
                  addOn.type
                    .replace(/\s+/g, '')
                    .toLowerCase() as keyof typeof addOns
                ]
              }
              onChange={() =>
                handleCheckboxChange(
                  addOn.type.replace(/\s+/g, '').toLowerCase()
                )
              }
              className="mr-3 h-5 w-5"
            />
            <div className="flex w-full flex-col">
              <h2 className="font-bold text-[#00295B]">{addOn.type}</h2>
              <p className="font-light text-[#CECFD1]">{addOn.desc}</p>
            </div>
            <h2 className="font-semibold text-[#8F8BC8]">
              {isYearly
                ? `+$${addOn.yearlyCost}/yr`
                : `+$${addOn.monthlyCost}/mo`}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}
