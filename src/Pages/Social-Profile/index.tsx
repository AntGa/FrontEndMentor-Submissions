import { Button } from './Components/Button'
import transition from '../../components/transition'

function SocialProfile() {
  return (
    <>
      <div className="flex h-dvh w-dvw items-center justify-center bg-[#141414]">
        <div className="flex h-[615px] w-[384px] flex-col items-center rounded-lg bg-[#1F1F1F] p-[40px] font-[inter]">
          <img
            src="avatar-jessica.jpeg"
            className="h-[90px] w-[90px] rounded-full"
          ></img>
          <p className="mt-[20px] text-[24px] font-medium text-white">
            Jessica Randal
          </p>
          <p className="mt-[5px] text-[14px] font-medium text-[hsl(75,94%,57%)]">
            London, United Kingdom
          </p>
          <p className="mt-[23px] text-[14px] text-white">
            "Front-end developer and avid reader"
          </p>
          <div className="mt-[23px] flex flex-col gap-4">
            <Button text="Github"></Button>
            <Button text="Frontend Mentor"></Button>
            <Button text="LinkedIn"></Button>
            <Button text="Twitter"></Button>
            <Button text="Instagram"></Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default transition(SocialProfile)
