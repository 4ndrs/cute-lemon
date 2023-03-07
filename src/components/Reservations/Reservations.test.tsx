import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter, Routes, Route } from "react-router-dom";
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

  test("Clicking the next button with the form filled shows overview", async () => {
    render(
      <ContextWrapper>
        <Routes>
          <Route path="/book/*" element={<Reservations />} />
          <Route path="/" element={<Reservations />} />
        </Routes>
      </ContextWrapper>
    );

    const dateField = screen.getByLabelText("Date");
    //const timeField = screen.getByLabelText("Time"); // this one is random
    const dinersField = screen.getByLabelText("Diners");
    const occasionField = screen.getByLabelText("Occasion");
    const areaField = screen.getByLabelText("Area");
    const nameField = screen.getByLabelText("Your name");
    const emailField = screen.getByLabelText("Email");
    const commentsField = screen.getByLabelText("Comments (optional)");
    const nextButton = screen.getByRole("button", { name: "Next" });

    await waitFor(() => expect(nextButton).not.toHaveAttribute("disabled"));
    userEvent.type(dateField, "2023-02-28");

    await waitFor(() => expect(nextButton).not.toHaveAttribute("disabled"));

    userEvent.selectOptions(dinersField, "4");
    userEvent.selectOptions(occasionField, "Anniversary");
    userEvent.selectOptions(areaField, "Indoors (Zone B)");

    await waitFor(() => expect(nextButton).not.toHaveAttribute("disabled"));

    userEvent.type(nameField, "Liselotte Riefenstahl");
    userEvent.type(emailField, "lise@tsunderais.co.jp");
    userEvent.clear(commentsField);
    userEvent.type(commentsField, "Testing Library rocks");

    userEvent.click(nextButton);

    await waitFor(() => {
      screen.getByRole("button", { name: "Reserve" });
    });

    screen.getByText("Indoors (Zone B)");
    screen.getByText("Liselotte Riefenstahl");
    screen.getByText("Anniversary");
    screen.getByText("Testing Library rocks");
  });

  test("Shows the confirmation after clicking reserve", async () => {
    render(
      <ContextWrapper>
        <Routes>
          <Route path="/book/*" element={<Reservations />} />
          <Route path="/" element={<Reservations />} />
        </Routes>
      </ContextWrapper>
    );

    const dateField = screen.getByLabelText("Date");
    const nameField = screen.getByLabelText("Your name");
    const emailField = screen.getByLabelText("Email");
    const nextButton = screen.getByRole("button", { name: "Next" });

    await waitFor(() => expect(nextButton).not.toHaveAttribute("disabled"));
    userEvent.type(dateField, "2023-02-28");
    await waitFor(() => expect(nextButton).not.toHaveAttribute("disabled"));

    userEvent.type(nameField, "Liselotte Riefenstahl");
    userEvent.type(emailField, "lise@tsunderais.co.jp");
    userEvent.click(nextButton);

    await waitFor(() => {
      screen.getByRole("button", { name: "Reserve" });
    });

    const reserveButton = screen.getByRole("button", { name: "Reserve" });

    userEvent.click(reserveButton);

    await waitFor(() => {
      screen.getByText("Thank you!");
    });

    screen.getByText("lise@tsunderais.co.jp", { exact: false });
  });
});
