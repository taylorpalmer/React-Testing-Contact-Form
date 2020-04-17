import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("label displays", () => {
  const { getByText } = render(<App />);

  getByText(/first name/i);
});

test("last name label displays", () => {
  const { getByText } = render(<App />);

  getByText(/last name/i);
});

test("email label displays", () => {
  const { getByText } = render(<App />);

  getByText(/email/i);
});

test("message label displays", () => {
  const { getByText } = render(<App />);

  getByText(/message/i);
});

describe("Contact Form", () => {
  const testValues = {
    firstName: "Taylor",
    lastName: "Palmer",
    email: "tjp@email.com",
    message: "Helloworld",
    handleSubmit: jest.fn(),
  };
  it("Submit works", () => {
    const component = ContactForm();
    expect();
  });
});
