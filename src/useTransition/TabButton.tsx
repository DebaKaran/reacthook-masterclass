import React from "react";
import { Button, type ButtonProps } from "../utils/Button";

interface TabButtonProps extends ButtonProps {
  title: string;
}
const TabButton: React.FC<TabButtonProps> = ({
  title,
  onClick,
  sm,
  ...rest
}) => {
  const handleClick = () => onClick;
  return <Button {...rest} onClick={handleClick()} />;
};

export default TabButton;
