import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <>
<<<<<<< HEAD
      <div className="flex flex-col justify-center items-center w-full h-dvh">
        {/* <Home /> */}
        {/* <LoginPage /> */}
        {/* <RegisterPage/> */}
         <EditProfile/>
=======
      <div className="flex flex-col items-center w-full h-dvh">
        <div className="w-4/5 py-6">
          <Header />
        </div>
        <div className="h-full w-4/5">
          <Home />
        </div>
        <div className="w-4/5 py-6">
          <Footer />
        </div>
>>>>>>> c63be24f5b55c2335a19e8ecc86e4ff83733aec9
      </div>
    </>
  );
}

export default App;
