"use client";

import { ReactNode } from "react";
;
interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

export const Button = ({ children, onClick}: ButtonProps) => {
  return (
    <button className="bg-black text-white px-4 py-2 rounded hover:bg-primary-dark transition cusrsor-pointer"
    onClick={onClick}>
      {children}
    </button> 
  );
};
