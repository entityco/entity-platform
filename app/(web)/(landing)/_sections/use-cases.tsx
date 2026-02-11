"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";

const useCases = [
  { id: "marketing", title: "Marketing", subtitle: "Campaign & channel decisions", details: ["Track channel allocation with context", "Compare strategies with evidence", "Build playbook from wins"] },
  { id: "product", title: "Product A/B", subtitle: "Experiments & shipping", details: ["Link experiments to decisions", "Track rollout reasoning", "Reduce decision debt"] },
  { id: "revenue", title: "Revenue", subtitle: "Pricing & growth", details: ["Document pricing rationale", "Track package experiments", "Build institutional memory"] },
  { id: "ops", title: "Operations", subtitle: "Process & tooling", details: ["Record vendor selections", "Track process changes", "Create audit trails"] },
];

function UseCaseCard({ uc, expanded, onToggle }: { uc: typeof useCases[0]; expanded: boolean; onToggle: () => void }) {
  return (
    <motion.div layout onClick={onToggle} className="cursor-pointer">
      <motion.div layout="position" className={`border-b border-neutral-200 bg-white p-6 ${expanded ? "" : "hover:bg-neutral-50"}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100">
              <ChevronRight className={`size-6 text-black transition-transform ${expanded ? "rotate-90" : ""}`} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">{uc.title}</h3>
              <p className="text-neutral-500">{uc.subtitle}</p>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {expanded && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
              <ul className="mt-6 space-y-3 border-t border-neutral-200 pt-4">
                {uc.details.map((d, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3 text-neutral-600">
                    <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-green-400" />
                    {d}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function UseCases() {
  const [expanded, setExpanded] = useState<string | null>("marketing");

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-black md:text-5xl">Use Cases</h2>
          <p className="mt-4 text-neutral-500">Decisions that compound. Click to expand.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-xl border border-neutral-200">
          {useCases.map((uc) => (
            <UseCaseCard key={uc.id} uc={uc} expanded={expanded === uc.id} onToggle={() => setExpanded(expanded === uc.id ? null : uc.id)} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
