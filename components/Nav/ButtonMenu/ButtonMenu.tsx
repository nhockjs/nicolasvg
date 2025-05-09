"use client";

import { useState, useEffect } from "react";
import "./ButtonMenu.scss";

interface buttonMenuProps {
  open: boolean;
  onOpen: (open: boolean) => void;
}

export default function ButtonMenu({ open, onOpen }: buttonMenuProps) {
  const lineMenuOpenClass = "buttonMenu__lineMenu--open";
  const [isButtonOpen, setIsButtonOpen] = useState(open);

  useEffect(() => {
    setIsButtonOpen(open);
  }, [open]);

  const checkOpen = () => {
    const newState = !isButtonOpen;
    setIsButtonOpen(newState);
    onOpen(newState);
  };

  return (
    <button onClick={checkOpen} className="buttonMenu__button">
      <span
        className={`buttonMenu__lineMenu ${
          isButtonOpen ? lineMenuOpenClass + "1" : ""
        }`}
      ></span>
      <span
        className={`buttonMenu__lineMenu ${
          isButtonOpen ? lineMenuOpenClass + "2" : ""
        }`}
      ></span>
    </button>
  );
}
