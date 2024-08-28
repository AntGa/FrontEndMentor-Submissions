import React from 'react'
import { useState } from 'react'
import { Sidebar } from './Components/Sidebar'
import { PersonalInfo } from './Components/PersonalInfo'

interface FormData {
  personalInfo: {
    name: string
    email: string
    phone: string
  }
  plan: {
    type: string
  }
  addOns: {
    newsletter: boolean
    support: boolean
  }
  summary: {
    agreement: boolean
  }
}

export const MultiForm = () => {
  const [currentStage, setCurrentStage] = useState<number>(0)
  const [formData, setFormData] = useState<FormData>({
    personalInfo: { name: '', email: '', phone: '' },
    plan: { type: '' },
    addOns: { newsletter: false, support: false },
    summary: { agreement: false },
  })
  return (
    <div className="flex h-dvh w-dvw items-center justify-center bg-[#EEF5FF]">
      <div className="flex justify-center rounded-xl bg-white p-4">
        <Sidebar currentIndex={0} />
        <div className="flex flex-col px-24 pb-7 pt-14">
          <PersonalInfo></PersonalInfo>
        </div>
      </div>
    </div>
  )
}
