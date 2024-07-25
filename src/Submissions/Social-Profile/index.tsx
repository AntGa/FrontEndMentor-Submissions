import { Button } from "./Components/Button"

function SocialProfile() {
  return (
    <>
      <div className='bg-[#141414] w-dvw h-dvh flex justify-center items-center'>
        <div className="bg-[#1F1F1F] w-[384px] h-[615px] p-[40px] rounded-lg flex font-[inter] flex-col items-center">
          <img src="avatar-jessica.jpeg" className="rounded-full w-[90px] h-[90px]"></img>
          <p className="text-white text-[24px] font-medium mt-[20px]">Jessica Randal</p>
          <p className="text-[hsl(75,94%,57%)] font-medium text-[14px] mt-[5px]">London, United Kingdom</p>
          <p className="text-white text-[14px] mt-[23px]">"Front-end developer and avid reader"</p>
          <div className="flex flex-col gap-4 mt-[23px]">
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

export default SocialProfile
