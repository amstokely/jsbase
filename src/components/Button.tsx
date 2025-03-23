import React from "react";

type ButtonProps = {
  label: string;
  content: number;
};

const Button: React.FC<ButtonProps> = ({ label, content }) => {
  return <button>{label} {content}</button>;
};

export default Button;
