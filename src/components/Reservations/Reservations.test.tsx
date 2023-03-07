import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { BookingProvider } from "../../context/booking";

import Reservations from ".";

describe("Sanity tests", () => {
  test("Loads and displays the booking header", () => {
    render(
      <BrowserRouter>
        <BookingProvider>
          <Reservations />
        </BookingProvider>
      </BrowserRouter>
    );

    const heading = screen.getByRole("heading").textContent;

    expect(heading).toBe("RESERVE A TABLE");
  });
});
