import React, { useState } from 'react';

// 함수의 타입 지정
type BazProps = {
  // type function
  onSubmit: (form: { name: string; description: string }) => void;
  // 생략해도 되는 props
  optional?: string;
};

const Bar = ({ onSubmit, optional = '123' }: BazProps) => {
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
        <button type="submit">submit</button>
      </form>
      <div>{`${optional}`}</div>
    </div>
  );
};

export default Bar;
