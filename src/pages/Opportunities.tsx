import React, { useState } from 'react';
import { Copy, MessageCircle } from 'lucide-react';

export default function Opportunities() {
  const selectedSkill = localStorage.getItem("selectedSkill") || "your skill";
  const level = localStorage.getItem("level") || "Beginner Level 📚";
  const [city, setCity] = useState("");

  // State for College Opportunities card
  const [collegeMessage, setCollegeMessage] = useState("Hi, I’m a student looking to build my portfolio. I can help you with [Skill, e.g., a simple website, social media graphics, content writing] at a very affordable student rate. Are you open to a quick chat?");
  const [collegePortfolio, setCollegePortfolio] = useState("");
  const [collegeFiles, setCollegeFiles] = useState<string[]>([]);
  const [collegePrice, setCollegePrice] = useState("₹50 (Beginner)");
  const [copyFeedback, setCopyFeedback] = useState<{ [key: string]: string }>({});
  const [whatsappFeedback, setWhatsappFeedback] = useState<{ [key: string]: string }>({});

  // State for Local Shops & Vendors card
  const [localShopMessage, setLocalShopMessage] = useState("Hello, I can help your business grow by creating a simple website or improving your online presence. I’m offering this at a low cost as I’m starting out. Would you be interested?");
  const [localShopPortfolio, setLocalShopPortfolio] = useState("");
  const [localShopFiles, setLocalShopFiles] = useState<string[]>([]);
  const [localShopPrice, setLocalShopPrice] = useState("₹500 (Beginner)");

  // State for Instagram Outreach card
  const [instagramMessage, setInstagramMessage] = useState("Hi, I can help improve your Instagram page with better design and content. I’m working with small creators at beginner pricing. Would you like to collaborate?");
  const [instagramPortfolio, setInstagramPortfolio] = useState("");
  const [instagramFiles, setInstagramFiles] = useState<string[]>([]);
  const [instagramPrice, setInstagramPrice] = useState("₹100 (Beginner)");

  const handleCopy = (text: string, cardId: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyFeedback(prev => ({ ...prev, [cardId]: "Copied!" }));
      setTimeout(() => setCopyFeedback(prev => ({ ...prev, [cardId]: "" })), 2000);
    }).catch(err => {
      console.error("Failed to copy text: ", err);
      setCopyFeedback(prev => ({ ...prev, [cardId]: "Failed to copy." }));
      setTimeout(() => setCopyFeedback(prev => ({ ...prev, [cardId]: "" })), 2000);
    });
  };

  const handleWhatsApp = (message: string, cardId: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
    setWhatsappFeedback(prev => ({ ...prev, [cardId]: "Opened WhatsApp!" }));
    setTimeout(() => setWhatsappFeedback(prev => ({ ...prev, [cardId]: "" })), 2000);
  };

  const renderLevelContent = () => {
    if (level?.includes("Beginner")) {
      return (
        <>
          <div className="bg-card p-6 rounded-lg border border-border mb-8 animate-fade-in-up">
            <h3 className="font-display text-xl font-bold mb-4 text-primary">Steps to Get Started</h3>
            <ul className="list-disc list-inside text-left space-y-2 text-muted-foreground">
              <li>Create a simple website for a local shop</li>
              <li>Design a poster for college events</li>
              <li>Help classmates with assignments</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border mb-8 animate-fade-in-up delay-100">
            <h3 className="font-display text-xl font-bold mb-4 text-primary">Where to Find Work</h3>
            <ul className="list-disc list-inside text-left space-y-2 text-muted-foreground">
              <li>College WhatsApp groups</li>
              <li>Local shops (visit nearby stores)</li>
              <li>Friends & relatives</li>
              <li>Instagram DMs</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border mb-8 animate-fade-in-up delay-200">
            <h3 className="font-display text-xl font-bold mb-4 text-primary">Expected Earning</h3>
            <p className="text-lg font-semibold text-green-500">₹50 - ₹500 per task</p>
          </div>
        </>
      );
    } else if (level?.includes("Intermediate")) {
      return (
        <>
          <div className="bg-card p-6 rounded-lg border border-border mb-8 animate-fade-in-up">
            <h3 className="font-display text-xl font-bold mb-4 text-primary">Steps to Start Freelancing</h3>
            <ul className="list-disc list-inside text-left space-y-2 text-muted-foreground">
              <li>Build websites for small vendors</li>
              <li>Create social media posts for shops</li>
              <li>Do basic editing / content writing</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border mb-8 animate-fade-in-up delay-100">
            <h3 className="font-display text-xl font-bold mb-4 text-primary">Where to Find Clients</h3>
            <ul className="list-disc list-inside text-left space-y-2 text-muted-foreground">
              <li>Local businesses (cafes, gyms, coaching centers)</li>
              <li>Instagram pages of small brands</li>
              <li>LinkedIn connections</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border mb-8 animate-fade-in-up delay-200">
            <h3 className="font-display text-xl font-bold mb-4 text-primary">Expected Earning</h3>
            <p className="text-lg font-semibold text-green-500">₹500 - ₹3000 per project</p>
          </div>
        </>
      );
    } else if (level?.includes("Advanced")) {
      return (
        <>
          <div className="bg-card p-6 rounded-lg border border-border mb-8 animate-fade-in-up">
            <h3 className="font-display text-xl font-bold mb-4 text-primary">Steps for Real Work & Growth</h3>
            <ul className="list-disc list-inside text-left space-y-2 text-muted-foreground">
              <li>Take client projects</li>
              <li>Work with startups</li>
              <li>Offer monthly services</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border mb-8 animate-fade-in-up delay-100">
            <h3 className="font-display text-xl font-bold mb-4 text-primary">Where to Grow</h3>
            <ul className="list-disc list-inside text-left space-y-2 text-muted-foreground">
              <li>LinkedIn</li>
              <li>Startup communities</li>
              <li>Referrals</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border mb-8 animate-fade-in-up delay-200">
            <h3 className="font-display text-xl font-bold mb-4 text-primary">Expected Earning</h3>
            <p className="text-lg font-semibold text-green-500">₹3000+</p>
          </div>
        </>
      );
    }
    return null; // Fallback if level is not recognized
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background text-foreground">
      <div className="w-full max-w-3xl text-center p-6 sm:p-8 rounded-2xl glass border border-border">
        <h1 className="font-display text-2xl sm:text-3xl font-bold mb-4">
          Start Earning with <span className="text-primary">{selectedSkill}</span>
        </h1>
        <p className="text-muted-foreground text-sm mb-8">
          Your journey to earning your first ₹1000 starts here!
        </p>

        {renderLevelContent()}

        {/* Special Section: Your First ₹1000 Plan */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg shadow-lg mb-8 animate-fade-in-up delay-300">
          <h3 className="font-display text-2xl font-bold mb-4">Your First ₹1000 Plan 💰</h3>
          <ul className="list-decimal list-inside text-left space-y-2 text-lg">
            <li>Pick 1 skill</li>
            <li>Do 2 small tasks (₹100 each)</li>
            <li>Approach 5 people locally</li>
            <li>Deliver fast and ask for referrals</li>
          </ul>
        </div>

        {/* New Section: Find Real Work Near You */}
        <div className="mt-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8">Find Real Work Near You 📍</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card 1: College Opportunities */}
            <div className="bg-card p-5 rounded-lg border border-border flex flex-col justify-between h-full relative">
              <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                Earn ₹50 - ₹500 per task
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-3 text-primary mt-8">College Opportunities</h3>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  <span className="text-xs bg-green-500/20 text-green-600 px-2 py-1 rounded-full">✔ Beginner Friendly</span>
                  <span className="text-xs bg-blue-500/20 text-blue-600 px-2 py-1 rounded-full">✔ Quick Work</span>
                  <span className="text-xs bg-purple-500/20 text-purple-600 px-2 py-1 rounded-full">✔ Low Cost</span>
                </div>
                <ul className="list-disc list-inside text-left space-y-2 text-muted-foreground text-sm mb-4">
                  <li>Ask seniors for project work</li>
                  <li>Look for event organizers</li>
                  <li>Check college WhatsApp groups</li>
                </ul>
              </div>
              <div className="mt-4 space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  💬 Message Template:
                </p>
                <textarea
                  className="w-full p-2 rounded-md bg-secondary border border-border text-foreground text-sm"
                  rows={4}
                  value={collegeMessage}
                  onChange={(e) => setCollegeMessage(e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-1">Edit this message before sending</p>

                <input
                  type="text"
                  placeholder="Paste your portfolio link (optional)"
                  className="w-full p-2 rounded-md bg-secondary border border-border text-foreground text-sm mt-3"
                  value={collegePortfolio}
                  onChange={(e) => setCollegePortfolio(e.target.value)}
                />

                <label className="block text-sm font-medium text-muted-foreground mt-3">Upload Work Samples (UI Only)</label>
                <input
                  type="file"
                  multiple
                  className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/20 file:text-primary hover:file:bg-primary/30"
                  onChange={(e) => setCollegeFiles(e.target.files ? Array.from(e.target.files).map(f => f.name) : [])}
                />
                {collegeFiles.length > 0 && (
                  <p className="text-xs text-muted-foreground mt-1">Selected: {collegeFiles.join(', ')}</p>
                )}

                <select
                  className="w-full p-2 rounded-md bg-secondary border border-border text-foreground text-sm mt-3"
                  value={collegePrice}
                  onChange={(e) => setCollegePrice(e.target.value)}
                >
                  <option>₹50 (Beginner)</option>
                  <option>₹100</option>
                  <option>₹200</option>
                  <option>₹300</option>
                  <option>₹400</option>
                  <option>₹500</option>
                </select>

                <div className="flex gap-2 flex-wrap mt-4">
                  <button
                    onClick={() => handleCopy(`${collegeMessage}${collegePortfolio ? `\nHere is my portfolio: ${collegePortfolio}` : ''}${collegePrice ? `\nMy price: ${collegePrice}` : ''}`)}
                    className="btn-secondary py-2 px-3 text-sm flex items-center gap-1"
                  >
                    <Copy className="w-4 h-4" /> Copy
                  </button>
                  <button
                    onClick={() => handleWhatsApp(`${collegeMessage}${collegePortfolio ? `\nHere is my portfolio: ${collegePortfolio}` : ''}${collegePrice ? `\nMy price: ${collegePrice}` : ''}`)}
                    className="btn-secondary py-2 px-3 text-sm flex items-center gap-1"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </button>
                </div>
                {copyFeedback.college && <p className="text-xs text-green-500 mt-1">{copyFeedback.college}</p>}
                {whatsappFeedback.college && <p className="text-xs text-blue-500 mt-1">{whatsappFeedback.college}</p>}
              </div>
            </div>

            {/* Card 2: Local Shops & Vendors */}
            <div className="bg-card p-5 rounded-lg border border-border flex flex-col justify-between h-full relative">
              <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                Earn ₹500 - ₹3000 per project
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-3 text-primary mt-8">Local Shops & Vendors</h3>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  <span className="text-xs bg-green-500/20 text-green-600 px-2 py-1 rounded-full">✔ Intermediate Friendly</span>
                  <span className="text-xs bg-blue-500/20 text-blue-600 px-2 py-1 rounded-full">✔ Local Clients</span>
                  <span className="text-xs bg-purple-500/20 text-purple-600 px-2 py-1 rounded-full">✔ Higher Earning</span>
                </div>
                <ul className="list-disc list-inside text-left space-y-2 text-muted-foreground text-sm mb-4">
                  <li>Visit nearby shops</li>
                  <li>Offer website or poster services</li>
                  <li>Talk directly</li>
                </ul>
              </div>
              <div className="mt-4 space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  💬 Message Template:
                </p>
                <textarea
                  className="w-full p-2 rounded-md bg-secondary border border-border text-foreground text-sm"
                  rows={4}
                  value={localShopMessage}
                  onChange={(e) => setLocalShopMessage(e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-1">Edit this message before sending</p>

                <input
                  type="text"
                  placeholder="Paste your portfolio link (optional)"
                  className="w-full p-2 rounded-md bg-secondary border border-border text-foreground text-sm mt-3"
                  value={localShopPortfolio}
                  onChange={(e) => setLocalShopPortfolio(e.target.value)}
                />

                <label className="block text-sm font-medium text-muted-foreground mt-3">Upload Work Samples (UI Only)</label>
                <input
                  type="file"
                  multiple
                  className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/20 file:text-primary hover:file:bg-primary/30"
                  onChange={(e) => setLocalShopFiles(e.target.files ? Array.from(e.target.files).map(f => f.name) : [])}
                />
                {localShopFiles.length > 0 && (
                  <p className="text-xs text-muted-foreground mt-1">Selected: {localShopFiles.join(', ')}</p>
                )}

                <select
                  className="w-full p-2 rounded-md bg-secondary border border-border text-foreground text-sm mt-3"
                  value={localShopPrice}
                  onChange={(e) => setLocalShopPrice(e.target.value)}
                >
                  <option>₹500 (Beginner)</option>
                  <option>₹1000</option>
                  <option>₹2000</option>
                  <option>₹3000</option>
                </select>

                <div className="flex gap-2 flex-wrap mt-4">
                  <button
                    onClick={() => handleCopy(`${localShopMessage}${localShopPortfolio ? `\nHere is my portfolio: ${localShopPortfolio}` : ''}${localShopPrice ? `\nMy price: ${localShopPrice}` : ''}`, 'localShop')}
                    className="btn-secondary py-2 px-3 text-sm flex items-center gap-1"
                  >
                    <Copy className="w-4 h-4" /> Copy
                  </button>
                  <button
                    onClick={() => handleWhatsApp(`${localShopMessage}${localShopPortfolio ? `\nHere is my portfolio: ${localShopPortfolio}` : ''}${localShopPrice ? `\nMy price: ${localShopPrice}` : ''}`, 'localShop')}
                    className="btn-secondary py-2 px-3 text-sm flex items-center gap-1"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </button>
                </div>
                {copyFeedback.localShop && <p className="text-xs text-green-500 mt-1">{copyFeedback.localShop}</p>}
                {whatsappFeedback.localShop && <p className="text-xs text-blue-500 mt-1">{whatsappFeedback.localShop}</p>}
              </div>
            </div>

            {/* Card 3: Instagram Outreach */}
            <div className="bg-card p-5 rounded-lg border border-border flex flex-col justify-between h-full relative">
              <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                Earn ₹100 - ₹1000 per project
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-3 text-primary mt-8">Instagram Outreach</h3>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  <span className="text-xs bg-green-500/20 text-green-600 px-2 py-1 rounded-full">✔ Beginner Friendly</span>
                  <span className="text-xs bg-blue-500/20 text-blue-600 px-2 py-1 rounded-full">✔ Remote Work</span>
                  <span className="text-xs bg-purple-500/20 text-purple-600 px-2 py-1 rounded-full">✔ Flexible Hours</span>
                </div>
                <ul className="list-disc list-inside text-left space-y-2 text-muted-foreground text-sm mb-4">
                  <li>Search small local pages</li>
                  <li>DM them</li>
                </ul>
              </div>
              <div className="mt-4 space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  💬 Message Template:
                </p>
                <textarea
                  className="w-full p-2 rounded-md bg-secondary border border-border text-foreground text-sm"
                  rows={4}
                  value={instagramMessage}
                  onChange={(e) => setInstagramMessage(e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-1">Edit this message before sending</p>

                <input
                  type="text"
                  placeholder="Paste your portfolio link (optional)"
                  className="w-full p-2 rounded-md bg-secondary border border-border text-foreground text-sm mt-3"
                  value={instagramPortfolio}
                  onChange={(e) => setInstagramPortfolio(e.target.value)}
                />

                <label className="block text-sm font-medium text-muted-foreground mt-3">Upload Work Samples (UI Only)</label>
                <input
                  type="file"
                  multiple
                  className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/20 file:text-primary hover:file:bg-primary/30"
                  onChange={(e) => setInstagramFiles(e.target.files ? Array.from(e.target.files).map(f => f.name) : [])}
                />
                {instagramFiles.length > 0 && (
                  <p className="text-xs text-muted-foreground mt-1">Selected: {instagramFiles.join(', ')}</p>
                )}

                <select
                  className="w-full p-2 rounded-md bg-secondary border border-border text-foreground text-sm mt-3"
                  value={instagramPrice}
                  onChange={(e) => setInstagramPrice(e.target.value)}
                >
                  <option>₹100 (Beginner)</option>
                  <option>₹250</option>
                  <option>₹500</option>
                  <option>₹1000</option>
                </select>

                <div className="flex gap-2 flex-wrap mt-4">
                  <button
                    onClick={() => handleCopy(`${instagramMessage}${instagramPortfolio ? `\nHere is my portfolio: ${instagramPortfolio}` : ''}${instagramPrice ? `\nMy price: ${instagramPrice}` : ''}`, 'instagram')}
                    className="btn-secondary py-2 px-3 text-sm flex items-center gap-1"
                  >
                    <Copy className="w-4 h-4" /> Copy
                  </button>
                  <button
                    onClick={() => handleWhatsApp(`${instagramMessage}${instagramPortfolio ? `\nHere is my portfolio: ${instagramPortfolio}` : ''}${instagramPrice ? `\nMy price: ${instagramPrice}` : ''}`, 'instagram')}
                    className="btn-secondary py-2 px-3 text-sm flex items-center gap-1"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </button>
                </div>
                {copyFeedback.instagram && <p className="text-xs text-green-500 mt-1">{copyFeedback.instagram}</p>}
                {whatsappFeedback.instagram && <p className="text-xs text-blue-500 mt-1">{whatsappFeedback.instagram}</p>}
              </div>
            </div>
          </div>

          {/* Optional City Input */}
          <div className="mt-8 p-6 bg-card rounded-lg border border-border">
            <h3 className="font-display text-xl font-bold mb-4 text-primary">Search Locally</h3>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter your city (e.g., Mumbai)"
              className="w-full max-w-sm rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 mb-4"
              style={{
                background: "hsl(var(--secondary))",
                border: "1px solid hsl(var(--border))",
                color: "hsl(var(--foreground))",
              }}
            />
            {city && (
              <p className="text-muted-foreground text-sm">
                Search on Google / Maps:{" "}
                <a
                  href={`https://www.google.com/maps/search/small+businesses+in+${city}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  'small businesses in {city}'
                </a>
              </p>
            )}
          </div>
        </div>

        <button className="btn-primary py-3 px-8 text-base mt-12">
          Start Exploring
        </button>
      </div>
    </div>
  );
}
