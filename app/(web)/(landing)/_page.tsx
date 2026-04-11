"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Braces, Code, FileCode, Layers } from "lucide-react";
import Navbar from "./_sections/navbar";
import Hero from "./_sections/hero";
import Features from "./_sections/features";
import WaitlistForm from "./_sections/waitlist-form";
import Footer from "./_sections/footer";

const icons = [
  { Component: Terminal, color: "text-nav-lime" },
  { Component: Braces, color: "text-nav-yellow" },
  { Component: Code, color: "text-nav-blue" },
  { Component: FileCode, color: "text-nav-orange" },
  { Component: Layers, color: "text-nav-blue" },
];

function Loader() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const cycleCount = 2;
    const totalSteps = icons.length * cycleCount;
    const speed = 150;

    let step = 0;

    const interval = setInterval(() => {
      step++;

      if (step >= totalSteps) {
        clearInterval(interval);
        setIsFinished(true);
        setTimeout(() => {
          document.body.style.overflow = "";
        }, 800);
      } else {
        setCurrentIndex((prev) => (prev + 1) % icons.length);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isFinished ? null : (
        <motion.div
          className="fixed inset-0 z-[9999] bg-nav-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <div className="relative flex items-center justify-center w-32 h-32 md:w-48 md:h-48">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 1.5, opacity: 0, rotate: 20 }}
                transition={{ duration: 0.15, ease: "backOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {(() => {
                  const Icon = icons[currentIndex].Component;
                  return (
                    <Icon
                      size={80}
                      className={icons[currentIndex].color}
                      strokeWidth={2}
                    />
                  );
                })()}
              </motion.div>
            </AnimatePresence>

            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none opacity-20">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function LandingPage() {
  return (
    <>
      <Loader />
      <main className="min-h-screen bg-nav-black text-nav-cream selection:bg-nav-lime/30">
        <Navbar />
        <Hero />
        <Features />
        <WaitlistForm />
        <Footer />
      </main>
    </>
  );
}
