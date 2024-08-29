import React from 'react'

interface PersonalInfoFormProps {
  formData: {
    name: string
    email: string
    phone: string
  }
  updateFormData: (data: {
    personalInfo: { name: string; email: string; phone: string }
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
      <h1 className="text-[32px] font-bold text-[#00295B]">Personal info</h1>
      <h2 className="mb-10 font-light text-[#CECFD1]">
        Please provide your name, email address, and phone number.
      </h2>
      <div>
        <p>Name</p>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mb-5 h-12 w-full rounded-lg border px-4"
          placeholder="e.g Stephen King"
        />
        <p>Email Address</p>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mb-5 h-12 w-full rounded-lg border px-4"
          placeholder="e.g stephenking@gmail.com"
        />
        <p>Phone</p>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mb-5 h-12 w-full rounded-lg border px-4"
          placeholder="e.g +1234567890"
        />
      </div>
    </div>
  )
}
