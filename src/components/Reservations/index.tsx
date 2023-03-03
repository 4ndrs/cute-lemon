import Form from "./Form";
import BackButton from "../BackButton";

import "./Reservations.css";

const Reservations = () => {
  return (
    <div className="reservations-background">
      <main>
        <Header />
        <Form />
      </main>
    </div>
  );
};

const Header = () => (
  <div className="reservation-header">
    <BackButton />
    <h1 className="section-title">RESERVE A TABLE</h1>
  </div>
);

export default Reservations;
