// filepath: /opt/lampp/htdocs/agrinet/src/components/Button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;