import { useState } from 'react'
import { Sidebar } from './Components/Sidebar'
import { PersonalInfo } from './Components/PersonalInfo'
import { Plan } from './Components/Plan'
import { AddOns } from './Components/AddOns'
import { Summary } from './Components/Summary'
import { Layout } from '../../../components/Layout'

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
    onlineService: boolean
    largerStorage: boolean
    customizableProfile: boolean
  }
  summary: {
    agreement: boolean
  }
}

const Confirmed = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-[32px] font-bold text-[#00295B]">Thank You!</h1>
      <p className="mt-4 text-[#CECFD1]">Your submission has been confirmed.</p>
    </div>
  )
}

export const MultiForm = () => {
  const [currentStage, setCurrentStage] = useState<number>(0)
  const [formData, setFormData] = useState<FormData>({
    personalInfo: { name: '', email: '', phone: '' },
    plan: { type: '', cost: 0 },
    addOns: {
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
    },
    summary: { agreement: false },
  })
  const [isYearly, setIsYearly] = useState<boolean>(false)
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false)

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }))
  }

  const handleConfirm = () => {
    setFormData({
      personalInfo: { name: '', email: '', phone: '' },
      plan: { type: '', cost: 0 },
      addOns: {
        onlineService: false,
        largerStorage: false,
        customizableProfile: false,
      },
      summary: { agreement: false },
    })
    setIsConfirmed(true)
  }

  const stages = [
    <PersonalInfo
      formData={formData.personalInfo}
      updateFormData={updateFormData}
    />,
    <Plan
      formData={formData.plan}
      updateFormData={updateFormData}
      isYearly={isYearly}
      setIsYearly={setIsYearly}
    />,
    <AddOns
      addOns={formData.addOns}
      isYearly={isYearly}
      updateFormData={updateFormData}
    />,
    <Summary
      formData={formData}
      isYearly={isYearly}
      setCurrentStage={setCurrentStage}
    />,
    <Confirmed />,
  ]

  if (isConfirmed) {
    return (
      <Layout>
        <div className="relative flex h-dvh w-dvw flex-col items-center justify-center overflow-hidden bg-[#EEF5FF] max-md:justify-normal">
          <div className="flex flex-col px-24 pb-7 pt-14 max-md:px-0 max-md:py-0">
            {stages[stages.length - 1]} {/* Show Confirmed component */}
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="relative flex h-dvh w-dvw flex-col items-center justify-center overflow-hidden bg-[#EEF5FF] max-md:justify-normal">
        <div className="max-md:w-full md:hidden">
          <Sidebar currentIndex={currentStage} />
        </div>
        <div className="m-5 flex rounded-xl bg-white p-4 max-md:absolute max-md:top-24 max-md:flex-col md:min-h-[600px] md:justify-center">
          <div className="max-md:hidden">
            <Sidebar currentIndex={currentStage} />
          </div>
          <div className="relative flex flex-col px-24 pb-7 pt-14 max-md:px-0 max-md:py-0">
            {stages[currentStage]}
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
            {currentStage === stages.length - 1 && !isConfirmed && (
              <button
                className="absolute bottom-10 right-10 flex h-12 w-32 items-center justify-center rounded-xl bg-[#052858] text-white"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 flex h-20 w-full justify-between bg-white p-4 md:hidden">
          {currentStage > 0 && (
            <button
              className="text-gray flex h-12 w-32 items-center justify-center rounded-xl"
              onClick={() => setCurrentStage(currentStage - 1)}
            >
              Go Back
            </button>
          )}
          {currentStage < stages.length - 1 && (
            <button
              className="flex h-12 w-32 items-center justify-center rounded-xl bg-[#052858] text-white"
              onClick={() => setCurrentStage(currentStage + 1)}
            >
              Next Step
            </button>
          )}
          {currentStage === stages.length - 1 && !isConfirmed && (
            <button
              className="flex h-12 w-32 items-center justify-center rounded-xl bg-[#052858] text-white"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          )}
        </div>
      </div>
    </Layout>
  )
}
