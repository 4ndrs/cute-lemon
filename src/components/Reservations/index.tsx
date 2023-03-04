import { useNavigate } from "react-router-dom";

import Form from "./Form";
import Blank from "../Blank";
import BackButton from "../BackButton";

import "./Reservations.css";

const Reservations = () => {
  return (
    <>
      <div className="reservations-background">
        <main>
          <Header />
          <Form />
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
