import { Layout } from '../components/Layout'
import { delay, motion } from 'framer-motion'

const Home = () => {
  return (
    <>
      <Layout>
        <div className="flex h-dvh items-center justify-center">
          <motion.div
            className="mb-32 flex flex-col items-center text-3xl"
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            transition={{ ease: [0.5, 1, 0.89, 1], duration: 0.75 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
            >
              Anton's Frontend Mentor Submissions
            </motion.p>
            <motion.div
              className="rounded-full bg-black"
              initial={{ height: 16, width: 16 }}
              animate={{ height: 4, width: 556 }}
              transition={{ delay: 0.75 }}
            ></motion.div>
          </motion.div>
        </div>
      </Layout>
      <motion.div
        className="slide-in z-50"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  )
}

export default Home
