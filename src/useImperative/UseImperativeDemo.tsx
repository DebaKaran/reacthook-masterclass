/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import Counter from "./Counter";

interface UseImperativeDemoProps {}
const UseImperativeDemo: React.FC<UseImperativeDemoProps> = ({}) => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default UseImperativeDemo;
