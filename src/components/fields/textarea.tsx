import React from 'react';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, ...props }) => {
  return (
    <div>
      {label && <label htmlFor={props.name}>{label}</label>}
      <textarea {...props} id={props.name} />
    </div>
  );
};

export default Textarea;
