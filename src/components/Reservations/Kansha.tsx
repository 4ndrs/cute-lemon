import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../../context/booking";

const Kansha = () => {
  const navigate = useNavigate();

  const {
    state: {
      formData: { email },
    },
  } = useBooking();

  useEffect(() => {
    if (!email) {
      navigate("/book");
    }
  }, [navigate, email]);

  return (
    <div className="kansha-container">
      <h1 className="display-title">Thank you!</h1>
      <p>
        A confirmation email will briefly be sent to {email} with the
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
