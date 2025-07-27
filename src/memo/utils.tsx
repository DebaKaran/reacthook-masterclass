import type { Item } from "./MemoDemo";

export const initialItems: Item[] = new Array(29_999_999)
  .fill(0)
  .map((_, i) => {
    return {
      id: i,
      isSelected: i === 29_999_998,
    };
  });
