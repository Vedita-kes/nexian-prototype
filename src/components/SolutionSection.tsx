import { Zap, Shield, Target } from "lucide-react";

export default function SolutionSection() {
  const points = [
    {
      icon: <Target className="w-5 h-5" />,
      text: "Curated beginner-level tasks matched to your skill level",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Verified earning opportunities with guaranteed payout",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Step-by-step guided path from zero to your first ₹1000",
    },
  ];

  return (
    <section id="solution" className="relative py-24 overflow-hidden">
      <div className="orb w-[500px] h-[500px] -left-40 top-1/2 -translate-y-1/2" style={{ background: "hsl(262 83% 58%)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-medium mb-6">
              <span className="gradient-text font-semibold">The Solution</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Nexian is{" "}
              <span className="gradient-text">Not a Freelancing</span>{" "}
              Platform
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              It is your <strong className="text-foreground">first earning system.</strong> Built from ground up for complete beginners who have skills but have never earned from them.
            </p>

            <div className="space-y-4">
              {points.map((p, i) => (
                <div key={i} className="flex items-center gap-4 glass rounded-xl p-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-primary"
                    style={{ background: "hsl(262 83% 58% / 0.15)", border: "1px solid hsl(262 83% 58% / 0.3)" }}>
                    {p.icon}
                  </div>
                  <p className="text-sm text-foreground">{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="glass rounded-3xl p-8 relative overflow-hidden"
              style={{ border: "1px solid hsl(262 83% 58% / 0.3)" }}>
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20 blur-3xl"
                style={{ background: "var(--gradient-primary)" }} />

              <div className="relative z-10 space-y-6">
                <div className="text-center mb-6">
                  <span className="font-display text-5xl font-bold gradient-text">₹1000</span>
                  <p className="text-muted-foreground text-sm mt-2">Your first earning milestone</p>
                </div>

                {[
                  { label: "Skill Assessment", progress: 100, color: "hsl(174 72% 56%)" },
                  { label: "Task Completion", progress: 75, color: "hsl(262 83% 58%)" },
                  { label: "Income Earned", progress: 45, color: "hsl(280 90% 65%)" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs text-muted-foreground mb-2">
                      <span>{item.label}</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full" style={{ background: "hsl(var(--secondary))" }}>
                      <div
                        className="h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.progress}%`, background: item.color }}
                      />
                    </div>
                  </div>
                ))}

                <div className="grid grid-cols-2 gap-3 pt-4">
                  <div className="rounded-xl p-3 text-center" style={{ background: "hsl(262 83% 58% / 0.1)" }}>
                    <div className="font-bold text-primary text-lg">500+</div>
                    <div className="text-xs text-muted-foreground">Active Tasks</div>
                  </div>
                  <div className="rounded-xl p-3 text-center" style={{ background: "hsl(174 72% 56% / 0.1)" }}>
                    <div className="font-bold text-accent text-lg">98%</div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
