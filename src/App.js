import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }
  return (
    <div className="date">
      <div>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
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
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
