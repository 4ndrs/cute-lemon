import Form from "./Form";

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
    <button>←</button>
    <h1>RESERVE A TABLE</h1>
  </div>
);

export default Reservations;
