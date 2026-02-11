"use client";

import { motion } from "motion/react";
import { Brain, GitBranch, Layers, Hammer, Cpu, Database, Zap, Shield } from "lucide-react";

const roadmapItems = [
  { icon: Brain, title: "Capture", desc: "Record decisions with full context", color: "bg-nav-orange" },
  { icon: GitBranch, title: "Reason", desc: "Document assumptions & trade-offs", color: "bg-nav-blue" },
  { icon: Layers, title: "Structure", desc: "Organize decisions by category", color: "bg-nav-yellow" },
  { icon: Hammer, title: "Execute", desc: "Turn decisions into action", color: "bg-nav-lime" },
  { icon: Cpu, title: "Learn", desc: "AI-powered insights & patterns", color: "bg-nav-orange" },
  { icon: Database, title: "Remember", desc: "Build institutional memory", color: "bg-nav-blue" },
  { icon: Zap, title: "Share", desc: "Collaborate with your team", color: "bg-nav-yellow" },
  { icon: Shield, title: "Trust", desc: "Audit-ready decision trails", color: "bg-nav-lime" },
];

export default function Roadmap() {
  return (
    <section className="bg-nav-cream py-32">
      <div className="mx-auto max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-black tracking-tight text-black md:text-7xl">
            THE DECISION PLATFORM
          </h2>
          <p className="mt-4 font-mono text-lg text-neutral-600">
            Everything you need to decide smarter, together.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {roadmapItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl"
            >
              <div className={`absolute -right-8 -top-8 size-28 rounded-full ${item.color} opacity-20`} />
              <div className={`mb-4 flex size-16 items-center justify-center rounded-2xl ${item.color}`}>
                <item.icon className="size-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-black">{item.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
