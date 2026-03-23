import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChooseSkill() {
  const [customSkill, setCustomSkill] = useState("");
  const navigate = useNavigate();

  const suggestedSkills = ["Web Development", "Design", "Content Writing", "AI Basics"];

  const handleSkillSelection = (skill: string) => {
    localStorage.setItem("selectedSkill", skill);
    navigate("/skill-test");
  };

  const handleCustomSkillSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customSkill.trim()) {
      handleSkillSelection(customSkill.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background text-foreground">
      <div className="w-full max-w-md text-center">
        <h1 className="font-display text-3xl font-bold mb-8">Choose Your Skill to Get Started</h1>

        {/* Suggested Skills */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {suggestedSkills.map((skill) => (
            <button
              key={skill}
              onClick={() => handleSkillSelection(skill)}
              className="btn-secondary py-3 px-4 text-sm rounded-xl border border-border hover:border-primary transition-colors duration-200"
            >
              {skill}
            </button>
          ))}
        </div>

        {/* Custom Skill Input */}
        <form onSubmit={handleCustomSkillSubmit} className="space-y-4">
          <input
            type="text"
            value={customSkill}
            onChange={(e) => setCustomSkill(e.target.value)}
            placeholder="Or type your skill here (e.g., Video Editing)"
            className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
            style={{
              background: "hsl(var(--secondary))",
              border: "1px solid hsl(var(--border))",
              color: "hsl(var(--foreground))",
            }}
          />
          <button
            type="submit"
            className="btn-primary w-full py-3 text-base"
          >
            Proceed with My Skill
          </button>
        </form>
      </div>
    </div>
  );
}
