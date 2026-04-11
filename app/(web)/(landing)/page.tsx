"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const roles = [
  "Economists",
  "ML Researchers",
  "Social Scientists",
  "Finance Researchers",
  "Psychologists",
  "Computational Researchers",
];

const capabilities = [
  "Scans and synthesizes entire research corpora. Surfaces contradictions and gaps before you open a single PDF.",
  "Proposes testable hypotheses grounded in literature. Scaffolds study design and power estimates.",
  "Runs end-to-end analysis — cleaning, modelling, visualisation — without breaking your flow.",
  "Co-writes papers and grant proposals in your voice. Correct citations, ready for review.",
  "Bridges methods across disciplines. Econometrics to psychology. Causal inference to ML.",
];

const capTitles = [
  "Literature synthesis",
  "Hypothesis generation",
  "Agentic data pipelines",
  "Manuscript drafting",
  "Cross-domain reasoning",
];

const useCases = [
  {
    role: "Economists",
    headline: "Replication crisis, solved",
    body: "Synthesizes 200+ papers overnight, flags conflicting IV strategies, proposes a design. 6 hours, not 6 weeks.",
  },
  {
    role: "ML Researchers",
    headline: "From idea to benchmark in days",
    body: "Monitors ArXiv, clusters related work, writes ablation code, drafts related-work. You focus on the contribution.",
  },
  {
    role: "Social Scientists",
    headline: "Survey to insight, automated",
    body: "Codes 50k open-ended responses, runs mixed-methods, surfaces latent themes with APA citations.",
  },
  {
    role: "Finance Researchers",
    headline: "Alpha from academic rigor",
    body: "Reviews the factor zoo, flags data-snooping, writes backtesting code with proper walk-forward splits.",
  },
  {
    role: "Psychologists",
    headline: "Meta-analysis at machine speed",
    body: "Extracts effect sizes from PDFs, handles heterogeneity, builds forest plots. PRISMA-compliant.",
  },
  {
    role: "Computational Researchers",
    headline: "Reproduce, extend, publish",
    body: "Reads the methods, rewrites legacy MATLAB in Python, validates outputs. One session.",
  },
];

export default function Page() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleAnim, setRoleAnim] = useState<"in" | "out">("in");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const t = setInterval(() => {
      setRoleAnim("out");
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setRoleAnim("in");
      }, 280);
    }, 2400);
    return () => clearInterval(t);
  }, []);

  const handleJoin = () => {
    if (!email || !email.includes("@")) {
      toast.error("enter a valid email.");
      return;
    }
    toast.success("you're on the list.");
    setEmail("");
  };

  return (
    <div className="w-full min-h-screen bg-black text-white font-mono">
      <div className="max-w-lg mx-10 py-10 flex flex-col gap-12">

        {/* hero */}
        <div className="flex flex-col gap-1">
          <h1 className="text-sm text-white uppercase">
            the ai co-scientist for applied scientists.
          </h1>
          <p className="text-sm text-white/80 flex items-center gap-1 flex-wrap">
            building agentic workflow for{" "}
            <span
              key={roleIndex}
              className="text-white"
              style={{
                display: "inline-block",
                animation:
                  roleAnim === "in"
                    ? "wIn 0.28s ease forwards"
                    : "wOut 0.28s ease forwards",
              }}
            >
              {roles[roleIndex]}
            </span>
          </p>
        </div>

        {/* what it does */}
        <div className="flex flex-col gap-3">
          <p className="text-xs text-white/60">— what it does</p>
          <ul className="flex flex-col gap-2">
            {capTitles.map((title, i) => (
              <li key={title} className="flex flex-col gap-0.5">
                <span className="text-sm text-white/70">{title}</span>
                <span className="text-xs text-white/50 leading-relaxed">
                  {capabilities[i]}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* use cases */}
        <div className="flex flex-col gap-3">
          <p className="text-xs text-white/60">— use cases</p>
          <ul className="flex flex-col gap-4">
            {useCases.map((u) => (
              <li key={u.role} className="flex flex-col gap-0.5">
                <span className="text-xs text-white/50">{u.role}</span>
                <span className="text-sm text-white/70">{u.headline}</span>
                <span className="text-xs text-white/50 leading-relaxed">{u.body}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* waitlist */}
        <div className="flex flex-col gap-3">
          <p className="text-xs text-white/60">— early access</p>
          <p className="text-xs text-white/50 leading-relaxed">
            small cohort. applied empirical researchers only. we'll reach out.
          </p>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="you@institution.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleJoin()}
              className="h-7 rounded-none bg-transparent border-white/10 text-white text-xs font-mono placeholder:text-white/15 focus-visible:ring-0 focus-visible:border-white/25"
            />
            <Button
              size="sm"
              onClick={handleJoin}
              className="h-7 rounded-none bg-white text-black hover:bg-white/85 text-[10px] font-mono uppercase tracking-widest px-3 shrink-0"
            >
              join
            </Button>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes wIn  { from { opacity:0; transform:translateY(4px); } to { opacity:1; transform:translateY(0); } }
        @keyframes wOut { from { opacity:1; transform:translateY(0); } to { opacity:0; transform:translateY(-4px); } }
      `}</style>
    </div>
  );
}