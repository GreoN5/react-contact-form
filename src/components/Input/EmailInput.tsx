import React, { FC } from 'react';
import { InputLayout } from '@/components/Layout';

type Props = {
  inputClassName?: string;
  labelClassName?: string;
};

const EmailInput: FC<Props> = ({ inputClassName, labelClassName }) => {
  return (
    <InputLayout
      label="Email"
      labelFor="email"
      type="email"
      required
      inputClassName={inputClassName}
      labelClassName={labelClassName}
    />
  );
};

export default EmailInput;