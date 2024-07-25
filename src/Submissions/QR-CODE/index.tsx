function QRCODE() {
    return (
      <>
       <div className='w-dvw h-dvh bg-[#D5E1EF] flex justify-center items-center outfit'> 
          <div className='w-[322px] h-[500px] bg-white p-[16px] rounded-xl'>
            <img src='image-qr-code.png' className='rounded-lg'></img>
            <p className='font-bold text-slate-700 mt-[22px] text-center text-[22px]'>Improve your front-end skills by building projects</p>
            <p className='text-slate-500 text-[15px] text-center m-4'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>
       </div>
      </>
    )
  }
  
  export default QRCODE
  