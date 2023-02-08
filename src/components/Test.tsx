import React, { useState } from 'react';

type Props = {
  title: string;
  subtitle?: string;
};

export default function Test({ title, subtitle }: Props) {
  const [person, setPerson] = useState('');
  async function fetcher() {
    const res = await fetch('/api/hello');
    const data = await res.json();
    setPerson(data.name2);
  }
  fetcher();
  return (
    <div>
      {title}
      {subtitle}
      <p>{person} is my homie</p>
    </div>
  );
}
