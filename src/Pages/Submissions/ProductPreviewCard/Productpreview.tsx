import SwipeTransition from '../../../components/Swipetransition'
import { Layout } from '../../../components/Layout'
import './ProductPreviewCard.css'
import { motion } from 'framer-motion'
function ProductPreview() {
  return (
    <>
      <Layout>
        <div className="flex h-dvh w-dvw items-center justify-center bg-[#F3EAE3]">
          <div className="flex h-[450px] w-[600px] overflow-hidden rounded-lg bg-white max-sm:h-[667px] max-sm:w-[375px] max-sm:flex-col">
            <div className="w-300 h-full w-full">
              <picture>
                <source
                  srcSet="ProductPreviewCard/image-product-mobile.jpg"
                  media="(max-width: 620px)"
                />
                <img
                  src="ProductPreviewCard/image-product-desktop.jpg"
                  className="h-full w-full"
                />
              </picture>
            </div>
            <div className="flex h-full w-full flex-col p-8 text-[12px]">
              <p className="Montserrat tracking-[4px] text-[#88878F]">
                PERFUME
              </p>
              <p className="Fraunces mt-5 text-[32px] font-bold leading-8">
                Gabrielle Essence Eau De Parfum
              </p>
              <p className="Montserrat mt-6 text-[14px] text-[#88878F]">
                A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Perfumer-Creator for the House of CHANEL.
              </p>
              <div className="mt-6 flex flex-row items-center">
                <p className="Fraunces text-[32px] font-bold text-[#3C8268]">
                  $149.99
                </p>
                <p className="Montserrat ml-5 text-[14px] text-[#81848B] line-through">
                  $169.99
                </p>
              </div>
              <motion.button
                className="mt-5 flex h-[45px] w-[213px] items-center justify-center rounded-xl bg-[#3D8168]"
                whileHover={{ scale: 1.1, backgroundColor: '#1A4031' }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="ProductPreviewCard/icon-cart.svg" />
                <p className="Montserrat mx-2 font-bold text-white">
                  Add to Cart
                </p>
              </motion.button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default SwipeTransition(ProductPreview)
