/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import React, { useRef, useState } from "react";

interface UseRefDemo {}

const UseRefDemo: React.FC<UseRefDemo> = ({}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    console.log("State:", count);
    console.log("Ref:", countRef.current);
  };

  return (
    <div className="tutorial">
      Count: {count}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default UseRefDemo;
