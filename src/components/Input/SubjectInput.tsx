import React, { FC } from 'react';
import { InputLayout } from '@/components/Layout';

type Props = {
  inputClassName?: string;
  labelClassName?: string;
};

const SubjectInput: FC<Props> = ({ inputClassName, labelClassName }) => {
  return (
    <InputLayout
      label="Name"
      labelFor="name"
      type="text"
      required
      inputClassName={inputClassName}
      labelClassName={labelClassName}
    />
  );
};

export default SubjectInput;