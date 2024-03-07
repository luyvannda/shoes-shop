interface SelectProps {
  title: string;
  options: number[];
}

export default function Select({ title, options }: SelectProps) {
  return (
    <div>
      <select>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
