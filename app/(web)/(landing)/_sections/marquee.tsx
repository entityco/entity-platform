"use client";

import { motion } from "motion/react";
import { Brain, Database, Zap, Cpu, GitBranch, Layers, Shield, Hammer } from "lucide-react";

const tools = [
  { icon: Brain, label: "AI Agents" },
  { icon: Database, label: "Memory" },
  { icon: Zap, label: "Realtime" },
  { icon: Cpu, label: "Reasoning" },
  { icon: GitBranch, label: "Versioning" },
  { icon: Layers, label: "Layers" },
  { icon: Shield, label: "Security" },
  { icon: Hammer, label: "Tools" },
  { icon: Brain, label: "AI Agents" },
  { icon: Database, label: "Memory" },
  { icon: Zap, label: "Realtime" },
  { icon: Cpu, label: "Reasoning" },
];

export default function Marquee() {
  return (
    <section className="overflow-hidden bg-nav-black py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="flex animate-marquee gap-4">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3"
            >
              <tool.icon className="size-5 text-nav-lime" />
              <span className="font-mono text-sm font-medium text-white">{tool.label}</span>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-nav-black to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-nav-black to-transparent" />
      </motion.div>
    </section>
  );
}
