// src/App.tsx
import { Route, Routes, useLocation } from 'react-router-dom'
import QRCODE from './Pages/Submissions/QR-CODE'
import SocialProfile from './Pages/Submissions/Social-Profile'
import ProductList from './Pages/Submissions/ProductList/ProductList'
import { AnimatePresence } from 'framer-motion'
import Home from './Pages/Home/Home'
import ProductPreview from './Pages/Submissions/ProductPreviewCard/Productpreview'
import TipsCalculator from './Pages/Submissions/TipsCalculator/TipsCalculator'
import AgencyLanding from './Pages/Submissions/AgencyLanding/AgencyLanding'
import { MultiForm } from './Pages/Submissions/MultiForm/MultiForm'
function App() {
  const location = useLocation()

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/QRCODE" element={<QRCODE />} />
          <Route path="/SocialProfile" element={<SocialProfile />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/ProductPreviewCard" element={<ProductPreview />} />
          <Route path="/TipsCalculator" element={<TipsCalculator />} />
          <Route path="/AgencyLanding" element={<AgencyLanding />} />
          <Route path="/MultiForm" element={<MultiForm />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
