import { AlertCircle, HelpCircle, TrendingDown } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Skills But No Earning",
      desc: "You spent months learning but still can't find where to apply your skills and get paid for them.",
    },
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "Freelancing is Confusing",
      desc: "Platforms are cluttered, competition is fierce, and beginners never get a chance without portfolio.",
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "No Beginner Opportunities",
      desc: "Every job posting says '2 years experience required'. The beginner trap is real and frustrating.",
    },
  ];

  return (
    <section id="problem" className="relative py-24 overflow-hidden">
      <div className="orb w-[400px] h-[400px] top-0 right-0 opacity-10" style={{ background: "hsl(0 70% 60%)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-medium mb-4">
            <span className="text-destructive font-semibold">The Real Problem</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Stuck After{" "}
            <span className="gradient-text">Learning Skills?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Most students learn but never earn. The gap between skill and income is massive — and nobody shows you how to bridge it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className="section-card group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-destructive"
                style={{ background: "hsl(0 84% 60% / 0.1)", border: "1px solid hsl(0 84% 60% / 0.2)" }}>
                {p.icon}
              </div>
              <h3 className="font-display text-lg font-bold mb-2 text-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Transition bridge */}
        <div className="mt-16 text-center glass rounded-2xl p-8 max-w-2xl mx-auto"
          style={{ border: "1px solid hsl(262 83% 58% / 0.3)" }}>
          <p className="text-xl font-semibold text-foreground">
            What if there was a system designed{" "}
            <span className="gradient-text">specifically for beginners</span>{" "}
            like you?
          </p>
        </div>
      </div>
    </section>
  );
}
