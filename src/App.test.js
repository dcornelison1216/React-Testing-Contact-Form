import React from "react";
import * as rtl from '@testing-library/react';
import * as jd from '@testing-library/jest-dom';
import App from "./App";
import { act } from 'react-dom/test-utils';
import ContactForm from './components/ContactForm'

// test initial render
test('renders without crashing', () => {
  const container = rtl.render(<ContactForm />);
  // console.log(container);
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

// test("renders form, adds input to all fields and submits", async () => {
//   const container = rtl.render(<App />);
//
//   // name each field
//   const fname = container.getByTestId('fname');
//   const lname = container.getByTestId('lname');
//   const email = container.getByTestId('email');
//   const message = container.getByTestId('message')
//   const submit = container.getByTestId('submit');
//
//   // define input values
//   const fnameInput = 'FirstName';
//   const lnameInput = 'LastName';
//   const emailInput = 'email@email.com';
//   const messageInput = 'This is a message for testing purposes.'
//
//   // input those values
//   rtl.fireEvent.change(fname, {target: {value: fnameInput}})
//   rtl.fireEvent.change(lname, {target: {value: lnameInput}})
//   rtl.fireEvent.change(email, {target: {value: emailInput}})
//   rtl.fireEvent.change(message, {target: {value: messageInput}})
//
//   // click submit button
//
//   rtl.fireEvent.submit(container.getByTestId('form'))
//
//
//   .then (
//     expect(container.getByTestId('pre').textContent).toContain('email@email.com');
//   )
// )

// test('second renders form, adds input to all fields and submits', async () => {
//   const container = rtl.render(<App />);
//
//   const fname = container.getByTestId('fname');
//   const lname = container.getByTestId('lname');
//   const email = container.getByTestId('email');
//   const message = container.getByTestId('message')
//   const submit = container.getByTestId('submit');
//   const form = container.getByTestId('form');
//
//   const fnameInput = 'FirstName';
//   const lnameInput = 'LastName';
//   const emailInput = 'email@email.com';
//   const messageInput = 'This is a message for testing purposes.';
//
//   act(() => {
//     rtl.render(
//       <App />,
//       rtl.fireEvent.change(fname, {target: {value: fnameInput}}),
//       rtl.fireEvent.change(lname, {target: {value: lnameInput}}),
//       rtl.fireEvent.change(email, {target: {value: emailInput}}),
//       rtl.fireEvent.change(message, {target: {value: messageInput}}),
//       rtl.fireEvent.submit(form)
//     )
//     // rtl.fireEvent.submit(container.getByTestId('form'), formSubmitted)
//   })
// })



// 1. type name into first name field

  // expect no error

// 2. fill out form

  // submit form

  // expect pre element to have content

// 3. change max length for the first name field

// 4. update test for fname input length
