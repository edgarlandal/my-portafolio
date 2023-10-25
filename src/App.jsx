import { Route, Routes } from "react-router-dom";

/** Pages */
import HomePage from "./pages/HomePage";

/** Components */
import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
