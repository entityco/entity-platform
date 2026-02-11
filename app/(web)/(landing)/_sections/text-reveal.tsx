"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Brain, GitBranch, Layers, Hammer, Cpu, Database } from "lucide-react";

interface TextRevealSectionProps {
  showIcons: boolean;
}

export default function TextRevealSection({ showIcons }: TextRevealSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const words = ["The", "Collaborative", "Decision", "Ledger", "for", "Startups"];

  const icons = [
    { icon: Brain, color: "text-nav-lime" },
    { icon: GitBranch, color: "text-nav-orange" },
    { icon: Layers, color: "text-nav-blue" },
    { icon: Hammer, color: "text-nav-yellow" },
    { icon: Cpu, color: "text-nav-lime" },
    { icon: Database, color: "text-nav-orange" },
  ];

  return (
    <section ref={containerRef} className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#111111]">
      <div className="mx-auto max-w-6xl px-8 text-center">
        <div className="relative mb-12 flex flex-wrap items-center justify-center gap-4">
          {words.map((word, i) => {
            const wordProgress = scrollYProgress.get();
            const start = i / words.length;
            const end = start + 0.3;
            const isVisible = wordProgress >= start && wordProgress < end;
            const blur = Math.abs(wordProgress - start) * 20;

            return (
              <motion.span
                key={word}
                animate={{
                  opacity: isVisible ? 1 : 0.2,
                  filter: `blur(${isVisible ? 0 : blur}px)`,
                }}
                transition={{ duration: 0.3 }}
                className="text-4xl font-bold text-white md:text-6xl"
              >
                {word}
              </motion.span>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {icons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`flex size-16 items-center justify-center rounded-xl border border-white/10 bg-white/5 ${item.color}`}
            >
              <item.icon className="size-8" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
