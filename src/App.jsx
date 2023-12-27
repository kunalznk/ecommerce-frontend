import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

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
        <div className="w-4/5 py-6">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
