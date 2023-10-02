import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-gitBlue p-2 px-5 rounded-lg text-white hover:opacity-90"
    >
      {children}
    </button>
  );
};

export default Button;
