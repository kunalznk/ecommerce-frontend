import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-dvh">
        <Home />
        <LoginPage />
      </div>
    </>
  );
}

export default App;
