# react-contact-form

**react-contact-form** is a comprehensive contact UI library based on styled-components 
with the aim for easier display and interaction with a contact form.

## Installation

**You can install react-contact-form using npm:**

```bash
npm install react-contact-form
```

**Or using yarn:**

```bash
yarn add react-contact-form
```

## Getting started with react-contact-form

Here is an example of a basic app using react-contact-form's `ContactForm` component:

```jsx
import React from 'react';
import {ContactForm} from 'react-contact-form';

function App() {
    return <ContactForm onSubmitContact={(e) => console.log(e)}/>;
}

export default App;
```

## Props

`ContactForm` component accepts the following props:

- `useCheckbox` - `required prop` ((e?: FormEvent<HTMLFormElement>) => void | Promise<void>): Represents the function
  to be
  called when the form is submitted. It can be a regular function or an asynchronous function that returns a promise.
  You typically use it to handle form submission logic, such as making an API request or updating the state.
- `fields` (ReactNode): Allows you to provide the content for the form fields within the component. You can pass any
  valid React element or JSX content as the value. This is where you can define the input fields, labels, and any other
  form elements you want to include in the form. (This prop is going to be always last in the form, before the submit
  button)
- `heading` (ReactNode | string): Lets you set the content for the heading of your form. You can pass either a string or
  a React element as the value. It is typically used to provide a title or description for the form.
- `subHeading` (ReactNode | string): Similar to the heading prop, this allows you to provide a subheading or additional
  information below the main heading of the form. It can also accept either a string or a React element as the value.
- `headingClassName` (string): Lets you specify a custom CSS class for styling the heading element of your form. You can
  use it to apply unique styles to the form's heading.
- `formClassName` (string): Similar to headingClassName, this prop allows you to set a custom CSS class for styling the
  form element. It's useful for applying specific styles to the entire form.
- `labelClassName`, `inputClassName`, `textareaClassName`, `submitButtonClassName` (string): These props allow you to
  define custom CSS classes for individual elements within the form, such as labels, input fields, textareas, and the
  submit button. This gives you granular control over the styling of each element.

## Storybook

[Visit storybook](https://react-contact-form-storybook.netlify.app/ "Visit Storybook")

## Contributing

Contributions are welcome! If you have suggestions, bug reports, or feature requests, please open an issue or submit a
pull request.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
