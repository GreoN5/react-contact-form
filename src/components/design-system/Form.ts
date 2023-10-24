import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 500px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
`;

export const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 100px;
`;

export const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 0.5px solid #646464;
  background-color: #e6e6e6;
  width: 75%;
`;