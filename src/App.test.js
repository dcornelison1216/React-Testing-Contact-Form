import React from "react";
import * as rtl from '@testing-library/react';
import * as jd from '@testing-library/jest-dom';
import App from "./App";


test("renders fname, lname, email, message fields & button without crashing", () => {
  const container = rtl.render(<App />);

  const fname = container.queryByText(/first name/i);
  const lname = container.queryByText(/last name/i);
  const email = container.queryByText(/email/i);
  const message = container.queryByText(/message/i);
  const submit = container.queryByText(/submit/i);
});
