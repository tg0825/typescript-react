import React, { useState } from 'react';

type BazProps = {
  // type function
  onSubmit: (form: { name: string; description: string }) => void;
};

const Bar = ({ onSubmit }: BazProps) => {
  const [form, setForm] = useState({
    name: '',
    description: ''
  });

  const { name, description } = form;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // type error
    // const onChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  // type error
  // const handleSubmit = e => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      description: ''
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" value={name} onChange={handleChange} />
        <input name="description" value={description} onChange={handleChange} />
        <button type="button">submit</button>
      </form>
    </div>
  );
};

export default Bar;
