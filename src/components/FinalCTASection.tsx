import { Zap } from "lucide-react";

interface FinalCTASectionProps {
  onCTAClick: () => void;
}

export default function FinalCTASection({ onCTAClick }: FinalCTASectionProps) {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Heavy glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[400px] rounded-full blur-[120px] opacity-20"
          style={{ background: "var(--gradient-primary)" }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-medium mb-8">
          <Zap className="w-3.5 h-3.5 text-primary" />
          <span className="text-muted-foreground">Your moment is now</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          Your First{" "}
          <span className="gradient-text">₹1000</span>{" "}
          is Waiting
        </h2>

        <p className="text-muted-foreground text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Thousands of students just like you have already started earning. The only difference between them and you is{" "}
          <strong className="text-foreground">one click.</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={onCTAClick}
            className="btn-primary text-lg px-10 py-5 animate-pulse-glow w-full sm:w-auto"
          >
            🚀 Start Now — It's Free
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          {[
            "✅ No credit card",
            "✅ No experience needed",
            "✅ Takes under 2 minutes",
            "✅ Real earning guaranteed",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        {/* Urgency */}
        <div className="mt-10 glass inline-flex items-center gap-3 px-6 py-3 rounded-2xl"
          style={{ border: "1px solid hsl(262 83% 58% / 0.3)" }}>
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted-foreground">
            <strong className="text-foreground">47 learners</strong> showed interest in the last 24 hours
          </span>
        </div>
      </div>
    </section>
  );
}
