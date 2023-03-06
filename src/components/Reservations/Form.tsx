import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useBooking } from "../../context/booking";
import useDispatchForm from "../../hooks/useDispatchForm";

import { ReactComponent as ClockIcon } from "../../assets/clock.svg";
import { ReactComponent as CalendarIcon } from "../../assets/calendar.svg";
import { ReactComponent as InfoIcon } from "../../assets/info.svg";

import "./Form.css";

import type { FormData } from "../../types";

const Form = () => {
  const navigate = useNavigate();

  const {
    state: { formData: defaultValues, isSubmitted },
  } = useBooking();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "onBlur", defaultValues });

  useDispatchForm(control);

  const required = "Required";

  return (
    <form
      onSubmit={handleSubmit(() => navigate("/book/overview"))}
      className="form-container"
    >
      <div className="date-field">
        <CalendarIcon className="calendar-icon" />
        <label htmlFor="date">Date</label>
        <input
          readOnly={isSubmitted}
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
        <select
          disabled={isSubmitted}
          id="time"
          className={errors.time && "invalid-input"}
          {...register("time", { required })}
        >
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="time" className="messages">
          {errors.time?.message}
        </label>
      </div>

      <fieldset disabled={isSubmitted}>
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
          <label htmlFor="name" className="messages">
            {errors.name?.message}
          </label>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className={errors.email && "invalid-input"}
            {...register("email", { required })}
          />
          <label htmlFor="email" className="messages">
            {errors.email?.message}
          </label>

          <label htmlFor="comments">Comments (optional)</label>
          <textarea
            rows={5}
            cols={33}
            id="comments"
            className={errors.comments && "invalid-input"}
            {...register("comments")}
          />
          <label htmlFor="comments" className="messages">
            {errors.comments?.message}
          </label>
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
