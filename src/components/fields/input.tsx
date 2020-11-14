import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div>
      {label && <label htmlFor={props.name}>{label}</label>}
      <input {...props} id={props.name} />
    </div>
  );
};

export default Input;
