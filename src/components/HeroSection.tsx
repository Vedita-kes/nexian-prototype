import heroIllustration from "@/assets/hero-illustration.png";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] -top-40 -left-40" style={{ background: "hsl(262 83% 58%)" }} />
      <div className="orb w-[400px] h-[400px] top-1/2 -right-32" style={{ background: "hsl(174 72% 56%)" }} />
      <div className="orb w-[300px] h-[300px] bottom-0 left-1/3" style={{ background: "hsl(280 90% 65%)" }} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-medium mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-muted-foreground">Limited free slots for early users</span>
            </div>

            {/* Headline */}
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Turn Your Skills Into{" "}
              <span className="gradient-text block sm:inline">Your First ₹1000</span>
            </h1>

            {/* Subtext */}
            <p
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              You don't need experience. Just your first opportunity.
            </p>

            {/* Trust badges */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.25s" }}
            >
              {["Beginner-friendly", "No experience required", "Takes &lt; 2 min"].map((badge) => (
                <span
                  key={badge}
                  className="text-xs px-3 py-1.5 rounded-full glass text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: badge }}
                />
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <button
                onClick={onCTAClick}
                className="btn-primary text-base px-8 py-4 animate-pulse-glow"
              >
                🚀 Start Free Skill Test
              </button>
              <button
                onClick={onCTAClick}
                className="btn-secondary text-base px-8 py-4"
              >
                ✅ Try 2 Free Tasks
              </button>
            </div>

            {/* Microcopy */}
            <p
              className="text-xs text-muted-foreground mt-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Takes less than 2 minutes to start · No credit card required
            </p>
          </div>

          {/* Right illustration */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative max-w-sm lg:max-w-full w-full">
              {/* Glow behind image */}
              <div
                className="absolute inset-8 rounded-3xl opacity-30 blur-3xl"
                style={{ background: "var(--gradient-primary)" }}
              />
              <img
                src={heroIllustration}
                alt="Student earning with skills on Nexian platform"
                className="relative z-10 w-full max-w-[480px] mx-auto animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { value: "5000+", label: "Designed to Scale Users" },
            { value: "₹1000", label: "Potential Earning Goal" },
            { value: "100%", label: "Beginner Friendly" },
            { value: "48hrs", label: "Avg. First Earning" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-4 text-center">
              <div className="font-display text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
