import { useNavigate } from "react-router-dom";

const Overview = () => {
  const navigate = useNavigate();

  return (
    <div className="overview-container">
      <h2 className="lead-text">Time and Date</h2>
      <p>08:30 PM 2023/02/28</p>

      <h2 className="lead-text">Diners</h2>
      <p>2</p>

      <h2 className="lead-text">Occasion</h2>
      <p>Standard</p>

      <h2 className="lead-text">Area</h2>
      <p>Storefront (Indoors, no smoking area with pets allowed)</p>

      <h2 className="lead-text">Name</h2>
      <p>John Doe</p>

      <h2 className="lead-text">Contact email</h2>
      <p>john.doe@email.com</p>

      <h2 className="lead-text">Comments</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
        consequat mi. Cras malesuada mi ligula, et rutrum metus dignissim ac.
        Fusce sed semper leo, eget efficitur metus.
      </p>

      <div className="form-navigation">
        <div className="page two"></div>
        <button
          className="lemon-button"
          onClick={() => navigate("/book/thanks")}
        >
          Reserve
        </button>
      </div>
    </div>
  );
};

export default Overview;
