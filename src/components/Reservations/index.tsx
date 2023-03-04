import { Route, Routes, useNavigate } from "react-router-dom";

import Form from "./Form";
import Blank from "../Blank";
import Kansha from "./Kansha";
import Overview from "./Overview";
import NotFound from "../NotFound";
import BackButton from "../BackButton";

import "./Reservations.css";

const Reservations = () => {
  return (
    <>
      <div className="reservations-background">
        <main>
          <Header />
          <Routes>
            <Route index element={<Form />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/thanks" element={<Kansha />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <Blank />
    </>
  );
};

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="reservation-header">
      <BackButton onClick={() => navigate(-1)} />
      <h1 className="section-title">RESERVE A TABLE</h1>
    </div>
  );
};

export default Reservations;
