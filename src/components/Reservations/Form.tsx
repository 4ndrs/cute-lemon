import ClockIcon from "../../assets/clock.svg";
import CalendarIcon from "../../assets/calendar.svg";
import InfoIcon from "../../assets/info.svg";

import "./Form.css";

const Form = () => {
  return (
    <form className="form-container">
      <div className="date-field">
        <img src={CalendarIcon} alt="Calendar" className="calendar-icon" />
        <label>Date</label>
        <input type="date" />
      </div>
      <div className="clock-field">
        <img src={ClockIcon} alt="Clock" className="clock-icon" />
        <label>Time</label>
        <input type="time" />
      </div>

      <h2>Details</h2>

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
          <img src={InfoIcon} alt="Information" className="info-icon" />
        </a>
      </div>

      <div className="text-fields">
        <label>Your name</label>
        <input />

        <label>Email</label>
        <input />

        <label>Comments</label>
        <textarea rows={5} cols={33} />
      </div>

      <div className="form-navigation">
        <div>1/2</div>
        <button>Next</button>
      </div>
    </form>
  );
};

const Overview = () => {
  return (
    <div className="overview-container">
      <h2>Time and Date</h2>
      <p>08:30 PM 2023/02/28</p>

      <h2>Diners</h2>
      <p>2</p>

      <h2>Occasion</h2>
      <p>Standard</p>

      <h2>Area</h2>
      <p>Storefront (Indoors, no smoking area with pets allowed)</p>

      <h2>Name</h2>
      <p>John Doe</p>

      <h2>Contact email</h2>
      <p>john.doe@email.com</p>

      <h2>Comments</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
        consequat mi. Cras malesuada mi ligula, et rutrum metus dignissim ac.
        Fusce sed semper leo, eget efficitur metus.
      </p>

      <div className="form-navigation">
        <div>2/2</div>
        <button>Reserve</button>
      </div>
    </div>
  );
};

const Kansha = () => (
  <div className="kansha-container">
    <h1>Thank you!</h1>
    <p>
      A confirmation email will briefly be sent to john.doe@email.com with the
      reservation details.
    </p>
    <div className="form-navigation">
      <button>Ok</button>
    </div>
  </div>
);

export default Form;
