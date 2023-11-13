import React, { FC } from 'react';
import { InputWrapper, Label, Textarea } from '@/components/design-system/Form';

type Props = {
  textareaClassName?: string;
  labelClassName?: string;
};

const MessageTextarea: FC<Props> = ({ textareaClassName, labelClassName }) => {
  return (
    <InputWrapper>
      <Label className={labelClassName} htmlFor="message">
        Message
      </Label>
      <Textarea className={textareaClassName} name="message" />
    </InputWrapper>
  );
};

export default MessageTextarea;