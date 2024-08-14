import { motion } from 'framer-motion'

export const IntroText = () => {
  const text = "Anton's Frontend Mentor Submissions".split('')
  const midIndex = Math.floor(text.length / 2)
  const firstHalf = text.slice(0, midIndex)
  const secondHalf = text.slice(midIndex)
  return (
    <motion.div
      className="mb-32 flex flex-col items-center text-3xl text-white"
      initial={{ y: 300 }}
      animate={{ y: 0 }}
      transition={{
        ease: [0.68, -0.6, 0.32, 1.6],
        duration: 0.75,
      }} /* 0.34, 1.56, 0.64, 1 ease out back*/
    >
      <motion.p>
        {firstHalf.map((l, i) => {
          return (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.7 + 0.015 * (secondHalf.length - i),
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              key={`first-${i}`}
            >
              {l}
            </motion.span>
          )
        })}
        {secondHalf.map((l, i) => {
          return (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.7 + 0.015 * i,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              key={`second-${i}`}
            >
              {l}
            </motion.span>
          )
        })}
      </motion.p>
      <motion.div
        className="rounded-full bg-white"
        initial={{ height: 16, width: 16, opacity: 0 }}
        animate={{ height: 4, width: 550, opacity: 1 }}
        transition={{
          delay: 0.75,
          duration: 0.6,
          opacity: { duration: 0.6 },
          ease: [0.22, 1, 0.36, 1],
        }}
      ></motion.div>
    </motion.div>
  )
}
