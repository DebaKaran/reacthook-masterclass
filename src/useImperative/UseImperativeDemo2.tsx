import React, { useRef } from "react";
import TextInput, { type TextInputRef } from "./TextInput";

const UseImperativeDemo2 = () => {
  const inputRef = useRef<TextInputRef>(null);

  return (
    <>
      <TextInput ref={inputRef} />
      <button onClick={() => inputRef.current?.reset()}>
        Reset From Parent
      </button>
    </>
  );
};

export default UseImperativeDemo2;
