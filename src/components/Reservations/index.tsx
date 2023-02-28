import Form from "./Form";

import "./Reservations.css";

const Reservations = () => {
  return (
    <main>
      <Header />
      <Form />
    </main>
  );
};

const Header = () => (
  <div className="reservation-header">
    <button>←</button>
    <h1>RESERVE A TABLE</h1>
  </div>
);

export default Reservations;
