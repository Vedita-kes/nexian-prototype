import { useState } from "react";
import { X, CheckCircle, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CTAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  reason: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  reason?: string;
}

const DEFAULT_REASON =
  "I want to start earning using my skills, gain real experience, and build confidence by working on real opportunities.";

export default function CTAModal({ isOpen, onClose }: CTAModalProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    reason: DEFAULT_REASON,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name (at least 2 characters)";
    }
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.reason.trim() || formData.reason.trim().length < 10) {
      newErrors.reason = "Please tell us why you want to start earning";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    if (!validate()) return;
    setLoading(true);
    try {
      const response = await fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZmMDYzMjA0MzM1MjZlNTUzNTUxMzAi_pc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Optionally, you can log the response from the webhook
      const result = await response.json();
      console.log("Webhook response:", result);
    } catch (error) {
      console.error("Error sending form data to webhook:", error);
      // You might want to show an error message to the user here
    } finally {
      setLoading(false);
    }

    // ALWAYS redirect (important)
    onClose();
    navigate('/choose-skill');
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", reason: DEFAULT_REASON });
      setErrors({});
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "hsl(240 20% 4% / 0.85)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div
        className="glass w-full max-w-md rounded-2xl relative animate-slide-in-down overflow-hidden"
        style={{ border: "1px solid hsl(262 83% 58% / 0.3)", maxHeight: "90vh", overflowY: "auto" }}
      >
        {/* Top gradient bar */}
        <div className="h-1 w-full" style={{ background: "var(--gradient-primary)" }} />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          style={{ background: "hsl(var(--secondary))" }}
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8">
          {submitted ? (
            /* Success State */
            <div className="text-center py-8 animate-fade-in-up">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "hsl(174 72% 56% / 0.15)", border: "1px solid hsl(174 72% 56% / 0.3)" }}>
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">You're In! 🎉</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You're one step closer to your first ₹1000 🎉<br />
                We'll reach out within 24 hours with your skill test link.
              </p>
              <button onClick={handleClose} className="btn-primary w-full py-3">
                Awesome, Let's Go!
              </button>
            </div>
          ) : (
            /* Form State */
            <>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-3"
                  style={{ background: "hsl(262 83% 58% / 0.15)", color: "hsl(var(--primary))", border: "1px solid hsl(262 83% 58% / 0.25)" }}>
                  🚀 Free Skill Test — Limited Spots
                </div>
                <h2 className="font-display text-2xl font-bold mb-1">Start Your Earning Journey</h2>
                <p className="text-muted-foreground text-sm">Takes less than 2 minutes · No card required</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="e.g. Arjun Sharma"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                    style={{
                      background: "hsl(var(--secondary))",
                      border: errors.name ? "1px solid hsl(var(--destructive))" : "1px solid hsl(var(--border))",
                      color: "hsl(var(--foreground))",
                    }}
                    onFocus={(e) => {
                      if (!errors.name) {
                        e.target.style.border = "1px solid hsl(262 83% 58% / 0.6)";
                        e.target.style.boxShadow = "0 0 0 3px hsl(262 83% 58% / 0.1)";
                      }
                    }}
                    onBlur={(e) => {
                      e.target.style.border = errors.name ? "1px solid hsl(var(--destructive))" : "1px solid hsl(var(--border))";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Phone Number <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                    placeholder="10-digit mobile number"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                    style={{
                      background: "hsl(var(--secondary))",
                      border: errors.phone ? "1px solid hsl(var(--destructive))" : "1px solid hsl(var(--border))",
                      color: "hsl(var(--foreground))",
                    }}
                    onFocus={(e) => {
                      if (!errors.phone) {
                        e.target.style.border = "1px solid hsl(262 83% 58% / 0.6)";
                        e.target.style.boxShadow = "0 0 0 3px hsl(262 83% 58% / 0.1)";
                      }
                    }}
                    onBlur={(e) => {
                      e.target.style.border = errors.phone ? "1px solid hsl(var(--destructive))" : "1px solid hsl(var(--border))";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                    style={{
                      background: "hsl(var(--secondary))",
                      border: errors.email ? "1px solid hsl(var(--destructive))" : "1px solid hsl(var(--border))",
                      color: "hsl(var(--foreground))",
                    }}
                    onFocus={(e) => {
                      if (!errors.email) {
                        e.target.style.border = "1px solid hsl(262 83% 58% / 0.6)";
                        e.target.style.boxShadow = "0 0 0 3px hsl(262 83% 58% / 0.1)";
                      }
                    }}
                    onBlur={(e) => {
                      e.target.style.border = errors.email ? "1px solid hsl(var(--destructive))" : "1px solid hsl(var(--border))";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>

                {/* Reason */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Why do you want to start earning? <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    value={formData.reason}
                    onChange={(e) => handleChange("reason", e.target.value)}
                    rows={3}
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 resize-none"
                    style={{
                      background: "hsl(var(--secondary))",
                      border: errors.reason ? "1px solid hsl(var(--destructive))" : "1px solid hsl(var(--border))",
                      color: "hsl(var(--foreground))",
                    }}
                    onFocus={(e) => {
                      if (!errors.reason) {
                        e.target.style.border = "1px solid hsl(262 83% 58% / 0.6)";
                        e.target.style.boxShadow = "0 0 0 3px hsl(262 83% 58% / 0.1)";
                      }
                    }}
                    onBlur={(e) => {
                      e.target.style.border = errors.reason ? "1px solid hsl(var(--destructive))" : "1px solid hsl(var(--border))";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  {errors.reason && <p className="text-xs text-destructive mt-1">{errors.reason}</p>}
                  <p className="text-xs text-muted-foreground mt-1">Feel free to edit this to your own words</p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-4 text-base flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Registering your spot...
                    </>
                  ) : (
                    "🎯 Claim My Free Skill Test"
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  🔒 Your data is secure and will never be shared
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
