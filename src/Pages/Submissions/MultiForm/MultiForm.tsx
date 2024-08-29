import React, { useState } from 'react'
import { Sidebar } from './Components/Sidebar'
import { PersonalInfo } from './Components/PersonalInfo'
import { Plan } from './Components/Plan'
import { AddOns } from './Components/AddOns'
import { Summary } from './Components/Summary'

interface FormData {
  personalInfo: {
    name: string
    email: string
    phone: string
  }
  plan: {
    type: string
    cost: number
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
    plan: { type: '', cost: 0 },
    addOns: { newsletter: false, support: false },
    summary: { agreement: false },
  })

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }))
  }

  const stages = [
    <PersonalInfo
      formData={formData.personalInfo}
      updateFormData={updateFormData}
    />,
    <Plan formData={formData.plan} updateFormData={updateFormData} />,
  ]

  return (
    <div className="relative flex h-dvh w-dvw flex-col items-center justify-center overflow-hidden bg-[#EEF5FF] max-md:justify-normal">
      <div className="max-md:w-full md:hidden">
        <Sidebar currentIndex={currentStage} />
      </div>
      <div className="m-5 flex rounded-xl bg-white p-4 max-md:absolute max-md:top-24 max-md:flex-col md:min-h-[600px] md:justify-center">
        <div className="max-md:hidden">
          <Sidebar currentIndex={currentStage} />
        </div>
        <div className="relative flex flex-col px-24 pb-7 pt-14 max-md:px-0 max-md:py-0">
          {stages[currentStage]} {/* Rendering based on current stage */}
          {currentStage > 0 && (
            <button
              className="text-gray absolute bottom-10 left-10 flex h-12 w-32 items-center justify-center rounded-xl max-md:hidden"
              onClick={() => setCurrentStage(currentStage - 1)}
            >
              Go Back
            </button>
          )}
          {currentStage < stages.length - 1 && (
            <button
              className="absolute bottom-10 right-10 flex h-12 w-32 items-center justify-center rounded-xl bg-[#052858] text-white max-md:hidden"
              onClick={() => setCurrentStage(currentStage + 1)}
            >
              Next Step
            </button>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 flex h-20 w-full justify-between bg-white p-4 md:hidden">
        {currentStage > 0 ? (
          <button
            className="text-gray flex h-12 w-32 items-center justify-center rounded-xl"
            onClick={() => setCurrentStage(currentStage - 1)}
          >
            Go Back
          </button>
        ) : (
          <div className="w-32"></div>
        )}
        {currentStage < stages.length - 1 && (
          <button
            className="flex h-12 w-32 items-center justify-center rounded-xl bg-[#052858] text-white"
            onClick={() => setCurrentStage(currentStage + 1)}
          >
            Next Step
          </button>
        )}
      </div>
    </div>
  )
}
