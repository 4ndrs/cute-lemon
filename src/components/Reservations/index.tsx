import Form from "./Form";

const Reservations = () => {
  return (
    <main>
      <Header />
      <Form />
    </main>
  );
};

const Header = () => (
  <>
    <button>←</button>
    <h1>RESERVE A TABLE</h1>
  </>
);

export default Reservations;
