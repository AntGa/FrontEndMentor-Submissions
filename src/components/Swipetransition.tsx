import { motion } from 'framer-motion'

const SwipeTransition = (OgComponent: any) => {
  return () => (
    <>
      <motion.div
        className="slide-in z-50"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <OgComponent />
      <motion.div
        className="slide-out z-50"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  )
}

export default SwipeTransition
