import React, { FC, FormEvent, ReactNode } from 'react';
import { H1, H3, HeadingBox } from '@/components/design-system/Heading';
import {
  Button,
  Form,
  FormWrapper,
  Input,
  InputWrapper,
  Label,
  Row,
  Textarea,
} from '@/components/design-system/Form';

type Props = {
  onSubmitContact: (e?: FormEvent<HTMLFormElement>) => void | Promise<void>;
  heading?: ReactNode | string;
  subHeading?: ReactNode | string;
};

const ContactForm: FC<Props> = ({ onSubmitContact, heading, subHeading }) => {
  const renderMainHeading = (): ReactNode => {
    let contactHeading: ReactNode = <H1>Contact us</H1>;

    if (heading) {
      contactHeading = heading;
    }

    if (heading && typeof heading === 'string') {
      contactHeading = <H1>{heading}</H1>;
    }

    return contactHeading;
  };

  const renderSubHeading = (): ReactNode | null => {
    let subHeadingText: ReactNode = null;

    if (subHeading) {
      subHeadingText = subHeading;
    }

    if (subHeading && typeof subHeading === 'string') {
      subHeadingText = <H3>{subHeading}</H3>;
    }

    return subHeadingText;
  };

  return (
    <FormWrapper>
      <HeadingBox>
        <div>{renderMainHeading()}</div>
        <div>{renderSubHeading()}</div>
      </HeadingBox>
      <Form onSubmit={onSubmitContact}>
        <Row>
          <InputWrapper>
            <Label htmlFor="name">Name</Label>
            <Input name="name" type="text" required />
          </InputWrapper>
        </Row>
        <Row>
          <InputWrapper>
            <Label htmlFor="email">Email</Label>
            <Input name="email" type="email" required />
          </InputWrapper>
        </Row>
        <Row>
          <InputWrapper>
            <Label htmlFor="subject">Subject</Label>
            <Input name="subject" type="text" required />
          </InputWrapper>
        </Row>
        <Row>
          <InputWrapper>
            <Label htmlFor="message">Message</Label>
            <Textarea name="message" />
          </InputWrapper>
        </Row>
        <Button type="submit">Send</Button>
      </Form>
    </FormWrapper>
  );
};

export default ContactForm;