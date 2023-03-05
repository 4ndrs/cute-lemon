import { Route, Routes } from "react-router-dom";

import { Header, Footer, Home, Reservations } from "./components";
import { HamburgerProvider } from "./context/hamburger";
import { BookingProvider } from "./context/booking";

import NotFound from "./components/NotFound";

import useScrollReset from "./hooks/useScrollReset";

const App = () => {
  useScrollReset();

  return (
    <>
      <HamburgerProvider>
        <Header />
      </HamburgerProvider>

      <BookingProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/*" element={<Reservations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BookingProvider>

      <Footer />
    </>
  );
};

export default App;
