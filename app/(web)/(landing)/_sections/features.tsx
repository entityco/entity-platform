"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Brain,
  Layers,
  Hammer,
  GitBranch,
  Zap,
  ShieldCheck,
  Terminal,
  Award,
  Briefcase,
  Users,
  Code,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "AI AGENTS",
    subtitle: "Autonomous Intelligence",
    description: "Autonomous agents with memory and structured reasoning capabilities.",
    color: "bg-nav-blue",
    icon: Brain,
    rotation: 12,
  },
  {
    id: 2,
    title: "DECISION SKILLS",
    subtitle: "Reusable Patterns",
    description: "Reusable templates for your team's decision patterns.",
    color: "bg-nav-orange",
    icon: Layers,
    rotation: -8,
  },
  {
    id: 3,
    title: "INTEGRATED TOOLS",
    subtitle: "Seamless Connections",
    description: "Connect APIs, databases, and real context seamlessly.",
    color: "bg-nav-yellow",
    icon: Hammer,
    rotation: 15,
  },
  {
    id: 4,
    title: "WORKFOWS",
    subtitle: "Smart Pipelines",
    description: "Chain agents into decision pipelines effortlessly.",
    color: "bg-nav-lime",
    icon: GitBranch,
    rotation: -5,
  },
];

export default function Features() {
  const [activeId, setActiveId] = useState<number | null>(1);

  return (
    <section id="features" className="bg-nav-cream py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <h2 className="text-6xl md:text-8xl font-black text-black text-center mb-16 tracking-tighter">
          FEATURES
        </h2>

        <div className="flex flex-col md:flex-row gap-4 h-[80vh] md:h-[600px]">
          {features.map((feature) => (
            <AccordionItem
              key={feature.id}
              feature={feature}
              isOpen={activeId === feature.id}
              onClick={() => setActiveId(feature.id)}
              onHover={() => setActiveId(feature.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionItem({
  feature,
  isOpen,
  onClick,
  onHover,
}: {
  feature: (typeof features)[0];
  isOpen: boolean;
  onClick: () => void;
  onHover: () => void;
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      layout
      onClick={onClick}
      onMouseEnter={onHover}
      className={`relative rounded-[3rem] overflow-hidden cursor-pointer border-4 border-black transition-colors ${feature.color}`}
      initial={false}
      animate={{
        flex: isOpen ? 3 : 1,
        filter: "grayscale(0%)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="text-2xl font-black text-black/20">
            0{feature.id}
          </span>

          {!isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] whitespace-nowrap"
            >
              <h3 className="text-3xl font-black text-black uppercase tracking-tight">
                {feature.title}
              </h3>
            </motion.div>
          )}
        </div>

        <motion.div
          className="relative z-10 flex flex-col gap-4"
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 20,
          }}
        >
          {isOpen && (
            <>
              <h3 className="text-4xl md:text-6xl font-black italic text-black tracking-tighter leading-[0.9] break-words max-w-md">
                {feature.title}
              </h3>
              <p className="text-black/60 font-bold text-lg md:text-xl uppercase tracking-widest">
                {feature.subtitle}
              </p>
              <p className="text-black/80 font-medium text-lg mt-4">
                {feature.description}
              </p>
            </>
          )}
        </motion.div>

        <motion.div
          className="absolute bottom-8 right-8"
          animate={{
            scale: isOpen ? 1.2 : 0.8,
            rotate: feature.rotation,
          }}
        >
          <Icon size={80} className="text-black stroke-[1.5]" />
        </motion.div>
      </div>
    </motion.div>
  );
}
