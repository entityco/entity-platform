"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { MousePointer2 } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);

  return (
    <section ref={ref} className="relative h-[150vh] bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-nav-blue/[0.05] blur-[120px] rounded-full pointer-events-none" />

        <motion.div className="z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
          <h1 className="font-sans text-7xl md:text-[9rem] font-black tracking-tighter leading-[0.85] mb-12 text-nav-cream">
            Master Your <br />
            Decisions
          </h1>

          <p className="text-gray-400 text-xl md:text-2xl font-medium max-w-2xl mb-14">
            The collaborative decision ledger for startups. Track, validate, and
            grow with AI-powered insights.
          </p>

          <Link href="/demo">
            <button className="group relative bg-nav-cream text-black px-10 py-5 rounded-full font-black text-xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3">
              <div className="absolute inset-0 bg-nav-lime translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.87,0,0.13,1)]" />
              <span className="relative z-10">Get Started</span>
              <MousePointer2
                size={24}
                className="relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:translate-x-1"
              />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
