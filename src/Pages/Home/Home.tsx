import { Layout } from '../../components/Layout'
import { motion } from 'framer-motion'
import { IntroText } from './Components/IntroText'
const Home = () => {
  return (
    <>
      <Layout>
        <div className="flex h-dvh items-center justify-center bg-black">
          <IntroText />
        </div>
      </Layout>
      <motion.div
        className="slide-in z-50"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 0, opacity: 1 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  )
}

export default Home
