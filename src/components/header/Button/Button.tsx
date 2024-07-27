import { Dispatch, SetStateAction } from 'react'
import './Button.css'
import { motion } from 'framer-motion'
export const Button = ({
  isActive,
  setIsActive,
}: {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div
      onClick={() => {
        setIsActive(!isActive)
      }}
      className="absolute right-[0px] top-[0px] h-10 w-[100px] cursor-pointer overflow-hidden rounded-full"
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ top: isActive ? '-100%' : '0' }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="el">
          <PerspectiveText label="Menu" />
        </div>
        <div className="el">
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  )
}

function PerspectiveText({ label }: { label: string }) {
  return (
    <div className="perspectiveText">
      <p>{label}</p>
      <p>{label}</p>
    </div>
  )
}
