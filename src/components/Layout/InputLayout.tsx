import React, { FC, HTMLInputTypeAttribute } from 'react';
import { Input, InputWrapper, Label } from '@/components/design-system/Form';

type Props = {
  label: string;
  labelFor: string;
  type: HTMLInputTypeAttribute;
  required?: boolean;
  inputClassName?: string;
  labelClassName?: string;
};

const InputLayout: FC<Props> = ({
  label,
  labelFor,
  labelClassName,
  type,
  inputClassName,
  required,
}) => {
  return (
    <InputWrapper>
      <Label className={labelClassName} htmlFor={labelFor}>
        {label}
      </Label>
      <Input className={inputClassName} name={labelFor} type={type} required={required} />
    </InputWrapper>
  );
};

export default InputLayout;