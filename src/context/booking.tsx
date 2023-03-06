import { createContext, useContext, useMemo, useReducer } from "react";

import type { FormData } from "../types";

type Action =
  | { type: "update"; payload: FormData }
  | { type: "reset" }
  | { type: "submit" }
  | { type: "cancel" };

type Dispatch = (action: Action) => void;
type State = { formData: FormData; isSubmitted: boolean };

const bookingReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "submit":
      return { ...state, isSubmitted: true };
    case "cancel":
      return { ...state, isSubmitted: false };
    case "reset":
      return { ...state, formData: { ...initialState.formData } };
    case "update":
      return { ...state, formData: { ...action.payload } };

    default:
      return assertNever(action);
  }
};

const assertNever = (value: never) => {
  throw new Error(`Unhandled case: `, value);
};

const initialState: State = {
  formData: {
    date: "",
    time: "17:00",
    diners: 2,
    occasion: "Standard",
    area: "Storefront (Indoors)",
    name: "",
    email: "",
    comments: "",
  },

  isSubmitted: false,
};

const BookingContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

/**
 * Context provider for global form state and the submission status
 *
 */
const BookingProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};

const useBooking = () => {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error("useBooking must be used withing a BookingProvider");
  }

  return context;
};

export { BookingProvider, useBooking };
