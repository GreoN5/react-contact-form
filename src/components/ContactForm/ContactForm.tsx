import React, { FC, FormEvent, ReactNode } from 'react';

type Props = {
  onSubmitContact: (e?: FormEvent<HTMLFormElement>) => void | Promise<void>;
  heading?: ReactNode;
  subheading?: ReactNode;
};

const ContactForm: FC<Props> = ({ onSubmitContact, heading, subheading }) => {
  return (
    <div>
      <div>
        <div>{heading || <h1>Contact us</h1>}</div>
        <div>{subheading || <h3></h3>}</div>
      </div>
      <form onSubmit={onSubmitContact}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" type="text" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input name="subject" type="text" required />
        </div>
        <div>
          <textarea />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;