/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import React, { useRef } from "react";
import Counter, { type CounterRef } from "./Counter";

interface UseImperativeDemoProps {}

const UseImperativeDemo: React.FC<UseImperativeDemoProps> = ({}) => {
  const counterRef = useRef<CounterRef>(null);
  return (
    <div>
      <Counter ref={counterRef} />
      <button onClick={() => counterRef.current?.reset()}>
        Reset From Parent
      </button>
    </div>
  );
};

export default UseImperativeDemo;
