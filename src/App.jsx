import NewArrival from "./components/NewArrival";
import CategoryOffer from "./components/CategoryOffer";
import BrowseCategory from "./components/BrowseCategory";
import BestSelling from "./components/BestSelling";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <>
      <div className="flex flex-col items-center w-full h-dvh">
        <div className="w-4/5 py-6">
          <Header />
        </div>
        <div className="h-full w-4/5">
          <Routes>
            <Route path="register" element={<LoginPage />} />
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
  );
}

export default App;
