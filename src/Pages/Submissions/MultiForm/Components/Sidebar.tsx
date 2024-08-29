import React from 'react'
import '../Styling/MultiForm.css'

type SidebarProps = {
  currentIndex: number
}

export const Sidebar: React.FC<SidebarProps> = ({ currentIndex }) => {
  const steps = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY']

  return (
    <div className="Ubuntu relative max-md:w-full">
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet="MultiForm/bg-sidebar-mobile.svg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="MultiForm/bg-sidebar-desktop.svg"
        />
        <img
          src="MultiForm/bg-sidebar-desktop.svg"
          alt="Sidebar Background"
          className="h-[600px] w-full object-cover max-md:h-[174px]"
        />
      </picture>
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center px-8 py-9 text-white max-md:flex-row max-md:justify-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className="mb-6 flex w-full items-center max-md:h-full max-md:items-baseline max-md:justify-center"
          >
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
              <p className={'font-thin text-white max-md:hidden'}>
                Step {index + 1}
              </p>
              <p className={'font-bold text-white max-md:hidden'}>{step}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
