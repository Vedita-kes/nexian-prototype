import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "User A",
      role: "Early Tester Feedback",
      avatar: "A",
      rating: 5,
      text: "I had HTML/CSS skills but never knew how to earn from them. Nexian gave me my first ₹800 task within 3 days. Game changer for beginners!",
      earning: "Potential ₹1000+",
      color: "hsl(262 83% 58%)",
    },
    {
      name: "User B",
      role: "Early Tester Feedback",
      avatar: "B",
      rating: 5,
      text: "No experience, no portfolio, no clients — but Nexian matched me with a real logo task. Completed it, got verified, and hit my earning goal!",
      earning: "Potential ₹1000+",
      color: "hsl(174 72% 56%)",
    },
    {
      name: "User C",
      role: "Early Tester Feedback",
      avatar: "C",
      rating: 5,
      text: "Tried Fiverr and Upwork, got zero clients. Then found Nexian — within a week I had my first paid writing task. Super beginner-friendly platform.",
      earning: "Potential ₹1000+",
      color: "hsl(280 90% 65%)",
    },
    {
      name: "User D",
      role: "Early Tester Feedback",
      avatar: "D",
      rating: 5,
      text: "The skill test was so easy and the tasks were actually doable for someone starting out. Completed tasks in my first week. Now I do this full-time!",
      earning: "Potential ₹1000+",
      color: "hsl(45 90% 60%)",
    },
    {
      name: "User E",
      role: "Early Tester Feedback",
      avatar: "E",
      rating: 5,
      text: "I was skeptical at first but the free tasks convinced me. Real work, real payment, real results. My confidence as a beginner skyrocketed.",
      earning: "Potential ₹1000+",
      color: "hsl(174 72% 56%)",
    },
    {
      name: "User F",
      role: "Early Tester Feedback",
      avatar: "F",
      rating: 5,
      text: "Had Adobe Premiere skills but no way to use them. Nexian helped me land my first video editing task and build a verified portfolio. Amazing!",
      earning: "Potential ₹1000+",
      color: "hsl(262 83% 58%)",
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      <div className="orb w-[400px] h-[400px] left-1/2 -translate-x-1/2 top-0" style={{ background: "hsl(262 83% 58%)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-medium mb-4">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-muted-foreground">Real Students, Real Results</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Students Who{" "}
            <span className="gradient-text">Made It Happen</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Don't take our word for it — hear from students who earned their first ₹1000 using Nexian.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="section-card flex flex-col gap-4 relative overflow-hidden">
              {/* Quote icon */}
              <Quote className="w-8 h-8 absolute top-4 right-4 opacity-10" style={{ color: t.color }} />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.text}"</p>

              {/* Earning badge */}
              <div className="inline-flex w-fit px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: `${t.color}15`, color: t.color, border: `1px solid ${t.color}30` }}>
                {t.earning}
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "hsl(var(--border))" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: t.color }}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
