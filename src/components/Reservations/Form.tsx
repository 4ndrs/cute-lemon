import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useBooking } from "../../context/booking";
import { getAvailableTables } from "../../services/restaurant";

import useDispatchForm from "../../hooks/useDispatchForm";

import { ReactComponent as ClockIcon } from "../../assets/clock.svg";
import { ReactComponent as CalendarIcon } from "../../assets/calendar.svg";
import { ReactComponent as InfoIcon } from "../../assets/info.svg";

import "./Form.css";

import type { FormData, Restaurant } from "../../types";

const Form = () => {
  const navigate = useNavigate();

  const [isFetching, setIsFetching] = useState(false);

  const [availableTables, setAvailableTables] =
    useState<Readonly<Restaurant>>();

  const {
    state: { formData: defaultValues, isSubmitted },
  } = useBooking();

  const {
    watch,
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "onBlur", defaultValues });

  useDispatchForm(control);

  const watchDate = watch("date");
  const watchArea = watch("area");
  const watchDiners = watch("diners");

  useEffect(() => {
    if (!isSubmitted) {
      fetchAvailableTables(watchDate);
    }
  }, [watchDate, isSubmitted]);

  const fetchAvailableTables = async (date?: string) => {
    let dateObject: Date;

    if (!date) {
      dateObject = new Date(); // set today's date if empty string
    } else if (isNaN(new Date(date).getDate())) {
      throw new Error("Invalid date provided");
    } else {
      dateObject = new Date(date);
    }

    setIsFetching(true);
    const data = await getAvailableTables(dateObject);
    setIsFetching(false);

    setAvailableTables(data);
  };

  const required = "Required";

  const isLoading = !availableTables || isFetching;

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
          disabled={isSubmitted || isLoading}
          id="time"
          className={errors.time && "invalid-input"}
          {...register("time", { required })}
        >
          {isLoading ? (
            <option key={defaultValues.time}>{defaultValues.time}</option>
          ) : (
            availableTables[watchArea].availableTables[watchDiners].times.map(
              (time) => <option key={time}>{time}</option>
            )
          )}
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
            disabled={isLoading}
            id="diners"
            className={errors.diners && "invalid-input"}
            {...register("diners", { required })}
          >
            {isLoading ? (
              <option key={defaultValues.diners}>{defaultValues.diners}</option>
            ) : (
              Object.keys(availableTables[watchArea].availableTables).map(
                (seats) => <option key={seats}>{seats}</option>
              )
            )}
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
            disabled={isLoading}
            id="area"
            className={errors.area && "invalid-input"}
            {...register("area", { required })}
          >
            {isLoading ? (
              <option key={defaultValues.area}>{defaultValues.area}</option>
            ) : (
              Object.keys(availableTables).map((area) => (
                <option key={area}>{area}</option>
              ))
            )}
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
        <button disabled={isFetching} className="lemon-button" type="submit">
          Next
        </button>
      </div>
    </form>
  );
};

export default Form;
