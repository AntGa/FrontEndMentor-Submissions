import React from 'react'

interface PersonalInfoFormProps {
  formData: {
    name: string
    email: string
  }
  updateFormData: (data: {
    personalInfo: { name: string; email: string }
  }) => void
}

export const PersonalInfo: React.FC<PersonalInfoFormProps> = ({
  formData,
  updateFormData,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    updateFormData({
      personalInfo: {
        ...formData,
        [name]: value,
      },
    })
  }
  return (
    <div className="relative flex h-full w-full flex-col">
      <h1 className="text-[32px] font-bold text-[#102544]">Personal info</h1>
      <h2 className="font-light text-[#CECFD1]">
        Please provide your name, email address, and phone number.
      </h2>
      <div>
        <p>Name</p>
        <input
          className="mb-2 h-12 w-full rounded-lg border"
          placeholder="e.g Stephen King"
        ></input>
        <p>Email Address</p>
        <input
          className="mb-2 h-12 w-full rounded-lg border"
          placeholder="e.g Stephen King"
        ></input>
        <p>Phone</p>
        <input
          className="mb-2 h-12 w-full rounded-lg border"
          placeholder="e.g Stephen King"
        ></input>
      </div>
      <button className="absolute bottom-0 right-0 flex h-12 w-32 items-center justify-center rounded-xl bg-[#052858] text-white">
        Next Step
      </button>
    </div>
  )
}
