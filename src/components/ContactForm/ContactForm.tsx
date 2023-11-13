import React, { FC, FormEvent, ReactNode } from 'react';
import { H1, H3, HeadingBox } from '@/components/design-system/Heading';
import { Button, Form, FormWrapper, Row } from '@/components/design-system/Form';
import { EmailInput, MessageTextarea, NameInput, SubjectInput } from '@/components/Input';

type Props = {
  onSubmitContact: (e?: FormEvent<HTMLFormElement>) => void | Promise<void>;
  fields?: ReactNode;
  heading?: ReactNode | string;
  subHeading?: ReactNode | string;
  headingClassName?: string;
  formClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  textareaClassName?: string;
  submitButtonClassName?: string;
};

const ContactForm: FC<Props> = ({
  onSubmitContact,
  fields,
  heading,
  subHeading,
  headingClassName,
  formClassName,
  labelClassName,
  inputClassName,
  textareaClassName,
  submitButtonClassName,
}) => {
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
      <HeadingBox className={headingClassName}>
        <div>{renderMainHeading()}</div>
        <div>{renderSubHeading()}</div>
      </HeadingBox>
      <Form className={formClassName} onSubmit={onSubmitContact}>
        <Row>
          <NameInput inputClassName={inputClassName} labelClassName={labelClassName} />
        </Row>
        <Row>
          <EmailInput inputClassName={inputClassName} labelClassName={labelClassName} />
        </Row>
        <Row>
          <SubjectInput inputClassName={inputClassName} labelClassName={labelClassName} />
        </Row>
        <Row>
          <MessageTextarea textareaClassName={textareaClassName} labelClassName={labelClassName} />
        </Row>
        {fields || null}
        <Button className={submitButtonClassName} type="submit">
          Send
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default ContactForm;