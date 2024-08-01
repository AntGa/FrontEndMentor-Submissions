/* import { useMediaQuery } from './components/UseMediaQuery' */
import './AgentLanding.css'

function AgencyLanding() {
  /*   const { isMobile } = useMediaQuery() */

  return (
    <div className="relative w-dvw">
      <div className="flex justify-between p-9">
        <img src="AgencyLanding/logo.svg" className="h-[33px] w-[171px]"></img>
        <div className="flex items-center gap-9 font-bold text-white">
          <a>About</a>
          <a>Services</a>
          <a>Projects</a>
          <div>
            <a>Contact</a>
          </div>
        </div>
      </div>
      <img
        className="absolute top-0 -z-10 h-[800px] w-full object-cover"
        src="AgencyLanding/desktop/image-header.jpg"
      ></img>
    </div>
  )
}

export default AgencyLanding
