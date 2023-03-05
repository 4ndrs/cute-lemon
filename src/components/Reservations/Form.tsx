import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { ReactComponent as ClockIcon } from "../../assets/clock.svg";
import { ReactComponent as CalendarIcon } from "../../assets/calendar.svg";
import { ReactComponent as InfoIcon } from "../../assets/info.svg";

import "./Form.css";

import type { FormData } from "../../types";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "onBlur" });

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    navigate("/book/overview");
  });

  const required = "Required";

  return (
    <form onSubmit={onSubmit} className="form-container">
      <div className="date-field">
        <CalendarIcon className="calendar-icon" />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          className={errors.date && "invalid-input"}
          {...register("date", { required })}
        />
        <label htmlFor="date" className="messages">
          {errors.date?.message}
        </label>
      </div>

      <div className="clock-field">
        <ClockIcon className="clock-icon" />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          className={errors.time && "invalid-input"}
          {...register("time", { required })}
        />
        <label htmlFor="time" className="messages">
          {errors.time?.message}
        </label>
      </div>

      <fieldset>
        <legend className="lead-text">Details</legend>

        <div className="diners-field">
          <label htmlFor="diners">Diners</label>
          <select
            id="diners"
            className={errors.diners && "invalid-input"}
            {...register("diners", { required })}
          >
            <option>2</option>
            <option>4</option>
            <option>6</option>
          </select>
          <label htmlFor="diners" className="messages">
            {errors.diners?.message}
          </label>
        </div>

        <div className="occasion-field">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            className={errors.occasion && "invalid-input"}
            {...register("occasion", { required })}
          >
            <option>Standard</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
          </select>
          <label htmlFor="occasion" className="messages">
            {errors.occasion?.message}
          </label>
        </div>

        <div className="area-field">
          <label htmlFor="area">Area</label>
          <select
            id="area"
            className={errors.area && "invalid-input"}
            {...register("area", { required })}
          >
            <option>Storefront (Indoors)</option>
            <option>Storefront (Outdoors)</option>
            <option>Indoors (Zone A)</option>
            <option>Indoors (Zone B)</option>
          </select>
          <label htmlFor="area" className="messages">
            {errors.area?.message}
          </label>
        </div>
        <div className="more-info">
          <label htmlFor="info">Additional information</label>
          <a href="#TBD" id="info">
            <InfoIcon className="info-icon" />
          </a>
        </div>

        <div className="text-fields">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            className={errors.name && "invalid-input"}
            {...register("name", { required })}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className={errors.email && "invalid-input"}
            {...register("email", { required })}
          />

          <label htmlFor="comments">Comments (optional)</label>
          <textarea
            rows={5}
            cols={33}
            id="comments"
            className={errors.comments && "invalid-input"}
            {...register("comments")}
          />
        </div>
      </fieldset>

      <div className="form-navigation">
        <div className="page one"></div>
        <button className="lemon-button" type="submit">
          Next
        </button>
      </div>
    </form>
  );
};

export default Form;
