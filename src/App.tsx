import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import UserProfile from "./pages/UserProfile";
import Footer from "./layouts/Footer";
import { Toaster } from "sonner";
import MobileHeader from "./layouts/MobileHeader";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Verify from "./pages/Verify";
import Explore from "./pages/Explore";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "./hooks/useAuth";
import BikeDetails from "./pages/BikeDetails";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { X } from "lucide-react";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Header />
      <MobileHeader />
      <div className="md:px-16 px-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login"  element={isAuthenticated ? <Navigate to="/user-profile" replace /> : <Login />} />
          <Route path="/signup"   element={isAuthenticated ? <Navigate to="/user-profile" replace /> : <SignUp />} />
          {/* <Route path="/login"  element={ <Login />} />
          <Route path="/signup"   element={ <SignUp />} /> */}
          <Route path="/email-verify" element={<Verify />} />
          <Route path="/explore-bikes" element={<Explore />} />
          <Route path="bikes/:id" element={<BikeDetails/>}/>
          <Route
            path="/user-profile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
      <Toaster position="top-center" />
    </>
  );
}

export default App;
