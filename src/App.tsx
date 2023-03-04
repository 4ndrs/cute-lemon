import { Route, Routes } from "react-router-dom";

import { Header, Footer, Home, Reservations } from "./components";
import { HamburgerProvider } from "./context/hamburger";
import NotFound from "./components/NotFound";

import useScrollReset from "./hooks/useScrollReset";

const App = () => {
  useScrollReset();

  return (
    <HamburgerProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/*" element={<Reservations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </HamburgerProvider>
  );
};

export default App;
