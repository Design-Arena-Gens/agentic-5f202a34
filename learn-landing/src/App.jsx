import {
  ArrowUpRight,
  Globe,
  LineChart,
  Recycle,
  Sparkles,
} from "lucide-react";
import {
  TiltCardBody,
  TiltCardContainer,
  TiltCardItem,
} from "./components/ui/tilt-card";

const navigation = ["Approach", "Solutions", "Impact", "Insights"];

const pillars = [
  {
    title: "Unlearn Complexity",
    copy: "We dismantle outdated systems and rebuild the pathways that actually accelerate mastery.",
    icon: Sparkles,
  },
  {
    title: "Circular Learning",
    copy: "Every rollout evolves—lesson data, feedback loops, and educator intuition feed into the next iteration.",
    icon: Recycle,
  },
  {
    title: "Proof of Impact",
    copy: "Real-time intelligence dashboards reveal learning shifts, equity gaps, and sustainability milestones.",
    icon: LineChart,
  },
];

const impact = [
  {
    headline: "64%",
    subline: "faster skill adoption for faculties embracing iterative course design.",
  },
  {
    headline: "12x",
    subline: "ROI when institutions restructure learning journeys with regenerative pedagogy.",
  },
  {
    headline: "38",
    subline: "cities running climate-positive academies on the Unlearn operating model.",
  },
];

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-ink-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-300/40 blur-[140px] mix-blend-multiply animate-blur-pulse" />
        <div className="absolute top-32 -left-24 h-[320px] w-[320px] rounded-full bg-indigo-300/50 blur-[140px] mix-blend-multiply animate-blur-pulse animation-delay-300" />
        <div className="absolute bottom-0 right-10 h-[360px] w-[360px] rounded-full bg-teal-200/60 blur-[160px] mix-blend-multiply animate-blur-pulse animation-delay-700" />
      </div>

      <div className="absolute inset-x-0 top-0 h-[640px] bg-grid-light opacity-70 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.8),transparent)]" />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
        <span className="font-display text-2xl italic tracking-tight text-ink-900">
          Unlearn<span className="text-emerald-600">.</span>
        </span>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-500 md:flex">
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="tracking-wide transition-colors hover:text-ink-800"
            >
              {item}
            </a>
          ))}
        </nav>
        <button className="group relative overflow-hidden rounded-full border border-emerald-500/40 bg-white/80 px-5 py-2 text-sm font-semibold text-ink-800 shadow-soft-ring backdrop-blur transition hover:border-emerald-500">
          <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/20 opacity-0 transition group-hover:opacity-100" />
          <span className="relative flex items-center gap-2">
            Engage
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </button>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-32 px-6 pb-32 pt-6">
        <section className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/70 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-ink-400 backdrop-blur">
              Edtech for regenerative futures
            </div>

            <h1 className="max-w-2xl font-display text-5xl italic leading-[1.05] tracking-tight text-ink-900 md:text-6xl lg:text-7xl">
              Unlearning is the strongest preparation for what’s next.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-ink-500 md:text-lg">
              Learn partners with institutions to architect sustainable learning
              ecosystems. We reimagine curricula, technology, and culture so
              educators and students can abandon what no longer serves, and grow
              literacy for what will.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button className="relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/10 transition hover:scale-[1.01] hover:bg-ink-800">
                Start an unlearning lab
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-3 text-sm text-ink-500">
                <div className="relative">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
                  <span className="relative block h-3 w-3 rounded-full bg-emerald-500" />
                </div>
                Active across 5 continents
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -translate-y-6 translate-x-4 rounded-[36px] bg-gradient-to-br from-white/70 via-emerald-100/40 to-white/10 blur-3xl" />
            <TiltCardContainer containerClassName="py-0">
              <TiltCardBody className="relative overflow-hidden border border-white/60 bg-white/80 backdrop-blur-xl">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-emerald-200/70 via-transparent to-transparent opacity-80" />
                <TiltCardItem
                  translateZ={40}
                  className="flex h-full flex-col justify-between gap-8 p-8"
                >
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                      Insight Loop
                    </div>
                    <h3 className="font-display text-3xl italic text-ink-900">
                      The Unlearn Canvas
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-500">
                      Adaptive modules map institutional challenges with
                      actionable pilots, pulling data from every learner
                      interaction to re-sequence the journey in real time.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-white/80 bg-white/70 p-4 shadow-inner">
                      <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.25em] text-ink-400">
                        <span>Unlearn / Learn</span>
                        <span>Balance</span>
                      </div>
                      <div className="mt-4 flex h-3 overflow-hidden rounded-full bg-ink-100">
                        <span className="w-[58%] animate-shimmer bg-gradient-to-r from-emerald-400 via-emerald-200 to-emerald-500 bg-[length:200%_100%]" />
                      </div>
                      <div className="mt-3 flex items-center justify-between text-[13px] text-ink-500">
                        <span>Legacy habits released</span>
                        <span className="font-semibold text-ink-700">58%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-white/80 bg-white/60 px-4 py-3 text-sm text-ink-500 shadow-inner">
                      <div>
                        Future readiness pulse
                        <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-500">
                          Faculty cohort delta
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-2xl text-ink-900">+42</p>
                        <p className="text-xs uppercase tracking-[0.3em] text-emerald-600">
                          pts
                        </p>
                      </div>
                    </div>
                  </div>
                </TiltCardItem>
              </TiltCardBody>
            </TiltCardContainer>
          </div>
        </section>

        <section
          id="approach"
          className="relative overflow-hidden rounded-[40px] border border-white/70 bg-white/70 px-8 py-16 backdrop-blur-xl shadow-soft-ring"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/40 to-emerald-100/40 opacity-70" />
          <div className="relative grid gap-12 lg:grid-cols-[0.75fr_1fr]">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
                The Unlearn Method
              </span>
              <h2 className="font-display text-4xl italic text-ink-900">
                Radical clarity for modern educators.
              </h2>
              <p className="text-base leading-relaxed text-ink-500">
                We orchestrate cross-functional teams—academics, strategists,
                experience designers—to reframe legacy learning models. Each
                engagement ships with a system of rituals, analytics, and
                narrative assets to sustain momentum.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 md:gap-6">
              {pillars.map(({ title, copy, icon: Icon }) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-3xl border border-emerald-100/80 bg-white/80 p-6 shadow-soft-ring transition hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/0 via-emerald-100/60 to-white/0 opacity-0 transition group-hover:opacity-100" />
                  <div className="relative space-y-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="font-semibold text-lg text-ink-900">{title}</p>
                    <p className="text-sm leading-relaxed text-ink-500">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="impact"
          className="relative grid gap-12 rounded-[40px] border border-white/60 bg-white/70 px-8 py-16 backdrop-blur-xl shadow-soft-ring lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-emerald-600">
              Impact in motion
            </span>
            <h2 className="font-display text-4xl italic text-ink-900">
              Transformation that compounds across ecosystems.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-ink-500">
              Our frameworks embed sustainability heuristics directly inside
              professional development cycles. Institutions access a shared
              intelligence network that evolves with every new discovery, so
              nobody has to relearn yesterday’s mistakes.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {impact.map(({ headline, subline }) => (
                <div
                  key={headline}
                  className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-inner"
                >
                  <p className="font-display text-4xl italic text-ink-900">
                    {headline}
                  </p>
                  <p className="mt-3 text-sm text-ink-500">{subline}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/70 shadow-soft-ring">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/30 via-transparent to-white opacity-60" />
            <div className="relative flex h-full flex-col justify-between gap-10 p-8">
              <div className="flex items-center justify-between">
                <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-600">
                  Field Notes
                </div>
                <Globe className="h-6 w-6 text-emerald-500" />
              </div>
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.32em] text-ink-400">
                  Active Programs
                </p>
                <div className="space-y-4">
                  {[
                    { label: "Resilient Campuses", value: "27" },
                    { label: "AI Literacy Studios", value: "41" },
                    { label: "Community Micro-Schools", value: "56" },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/60 px-4 py-3 text-sm text-ink-500"
                    >
                      <span>{label}</span>
                      <span className="font-semibold text-ink-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-6 text-sm text-emerald-900">
                “Unlearn helped our faculty move beyond incremental tweaks. We
                now design regenerative learning pathways that stay relevant as
                the world reconfigures itself.”
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[40px] border border-white/70 bg-ink-900 px-8 py-16 text-white shadow-2xl shadow-emerald-500/10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.45),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.35),transparent_52%)] opacity-80 blur-3xl" />
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-4xl italic">
                Ready to unlearn, together?
              </h3>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/70">
                We convene bespoke sessions with leadership, faculty, and student
                visionaries to architect what comes next. Tell us where your
                learning system feels stuck—we’ll design the first leap.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
                Book an immersion
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-3 rounded-full border border-emerald-300/50 bg-emerald-400/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400/30">
                Download our field guide
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/40 bg-white/70 py-8 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-sm text-ink-400 md:flex-row md:items-center md:justify-between">
          <span className="font-display text-xl italic tracking-tight text-ink-900">
            Unlearn<span className="text-emerald-600">.</span>
          </span>
          <p className="text-xs uppercase tracking-[0.35em] text-ink-400">
            Crafting sustainable futures for educators & learners
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="transition-colors hover:text-ink-600"
            >
              Privacy
            </a>
            <a
              href="#"
              className="transition-colors hover:text-ink-600"
            >
              Careers
            </a>
            <a
              href="#"
              className="transition-colors hover:text-ink-600"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
