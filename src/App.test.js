import React from "react";
import * as rtl from '@testing-library/react';
import * as jd from '@testing-library/jest-dom';
import App from "./App";
import { act } from 'react-dom/test-utils';
import ContactForm from './components/ContactForm'

// test initial render
test('renders without crashing', () => {
  const container = rtl.render(<ContactForm />);
})

// test form submission
test("renders fname and types a name", () => {
  const container = rtl.render(<ContactForm />);
  const fname = container.getByTestId('fname');
  const name = 'FirstName';
  rtl.fireEvent.change(fname, {target: {value: name}})
  expect(fname.value).toEqual(name);
});

test("renders lname and types a name", () => {
  const container = rtl.render(<ContactForm />);
  const lname = container.getByTestId('lname');
  const name = 'LastName';
  rtl.fireEvent.change(lname, {target: {value: name}})
  expect(lname.value).toEqual(name);
})

test("renders email and types an email", () => {
  const container = rtl.render(<ContactForm />);
  const email = container.getByTestId('email');
  const inputEmail = 'email@email.com';
  rtl.fireEvent.change(email, {target: {value: inputEmail}})
  expect(email.value).toEqual(inputEmail);
})

test("renders message and types a message", () => {
  const container = rtl.render(<ContactForm />);
  const message = container.getByTestId('message');
  const inputMessage = 'This is a message for testing purposes.';
  rtl.fireEvent.change(message, {target: {value: inputMessage}})
  expect(message.value).toEqual(inputMessage);
})

test('renders form, adds input, submits, and checks output', async () => {
  const container = rtl.render(<ContactForm />);
  const fname = container.getByTestId('fname');
  const lname = container.getByTestId('lname');
  const email = container.getByTestId('email');
  const message = container.getByTestId('message');
  const submit = container.getByTestId('submit');

  await rtl.waitFor(() => {
    rtl.fireEvent.change(fname, {
      target: {
        value: 'FirstName'
      }
    })
  })

  await rtl.waitFor(() => {
    rtl.fireEvent.change(lname, {
      target: {
        value: 'LastName'
      }
    })
  })

  await rtl.waitFor(() => {
    rtl.fireEvent.change(email, {
      target: {
        value: 'email@email.com'
      }
    })
  })

  await rtl.waitFor(() => {
    rtl.fireEvent.change(message, {
      target: {
        value: 'This is a message for testing purposes.'
      }
    })
  })

  await rtl.waitFor(() => {
    rtl.fireEvent.click(submit)
  })

  const results = container.getByTestId('pre');
  expect(results.textContent);

})
