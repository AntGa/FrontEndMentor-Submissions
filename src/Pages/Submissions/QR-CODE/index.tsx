import SwipeTransition from '../../../components/Swipetransition'
function QRCODE() {
  return (
    <>
      <div className="outfit flex h-dvh w-dvw items-center justify-center bg-[#D5E1EF]">
        <div className="h-[500px] w-[322px] rounded-xl bg-white p-[16px]">
          <img src="image-qr-code.png" className="rounded-lg"></img>
          <p className="mt-[22px] text-center text-[22px] font-bold text-slate-700">
            Improve your front-end skills by building projects
          </p>
          <p className="m-4 text-center text-[15px] text-slate-500">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </>
  )
}

export default SwipeTransition(QRCODE)
