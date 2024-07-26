import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import QRCODE from "./Submissions/QR-CODE";
import SocialProfile from "./Submissions/Social-Profile";
import { SubmissionButton } from "./components/SubmissionButton";
import { ProductList } from "./Submissions/ProductList/ProductList";

const Home = () => {
  return (
    <div className="welcome-screen">
      <h1>Welcome to My Submissions</h1>
      <p>Select a submission from the menu.</p>
    </div>
  );
};

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(true);
  useEffect(() => {
    setShowMenu(location.pathname === "/");
  }, [location.pathname]); // Dependancy array reruns everytime location is changed

  return (
    <div className="app-container">
      {showMenu ? (
        <div className="content">
          <Home />
          <nav className="menu flex flex-col gap-5">
            <SubmissionButton text="QRCODE"></SubmissionButton>
            <SubmissionButton text="SocialProfile"></SubmissionButton>
            <SubmissionButton text="ProductList"></SubmissionButton>
          </nav>
        </div>
      ) : (
        <button
          onClick={() => navigate("/")}
          className="back-button duration-300"
        >
          Back to Menu
        </button>
      )}

      <Routes>
        <Route path="/QRCODE" element={<QRCODE />} />
        <Route path="/SocialProfile" element={<SocialProfile />} />
        <Route path="/ProductList" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;