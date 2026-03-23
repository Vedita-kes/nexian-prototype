import { Users, Flame, Star, FolderOpen } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Beginner Friendly",
      desc: "Every task is designed for people starting from zero. No minimum requirements or experience.",
      highlight: "hsl(262 83% 58%)",
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: "No Competition Pressure",
      desc: "Tasks are assigned, not bid on. You won't compete against seasoned professionals for work.",
      highlight: "hsl(280 90% 65%)",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Real Earning Opportunities",
      desc: "Every task pays real money. No surveys, no fake promises — direct skill-to-income pipeline.",
      highlight: "hsl(174 72% 56%)",
    },
    {
      icon: <FolderOpen className="w-6 h-6" />,
      title: "Portfolio Building",
      desc: "Every completed task auto-builds your portfolio. Showcase verified work to future clients.",
      highlight: "hsl(45 90% 60%)",
    },
  ];

  return (
    <section id="benefits" className="relative py-24 overflow-hidden">
      <div className="orb w-[450px] h-[450px] -left-20 bottom-0" style={{ background: "hsl(262 83% 58%)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-medium mb-4">
            <span className="gradient-text font-semibold">Why Nexian</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Built for{" "}
            <span className="gradient-text">Your Success</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Everything designed around one goal — getting you to your first ₹1000 as fast as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="group flex gap-5 section-card items-start">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${b.highlight}15`, border: `1px solid ${b.highlight}30`, color: b.highlight }}
              >
                {b.icon}
              </div>
              <div>
                <h3 className="font-display text-lg font-bold mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
