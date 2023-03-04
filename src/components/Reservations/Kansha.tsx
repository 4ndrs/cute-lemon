import { useNavigate } from "react-router-dom";

const Kansha = () => {
  const navigate = useNavigate();

  return (
    <div className="kansha-container">
      <h1 className="display-title">Thank you!</h1>
      <p>
        A confirmation email will briefly be sent to john.doe@email.com with the
        reservation details.
      </p>
      <div className="form-navigation">
        <button className="lemon-button" onClick={() => navigate("/")}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default Kansha;
