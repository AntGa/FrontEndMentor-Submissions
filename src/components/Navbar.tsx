import { SubmissionButton } from './SubmissionButton'

const Navbar = () => {
  return (
    <nav className="menu flex flex-col gap-5">
      <SubmissionButton text="QRCODE" />
      <SubmissionButton text="SocialProfile" />
      <SubmissionButton text="ProductList" />
    </nav>
  )
}

export default Navbar
