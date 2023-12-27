import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import EditProfile from "./pages/EditProfile";
import NewArrival from "./components/NewArrival";
import CategoryOffer from "./components/CategoryOffer";
import BrowseCategory from "./components/BrowseCategory";
import BestSelling from "./components/BestSelling";

function App() {
  return (
    <>
      <div className="flex flex-col items-center w-full h-dvh">
        <div className="w-4/5 py-6">
          <Header />
        </div>
        <div className="h-full w-4/5">
          <Home />
        </div>
        {/* <div className="w-4/5 py-6">
          <Footer />
        </div> */}
      </div>
    </>
  );
}

export default App;
