import React from 'react';

interface Props {
  value: any;
  onChange: any;
  label?: string;
  type?: string;
}

const Input: React.FC<Props> = ({ value, onChange, label, type = 'text' }) => {
  return (
    <>
      {label && <label className="mt-3 mb-2 text-white">{label}</label>}
      <input
        type={type}
        className="h-12 w-full rounded-md px-4 bg-input border text-white"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
