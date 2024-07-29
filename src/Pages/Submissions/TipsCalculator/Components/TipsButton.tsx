import { motion } from 'framer-motion'

type TipsButtonProps = {
  text: number
  onClick: () => void
  isSelected: boolean
}

export const TipsButton = ({ text, onClick, isSelected }: TipsButtonProps) => {
  return (
    <motion.button
      className={`h-[50px] w-[118px] rounded-lg text-[24px] font-semibold text-white`}
      style={{ backgroundColor: isSelected ? '#36C1B0' : '#00474B' }}
      onClick={onClick}
      whileHover={{ backgroundColor: '#9FE8DF' }}
    >
      {text}%
    </motion.button>
  )
}
