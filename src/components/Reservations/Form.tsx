import { useNavigate } from "react-router-dom";

import { ReactComponent as ClockIcon } from "../../assets/clock.svg";
import { ReactComponent as CalendarIcon } from "../../assets/calendar.svg";
import { ReactComponent as InfoIcon } from "../../assets/info.svg";

import "./Form.css";

const Form = () => {
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

export default Form;
