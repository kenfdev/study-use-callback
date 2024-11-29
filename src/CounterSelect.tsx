import { FC, useEffect, useState } from 'react';

type Props = {
  onChange: (value: number) => void;
};
export const CounterSelect: FC<Props> = ({ onChange }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      onChange(parsedValue);
    }
  }, [value, onChange]);

  return (
    <select
      style={{ height: '3rem', fontSize: '2rem' }}
      onChange={(e) => setValue(e.target.value)}
    >
      <option value="ignore">Do not count</option>
      <option value="1">+1</option>
      <option value="2">+2</option>
      <option value="3">+3</option>
    </select>
  );
};
