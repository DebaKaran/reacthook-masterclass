/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useMemo, useState } from "react";

import { initialItems } from "./utils";

export interface Item {
  id: number;
  isSelected: boolean;
}

interface DemoProps {}

// eslint-disable-next-line no-empty-pattern
const MemoDemo: React.FC<DemoProps> = ({}) => {
  const [count, setCount] = useState(0);
  const [items] = useState<Item[]>(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default MemoDemo;
