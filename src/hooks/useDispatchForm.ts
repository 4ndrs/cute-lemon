import { useWatch } from "react-hook-form";
import { useEffect } from "react";
import { useBooking } from "../context/booking";

import type { Control } from "react-hook-form";
import type { FormData } from "../types";

/**
 * Custom hook to keep the form data updated in the booking context
 * *MUST* be used with default values in useForm
 */
const useDispatchForm = (control: Control<FormData>) => {
  const { dispatch } = useBooking();
  const formData = useWatch({ control }) as FormData; // return value is getting DeepPartial'd

  useEffect(() => {
    dispatch({ type: "update", payload: formData });
  }, [formData, dispatch]);
};

export default useDispatchForm;
