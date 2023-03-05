import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../../context/booking";

const Overview = () => {
  const navigate = useNavigate();

  const {
    dispatch,
    state: { formData, isSubmitted },
  } = useBooking();

  useEffect(() => {
    if (!isSubmitted && !formData.name) {
      navigate("/book");
    }
  }, [navigate, isSubmitted, formData.name]);

  const handleReserve = () => {
    dispatch({ type: "submit" });

    navigate("/book/thanks");
  };

  const handleCancel = () => dispatch({ type: "cancel" });

  return (
    <div className="overview-container">
      <h2 className="lead-text">Time and Date</h2>
      <p>
        {formData.time} {new Date(formData.date).toLocaleDateString()}
      </p>

      <h2 className="lead-text">Diners</h2>
      <p>{formData.diners}</p>

      <h2 className="lead-text">Occasion</h2>
      <p>{formData.occasion}</p>

      <h2 className="lead-text">Area</h2>
      <p>{formData.area}</p>

      <h2 className="lead-text">Name</h2>
      <p>{formData.name}</p>

      <h2 className="lead-text">Contact email</h2>
      <p>{formData.email}</p>

      {formData.comments && (
        <>
          <h2 className="lead-text">Comments</h2>
          <p>{formData.comments}</p>
        </>
      )}

      {isSubmitted && (
        <div style={{ marginTop: "2em" }}>
          <strong>Reservation status:</strong> Awaiting email confirmation
        </div>
      )}

      <div className="form-navigation">
        <div className="page two"></div>
        <button
          className="lemon-button"
          onClick={isSubmitted ? handleCancel : handleReserve}
        >
          {isSubmitted ? "Cancel" : "Reserve"}
        </button>
      </div>
    </div>
  );
};

export default Overview;
