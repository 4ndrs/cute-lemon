import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

  test("Clicking the next button without filling the form stays on page", async () => {
    render(
      <ContextWrapper>
        <Reservations />
      </ContextWrapper>
    );

    const nextButton = screen.getByRole("button", { name: "Next" });

    await waitFor(() => expect(nextButton).not.toHaveAttribute("disabled"));

    userEvent.click(nextButton);

    await screen.findAllByText(/required/i);
  });
});
