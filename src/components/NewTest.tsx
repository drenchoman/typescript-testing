import React from 'react';

interface Props {
  age: number;
  name?: string;
}

export default function NewTest({ age, name }: Props) {
  return (
    <div>
      <h2>Hi my name is {name}</h2>
      <p>I am {age} years old</p>
    </div>
  );
}
