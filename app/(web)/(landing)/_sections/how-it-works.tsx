"use client";

import { motion } from "motion/react";
import { Brain, GitBranch, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { icon: Brain, label: "Capture", desc: "Record decisions with context" },
    { icon: GitBranch, label: "Reason", desc: "Document assumptions and trade-offs" },
    { icon: CheckCircle2, label: "Commit", desc: "Lock in decisions with evidence" },
  ];

  return (
    <section className="bg-[#111111] py-32">
      <div className="mx-auto max-w-6xl px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-4xl font-bold text-white"
        >
          How It Works
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-2xl border-2 border-nav-lime/30 bg-nav-lime/5 text-nav-lime">
                <step.icon className="size-10" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-white">{step.label}</h3>
              <p className="text-neutral-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
