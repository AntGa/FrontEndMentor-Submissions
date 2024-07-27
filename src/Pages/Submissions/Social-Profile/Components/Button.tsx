export const Button = ({text}: {text: string}) => {
  return (
    <button className='font-medium  w-[305px] h-[44px] bg-[#333333] rounded-lg text-white hover:bg-[hsl(75,94%,57%)]  transition-colors duration-300 hover:text-black'>{text}</button>
  )
}
