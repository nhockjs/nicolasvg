"use client";

import Link from "next/link";
import "./Nav.scss";
import ButtonMenu from "./ButtonMenu/ButtonMenu";
import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <ButtonMenu open={isOpen} onOpen={setIsOpen} />
      <motion.nav
        ref={modalRef}
        className="nav__main"
        aria-hidden={!isOpen}
        aria-expanded={isOpen ? "true" : "false"}
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          scaleY: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        <nav>
          <Link className="nav__link" href="/proyectos">
            <img src="/icons/projects.svg" alt="Proyectos" />
            <span>Proyectos</span>
          </Link>
        </nav>
        <div className="nav__draggable"></div>
      </motion.nav>

      {isOpen && (
        <motion.div
          className="nav__overlay"
          aria-hidden={!isOpen}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{
            opacity: { duration: 0.3, ease: "easeOut" },
            delay: 0.1,
          }}
          onClick={handleOverlayClick}
        />
      )}
    </div>
  );
}
