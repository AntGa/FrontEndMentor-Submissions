// import { useMediaQuery } from './components/UseMediaQuery'
import './AgentLanding.css'
// import { motion } from 'framer-motion'
function AgencyLanding() {
  // const { isMobile } = useMediaQuery()

  return (
    <>
      <div className="bg-header h-[801px] max-h-full w-full bg-cover bg-center bg-no-repeat">
        <div className="flex items-center justify-between px-[36px] py-[40px] text-[18px]">
          <img
            src="AgencyLanding/logo.svg"
            className="h-[33px] w-[171px]"
          ></img>
          <div className="barlow flex items-center text-white">
            <ul className="flex items-center gap-10 font-semibold">
              <a>About</a>
              <a>Services</a>
              <a>Projects</a>
              <button className="h-14 w-[140px] rounded-full bg-white">
                <a className="fraunces text-[16px] font-bold text-black">
                  CONTACT
                </a>
              </button>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-full">
          <div className="p-[157px]">
            <p className="fraunces text-[40px] font-[1000] leading-[50px]">
              Transform your brand
            </p>
            <p className="barlow">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
          </div>
        </div>
        <div className="h-[600px] w-full">
          <img
            className="h-full w-full"
            src="AgencyLanding/desktop/image-transform.jpg"
          />
        </div>
      </div>
      <div className="flex w-full">
        <div className="h-[600px] w-full">
          <img
            className="h-full w-full"
            src="AgencyLanding/desktop/image-stand-out.jpg"
          ></img>
        </div>
        <div className="w-full">
          <div className="p-11">
            <p className="fraunces text-[40px] font-[1000] leading-[50px]">
              Transform your brand
            </p>
            <p className="barlow">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <img
          className="flex-1"
          src="AgencyLanding/desktop/image-graphic-design.jpg"
        ></img>
        <img
          className="flex-1"
          src="AgencyLanding/desktop/image-photography.jpg"
        ></img>
      </div>
    </>
  )
}

export default AgencyLanding
