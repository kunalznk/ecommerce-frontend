import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import EditProfile from "./pages/EditProfile";
<<<<<<< HEAD
import BillingDetails from "./components/BillingDetails";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";

function App() {
  return (
    // <>
    //   <div className="flex flex-col items-center w-full h-dvh">
    //     <div className="w-4/5 py-6">
    //       <Header />
    //     </div>
    //     <div className="h-full w-4/5">
    //       <Home />
    //     </div>
    //     <div className="w-4/5 py-6">
    //       <Footer />
    //     </div>
    //   </div>
    // </>

    <Contact />
=======
import NewArrival from "./components/NewArrival";
import CategoryOffer from "./components/CategoryOffer";
import BrowseCategory from "./components/BrowseCategory";
import BestSelling from "./components/BestSelling";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <div className="flex flex-col items-center w-full h-dvh">
        <div className="w-4/5 py-6">
          <Header />
        </div>
        <div className="h-full w-4/5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        {/* <div className="w-4/5 py-6">
          <Footer />
        </div> */}
      </div>
    </>
>>>>>>> 3ac6b0c8dbe7fa46010553002b3bd98683a65beb
  );
}

export default App;
