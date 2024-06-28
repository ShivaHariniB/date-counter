import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div className="date">
      <div>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step:{step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <button onClick={() => setCount((c) => c - step)}>-</button>
      <span>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
      </span>
      <button onClick={() => setCount((c) => c + step)}>+</button>
      <p>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count + " days from today is "}`
          : `${Math.abs(count) + " days ago was "}`}
        {date.toDateString()}
      </p>
    </div>
  );
}
