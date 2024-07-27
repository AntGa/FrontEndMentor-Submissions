import { Links } from '../links'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Nav.css'

export const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
  },
  enter: (i: number) => ({
    opacity: 1,
    transition: { delay: 0.5 + i * 0.1 },
    rotateX: 0,
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: 'linear', ease: [0.76, 0, 0.24, 1] },
  },
}
export const Nav = () => {
  return (
    <div className="nav">
      <div className="body">
        {Links.map((link, i) => {
          return (
            <div className="linkContainer">
              <motion.div
                key={i}
                custom={i}
                variants={perspective}
                animate="enter"
                exit="exit"
                initial="initial"
              >
                <Link to={link.href}>{link.title}</Link>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
