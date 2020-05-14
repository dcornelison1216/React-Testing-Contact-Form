import React from "react";
import * as rtl from '@testing-library/react';
import * as jd from '@testing-library/jest-dom';
import App from "./App";


test("renders fname, lname, email, message fields without crashing", () => {
  const container = rtl.render(<App />);

  const fname = container.queryByText(/first name/i);
  expect(fname).toBeInTheDocument();
  const lname = container.queryByText(/last name/i);
  expect(lname).toBeInTheDocument();
  const email = container.queryByText(/email/i);
  expect(email).toBeInTheDocument();
  const message = container.queryByText(/message/i);
  expect(message).toBeInTheDocument();
});

// const setup = () => {
//   const container = rtl.render(<App />)
//   const input = container.queryByText('first name')
//   return {
//     input,
//     ...container
//   }
// }

test("fname error if name > 3 characters", () => {
  const container = rtl.render(<App />);
  const fname = container.queryByText('first name');
  fname.value.change(fname, { target: {value: 'Derek'} });
  expect(fname.value).toBe('Derek');
});
