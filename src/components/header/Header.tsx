import { useState } from 'react'
import { Button } from './Button/Button'
import './Header.css'
import { motion } from 'framer-motion'

const variants = {
  open: {
    width: 480,
    height: 650,
    top: '-25px',
    right: '-25px',
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 100,
    height: 40,
    top: '0px',
    right: '0px',
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
}
export const Header = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="header">
      <motion.div
        className="menu"
        variants={variants}
        animate={isActive ? 'open' : 'closed'}
        initial="closed"
      ></motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  )
}
