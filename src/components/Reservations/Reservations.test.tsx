import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { BookingProvider } from "../../context/booking";

import Reservations from ".";

const ContextWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>
    <BookingProvider>{children}</BookingProvider>
  </BrowserRouter>
);

describe("Sanity tests", () => {
  test("Loads and displays the booking header", () => {
    render(
      <ContextWrapper>
        <Reservations />
      </ContextWrapper>
    );

    const heading = screen.getByRole("heading").textContent;

    expect(heading).toBe("RESERVE A TABLE");
  });
});
