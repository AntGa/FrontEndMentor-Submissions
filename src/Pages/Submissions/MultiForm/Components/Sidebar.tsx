import React from 'react'
import '../Styling/MultiForm.css'

type SidebarProps = {
  currentIndex: number
}

export const Sidebar: React.FC<SidebarProps> = ({ currentIndex }) => {
  const steps = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY']

  return (
    <div className="Ubuntu relative">
      <img
        src="MultiForm/bg-sidebar-desktop.svg"
        alt="Sidebar Background"
        className="object-cover"
      />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center px-8 py-9 text-white">
        {steps.map((step, index) => (
          <div key={index} className="mb-6 flex w-full items-center">
            <div
              className={`mr-4 flex h-9 w-9 items-center justify-center rounded-full border-2 ${
                currentIndex === index
                  ? 'border-[#BDDFFF] bg-[#BDDFFF] text-black'
                  : 'border-white'
              }`}
            >
              {index + 1}
            </div>
            <div className="flex flex-col">
              <p className={'font-thin text-white'}>Step {index + 1}</p>
              <p className={'font-bold text-white'}>{step}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
