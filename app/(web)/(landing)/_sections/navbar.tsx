"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const menuItems = [
    { title: "Features", href: "#features" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center pointer-events-none transition-colors duration-300 ${
          isOpen ? "text-black" : "text-white mix-blend-difference"
        }`}
      >
        <Link href="/" className="pointer-events-auto flex items-center gap-3 group">
          <div
            className={`p-2 rounded-full transition-colors duration-300 ${
              isOpen ? "bg-black text-white" : "bg-nav-orange text-black"
            } group-hover:scale-110`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-black text-2xl tracking-tighter uppercase hidden md:block">
            ENTITY
          </span>
        </Link>

        <div className="pointer-events-auto flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="font-bold uppercase text-sm tracking-wide hover:opacity-70 transition-opacity"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <Link href="/demo" className="hidden md:block pointer-events-auto">
            <button
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all font-bold uppercase text-sm tracking-wide ${
                isOpen
                  ? "border-black/20 hover:bg-black hover:text-white"
                  : "border-white/20 hover:bg-white hover:text-black"
              }`}
            >
              Demo <ArrowUpRight size={18} />
            </button>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`hidden items-center gap-2 px-4 py-3 rounded-full transition-colors group pointer-events-auto ${
              isOpen ? "hover:bg-black/10" : "hover:bg-white/10"
            }`}
          >
            <span className="font-bold uppercase text-sm tracking-wide hidden md:block">
              {isOpen ? "Close" : "Menu"}
            </span>
            <div className="relative w-6 h-6">
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    className="absolute inset-0"
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    className="absolute inset-0"
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-nav-orange flex flex-col justify-center items-center px-4"
          >
            <div className="flex flex-col items-center gap-2 md:gap-6">
              {["Features", "How it Works", "Pricing", "Contact"].map((item, i) => (
                <div key={item} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "100%" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.1,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  >
                    <Link
                      href={item === "Contact" ? "#contact" : "#"}
                      onClick={() => setIsOpen(false)}
                      className="block text-[12vw] md:text-[8vw] font-black text-black leading-[0.9] hover:text-nav-cream transition-colors tracking-tighter uppercase"
                    >
                      {item}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="mt-12 md:hidden overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Link href="/demo">
                  <button className="bg-black text-white px-8 py-4 rounded-full font-black text-xl uppercase tracking-wide flex items-center gap-3">
                    Launch Demo <ArrowUpRight size={24} />
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
