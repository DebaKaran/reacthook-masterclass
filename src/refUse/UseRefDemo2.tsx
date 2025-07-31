/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import React, { useEffect, useRef } from "react";

interface UseRefDemo2Props {}

const UseRefDemo2: React.FC<UseRefDemo2Props> = ({}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type Something ..." />
    </div>
  );
};

export default UseRefDemo2;
