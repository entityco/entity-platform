import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, GitBranch, Hammer, Layers } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Problem />
      <WhatIsEntity />
      <Pillars />
      <Audience />
      <CTA />
      <Footer />
    </main>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          AI changed how we build.
          <br />
          <span className="text-neutral-400">Entity changes how we decide.</span>
        </h1>

        <p className="mt-6 text-lg text-neutral-300">
          A reasoning workspace where AI agents think, use tools, and run
          decision-making sequences—together.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Button size="lg">
            Get early access <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            View demo
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROBLEM ---------------- */

function Problem() {
  return (
    <section className="bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">
          AI helps you write code.
          <br />
          Decisions are still scattered.
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <ProblemCard title="Chats" description="No memory or structure." />
          <ProblemCard title="Docs" description="No execution." />
          <ProblemCard title="Dashboards" description="No reasoning." />
        </div>

        <p className="mt-12 text-neutral-400">
          Important decisions live across Slack, Notion, prompts, and intuition.
        </p>
      </div>
    </section>
  );
}

function ProblemCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="border-neutral-800 bg-neutral-900">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-neutral-400">
        {description}
      </CardContent>
    </Card>
  );
}

/* ---------------- WHAT IS ENTITY ---------------- */

function WhatIsEntity() {
  return (
    <section className="bg-neutral-900 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">
          A workspace for reasoning, not prompting
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-neutral-300">
          Entity lets teams build AI agents that reason step-by-step, use tools,
          track evidence, and execute workflows—so decisions are explainable,
          repeatable, and improvable.
        </p>

        <div className="mt-16 rounded-xl border border-neutral-800 bg-neutral-950 p-6 text-sm text-neutral-400">
          {/* Mock UI */}
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-md border border-neutral-800 p-4">
              Agents
            </div>
            <div className="rounded-md border border-neutral-800 p-4">
              Agent Editor
            </div>
            <div className="rounded-md border border-neutral-800 p-4">
              Runs & Evidence
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PILLARS ---------------- */

function Pillars() {
  return (
    <section className="bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <Pillar
            icon={<Brain />}
            title="Agents"
            text="AI entities with memory, goals, and reasoning."
          />
          <Pillar
            icon={<Layers />}
            title="Skills"
            text="Reusable reasoning patterns and prompts."
          />
          <Pillar
            icon={<Hammer />}
            title="Tools"
            text="Controlled access to APIs, files, and data."
          />
          <Pillar
            icon={<GitBranch />}
            title="Workflows"
            text="Chain agents into decision pipelines."
          />
        </div>
      </div>
    </section>
  );
}

function Pillar({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Card className="border-neutral-800 bg-neutral-900">
      <CardHeader className="flex items-center gap-3">
        <div className="text-neutral-300">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-neutral-400">
        {text}
      </CardContent>
    </Card>
  );
}

/* ---------------- AUDIENCE ---------------- */

function Audience() {
  return (
    <section className="bg-neutral-900 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Built for teams that think
        </h2>

        <p className="mt-6 text-neutral-300">
          We’re starting with small and medium teams where reasoning can be fully
          leveraged—but Entity scales from solo founders to large organizations.
        </p>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

function CTA() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Build smarter decision systems
        </h2>

        <p className="mt-6 text-neutral-400">
          Join the early group shaping how teams reason with AI.
        </p>

        <Button size="lg" className="mt-8">
          Request access
        </Button>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-6 text-center text-sm text-neutral-500">
      © {new Date().getFullYear()} Entity
    </footer>
  );
}
