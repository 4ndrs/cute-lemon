import ClockIcon from "../../assets/clock.svg";
import CalendarIcon from "../../assets/calendar.svg";

const Form = () => {
  return (
    <form>
      <div>
        <img src={CalendarIcon} alt="Calendar" />
        <label>Date</label>
        <input type="date" />
      </div>
      <div>
        <img src={ClockIcon} alt="Clock" />
        <label>Time</label>
        <input type="time" />
      </div>

      <h2>Details</h2>

      <div>
        <label>Diners</label>
        <select>
          <option>2</option>
          <option>4</option>
          <option>6</option>
        </select>
      </div>

      <div>
        <label>Occasion</label>
        <select>
          <option>Standard</option>
          <option>Birthday</option>
          <option>Anniversay</option>
          <option>Engagement</option>
        </select>
      </div>

      <div>
        <label>Area</label>
        <select>
          <option>Storefront (Indoors)</option>
          <option>Storefront (Outdoors)</option>
          <option>Indoors (Zone A)</option>
          <option>Indoors (Zone B)</option>
        </select>
      </div>

      <div>
        <label>Your name</label>
        <input />

        <label>Email</label>
        <input />

        <label>Comments</label>
        <textarea rows={5} cols={33} />
      </div>

      <div>
        <div>1/2</div>
        <button>Next</button>
      </div>
    </form>
  );
};

const Overview = () => {
  return (
    <>
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

      <div>
        <div>2/2</div>
        <button>Reserve</button>
      </div>
    </>
  );
};

const Kansha = () => (
  <>
    <h1>Thank you!</h1>
    <p>
      A confirmation email will briefly be sent to john.doe@email.com with the
      reservation details.
    </p>
    <button>Ok</button>
  </>
);

export default Form;
