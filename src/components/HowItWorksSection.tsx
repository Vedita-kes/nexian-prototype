import { BookOpen, CheckSquare, BadgeCheck, Wallet } from "lucide-react";

interface HowItWorksSectionProps {
  onCTAClick: () => void;
}

export default function HowItWorksSection({ onCTAClick }: HowItWorksSectionProps) {
  const steps = [
    {
      step: "01",
      icon: <BookOpen className="w-7 h-7" />,
      title: "Choose Your Skill",
      desc: "Select from 20+ beginner-friendly skill categories. Web, design, writing, data — pick what you know.",
      color: "hsl(262 83% 58%)",
    },
    {
      step: "02",
      icon: <CheckSquare className="w-7 h-7" />,
      title: "Complete a Task",
      desc: "Get matched with real micro-tasks that fit your skill level. Small, clear, achievable tasks to start with.",
      color: "hsl(280 90% 65%)",
    },
    {
      step: "03",
      icon: <BadgeCheck className="w-7 h-7" />,
      title: "Get Verified",
      desc: "Submit your work and get it reviewed. Build your Nexian verified profile and portfolio automatically.",
      color: "hsl(174 72% 56%)",
    },
    {
      step: "04",
      icon: <Wallet className="w-7 h-7" />,
      title: "Start Earning",
      desc: "Get paid directly to your account. Unlock higher-paying tasks as you build your reputation.",
      color: "hsl(45 90% 60%)",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      <div className="orb w-[350px] h-[350px] right-0 top-20" style={{ background: "hsl(174 72% 56%)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-medium mb-4">
            <span className="gradient-text-teal font-semibold">Simple Process</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How Nexian{" "}
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            4 simple steps to go from learner to earner — no experience needed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px"
            style={{ background: "linear-gradient(90deg, transparent, hsl(262 83% 58% / 0.4), transparent)" }} />

          {steps.map((step, i) => (
            <div key={i} className="section-card relative text-center group">
              {/* Step number */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="glass px-3 py-1 rounded-full text-xs font-bold"
                  style={{ color: step.color, border: `1px solid ${step.color}30` }}>
                  {step.step}
                </span>
              </div>

              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-2 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${step.color}15`, border: `1px solid ${step.color}30`, color: step.color }}>
                {step.icon}
              </div>

              <h3 className="font-display text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button onClick={onCTAClick} className="btn-primary text-base px-8 py-4">
            Start My Journey →
          </button>
        </div>
      </div>
    </section>
  );
}
