import { Route, Routes, useNavigate } from "react-router-dom";

import NotFound from "../NotFound";

import { ReactComponent as ClockIcon } from "../../assets/clock.svg";
import { ReactComponent as CalendarIcon } from "../../assets/calendar.svg";
import { ReactComponent as InfoIcon } from "../../assets/info.svg";

import "./Form.css";

const Form = () => (
  <>
    <Routes>
      <Route index element={<FormContainer />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/thanks" element={<Kansha />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const FormContainer = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    navigate("/book/overview");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="date-field">
        <CalendarIcon className="calendar-icon" />
        <label>Date</label>
        <input type="date" />
      </div>
      <div className="clock-field">
        <ClockIcon className="clock-icon" />
        <label>Time</label>
        <input type="time" />
      </div>

      <h2 className="lead-text">Details</h2>

      <div className="diners-field">
        <label>Diners</label>
        <select>
          <option>2</option>
          <option>4</option>
          <option>6</option>
        </select>
      </div>

      <div className="occasion-field">
        <label>Occasion</label>
        <select>
          <option>Standard</option>
          <option>Birthday</option>
          <option>Anniversay</option>
          <option>Engagement</option>
        </select>
      </div>

      <div className="area-field">
        <label>Area</label>
        <select>
          <option>Storefront (Indoors)</option>
          <option>Storefront (Outdoors)</option>
          <option>Indoors (Zone A)</option>
          <option>Indoors (Zone B)</option>
        </select>
      </div>
      <div className="more-info">
        <label>Additional information</label>
        <a href="#TBD">
          <InfoIcon className="info-icon" />
        </a>
      </div>

      <div className="text-fields">
        <label>Your name</label>
        <input type="text" />

        <label>Email</label>
        <input type="text" />

        <label>Comments (optional)</label>
        <textarea rows={5} cols={33} />
      </div>

      <div className="form-navigation">
        <div className="page one"></div>
        <button className="lemon-button">Next</button>
      </div>
    </form>
  );
};

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

export default Form;
