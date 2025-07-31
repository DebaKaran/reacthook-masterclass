/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  type Ref,
} from "react";

interface TextInputProps {}

export type TextInputRef = {
  reset: () => void;
};
const TextInput = ({}: TextInputProps, ref: Ref<TextInputProps>) => {
  const localRef = useRef<HTMLInputElement | null>(null);
  useImperativeHandle(ref, () => ({
    reset: () => {
      if (!localRef.current) return;
      localRef.current.value = "";
      localRef.current.focus();
    },
  }));
  return <input type="text" ref={localRef} />;
};

export default forwardRef(TextInput);
