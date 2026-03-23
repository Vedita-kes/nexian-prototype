import { Mail, Link, Settings } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t" style={{ borderColor: "hsl(var(--border))" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4 col-span-1">
            <a href="#" className="flex items-center gap-2 h-7">
              <img src="/logo.png.png" alt="Logo" className="max-h-full max-w-full object-contain" />
            </a>
            <p className="text-xs text-muted-foreground text-center md:text-left">
              © 2024 Nexian. Empowering students to earn their first ₹1000.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 text-center md:text-left">
            <h4 className="text-sm font-semibold mb-3 flex items-center justify-center md:justify-start gap-2"><Link className="w-4 h-4" />Quick Links</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 text-center md:text-left">
            <h4 className="text-sm font-semibold mb-3 flex items-center justify-center md:justify-start gap-2"><Settings className="w-4 h-4" />Services</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">AI skill assessment</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Learning path recommendation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Career guidance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 text-center md:text-left">
            <h4 className="text-sm font-semibold mb-3 flex items-center justify-center md:justify-start gap-2"><Mail className="w-4 h-4" />Contact</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><a href="mailto:nexian@example.com" className="hover:text-foreground transition-colors">nexian@example.com</a></li>
              <li>Bhopal, India</li>
              <li>+91 987654XXXX</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
