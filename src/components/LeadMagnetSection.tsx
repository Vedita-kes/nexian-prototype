import { Gift, ClipboardCheck, IndianRupee, Timer } from "lucide-react";

interface LeadMagnetSectionProps {
  onCTAClick: () => void;
}

export default function LeadMagnetSection({ onCTAClick }: LeadMagnetSectionProps) {
  const offers = [
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Free Skill Test",
      desc: "Assess your current skill level in 5 minutes. Get your Nexian Skill Score.",
      tag: "FREE",
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "2 Free Tasks",
      desc: "Start with 2 real tasks absolutely free. No payment, no commitment.",
      tag: "FREE",
    },
    {
      icon: <IndianRupee className="w-6 h-6" />,
      title: "First Earning Opportunity",
      desc: "Get your first guaranteed earning opportunity after completing the test.",
      tag: "EARN",
    },
  ];

  return (
    <section id="offer" className="relative py-24 overflow-hidden">
      <div className="orb w-[500px] h-[500px] right-0 -top-20" style={{ background: "hsl(174 72% 56%)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass rounded-3xl p-8 sm:p-12 overflow-hidden relative"
          style={{ border: "1px solid hsl(262 83% 58% / 0.3)" }}>
          {/* Decorative gradient top */}
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
            style={{ background: "var(--gradient-primary)" }} />

          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-semibold"
              style={{ background: "hsl(262 83% 58% / 0.15)", border: "1px solid hsl(262 83% 58% / 0.3)", color: "hsl(var(--primary))" }}>
              <Timer className="w-4 h-4" />
              Limited Time Offer
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Start for{" "}
              <span className="gradient-text">Completely Free</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              No hidden fees, no credit card. Just your skill and your ambition.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {offers.map((offer, i) => (
              <div key={i} className="rounded-2xl p-6 text-center relative group transition-all duration-300 hover:scale-105"
                style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}>
                {/* Tag */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: offer.tag === "FREE" ? "hsl(174 72% 56%)" : "var(--gradient-primary)",
                      color: "hsl(240 20% 6%)"
                    }}>
                    {offer.tag}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 mt-2 text-primary"
                  style={{ background: "hsl(262 83% 58% / 0.15)", border: "1px solid hsl(262 83% 58% / 0.2)" }}>
                  {offer.icon}
                </div>
                <h3 className="font-display text-base font-bold mb-2">{offer.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{offer.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button onClick={onCTAClick} className="btn-primary text-lg px-10 py-5 animate-pulse-glow">
              🎯 Claim My Free Spot — Start Now
            </button>
            <p className="text-xs text-muted-foreground mt-3">
              ⚡ Only limited spots available · Join 5000+ students already on Nexian
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
