import React from 'react';
import SubmitButtonView from './view';
interface submitButtonProps {
  submit: () => void;
}
const SubmitButton = ({submit}: submitButtonProps) => {
  return <SubmitButtonView submit={submit} />;
};

export default SubmitButton;
