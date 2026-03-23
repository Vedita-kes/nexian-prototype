import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SkillTest() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [testResult, setTestResult] = useState({ level: "", message: "", recommendation: "" }); // State to hold the final result
  const navigate = useNavigate();

  const selectedSkillRaw = localStorage.getItem("selectedSkill") || "General Skill";
  const selectedSkill = selectedSkillRaw.toLowerCase();

  const questionsData = {
    web: [
      {
        question: "What is HTML?",
        options: [
          "A programming language",
          "A markup language for creating web pages",
          "A styling language for web pages",
          "A database language",
        ],
        correctAnswer: "A markup language for creating web pages",
      },
      {
        question: "What is CSS used for?",
        options: [
          "To define the structure of a web page",
          "To add interactivity to a web page",
          "To style the appearance of a web page",
          "To manage server-side logic",
        ],
        correctAnswer: "To style the appearance of a web page",
      },
      {
        question: "What is JavaScript?",
        options: [
          "A server-side scripting language",
          "A database query language",
          "A client-side scripting language for web interactivity",
          "A markup language for web applications",
        ],
        correctAnswer: "A client-side scripting language for web interactivity",
      },
      {
        question: "What is a browser?",
        options: [
          "A type of server",
          "Software for accessing and viewing web pages",
          "A programming tool",
          "A database management system",
        ],
        correctAnswer: "Software for accessing and viewing web pages",
      },
      {
        question: "What is responsive design?",
        options: [
          "Designing websites that respond to user input",
          "Designing websites that adapt to different screen sizes and devices",
          "Designing websites with fast loading times",
          "Designing websites with interactive animations",
        ],
        correctAnswer: "Designing websites that adapt to different screen sizes and devices",
      },
    ],
    design: [
      {
        question: "What is color contrast?",
        options: [
          "The difference in brightness between two colors",
          "The similarity in hue between two colors",
          "The saturation level of a color",
          "The transparency of a color",
        ],
        correctAnswer: "The difference in brightness between two colors",
      },
      {
        question: "Which tool is commonly used for UI design?",
        options: [
          "Microsoft Word",
          "Adobe Photoshop",
          "Figma",
          "Google Sheets",
        ],
        correctAnswer: "Figma",
      },
      {
        question: "What is typography?",
        options: [
          "The art of drawing illustrations",
          "The art and technique of arranging type to make written language legible, readable, and appealing",
          "The process of creating 3D models",
          "The study of color theory",
        ],
        correctAnswer: "The art and technique of arranging type to make written language legible, readable, and appealing",
      },
      {
        question: "What is UX?",
        options: [
          "User Xylophone",
          "Unified X-ray",
          "User Experience",
          "Utility Exchange",
        ],
        correctAnswer: "User Experience",
      },
      {
        question: "What is layout?",
        options: [
          "The arrangement of visual elements on a page",
          "The color scheme of a design",
          "The font used in a design",
          "The images used in a design",
        ],
        correctAnswer: "The arrangement of visual elements on a page",
      },
    ],
    content: [
      {
        question: "What is SEO?",
        options: [
          "Search Engine Optimization",
          "Social Engagement Optimization",
          "Site Experience Optimization",
          "Systematic E-commerce Operations",
        ],
        correctAnswer: "Search Engine Optimization",
      },
      {
        question: "What is a blog?",
        options: [
          "A type of social media platform",
          "An online discussion forum",
          "A regularly updated website or web page, typically one run by an individual or small group, that is written in an informal or conversational style",
          "A digital marketing campaign",
        ],
        correctAnswer: "A regularly updated website or web page, typically one run by an individual or small group, that is written in an informal or conversational style",
      },
      {
        question: "What is copywriting?",
        options: [
          "The legal protection of intellectual property",
          "The act or occupation of writing text for the purpose of advertising or other forms of marketing",
          "The process of editing written content",
          "The creation of visual content for marketing",
        ],
        correctAnswer: "The act or occupation of writing text for the purpose of advertising or other forms of marketing",
      },
      {
        question: "What is keyword research?",
        options: [
          "Finding popular search terms for content optimization",
          "Researching keywords for programming languages",
          "Analyzing keywords in legal documents",
          "Studying keywords in scientific papers",
        ],
        correctAnswer: "Finding popular search terms for content optimization",
      },
      {
        question: "What is editing?",
        options: [
          "The process of writing new content",
          "The process of reviewing and revising written content to improve its quality",
          "The process of publishing content online",
          "The process of translating content into different languages",
        ],
        correctAnswer: "The process of reviewing and revising written content to improve its quality",
      },
    ],
    ai: [
      {
        question: "What is AI?",
        options: [
          "Artificial Intelligence",
          "Automated Information",
          "Advanced Integration",
          "Algorithmic Innovation",
        ],
        correctAnswer: "Artificial Intelligence",
      },
      {
        question: "What is machine learning?",
        options: [
          "A subset of AI that enables systems to learn from data without being explicitly programmed",
          "A type of computer hardware",
          "A method for designing user interfaces",
          "A process for managing large databases",
        ],
        correctAnswer: "A subset of AI that enables systems to learn from data without being explicitly programmed",
      },
      {
        question: "What is a dataset?",
        options: [
          "A collection of computer programs",
          "A collection of related sets of information that is composed of separate elements but can be manipulated as a unit by a computer",
          "A type of network protocol",
          "A software development methodology",
        ],
        correctAnswer: "A collection of related sets of information that is composed of separate elements but can be manipulated as a unit by a computer",
      },
      {
        question: "What is training data?",
        options: [
          "Data used to train athletes",
          "Data used to train machine learning models",
          "Data used to train animals",
          "Data used to train employees",
        ],
        correctAnswer: "Data used to train machine learning models",
      },
      {
        question: "What is model accuracy?",
        options: [
          "The physical size of a model",
          "How well a machine learning model predicts the correct outcome",
          "The speed of a model",
          "The cost of a model",
        ],
        correctAnswer: "How well a machine learning model predicts the correct outcome",
      },
    ],
    general: [
      {
        question: "What is your experience level?",
        options: [
          "Beginner",
          "Intermediate",
          "Advanced",
          "Expert",
        ],
        correctAnswer: "Not applicable",
      },
      {
        question: "Have you worked on projects?",
        options: [
          "Yes, many",
          "Yes, a few",
          "No, but I'm eager to start",
          "Not applicable",
        ],
        correctAnswer: "Not applicable",
      },
      {
        question: "Are you comfortable with tools?",
        options: [
          "Very comfortable",
          "Somewhat comfortable",
          "Need some guidance",
          "Not comfortable",
        ],
        correctAnswer: "Not applicable",
      },
      {
        question: "How often do you practice?",
        options: [
          "Daily",
          "Weekly",
          "Monthly",
          "Rarely",
        ],
        correctAnswer: "Not applicable",
      },
      {
        question: "Are you ready to learn more?",
        options: [
          "Absolutely!",
          "Maybe",
          "Not really",
          "I already know enough",
        ],
        correctAnswer: "Not applicable",
      },
    ],
  };

  let currentQuestions = questionsData.general;
  let skillDisplayName = selectedSkillRaw; // Use raw for display, lowercase for logic

  if (selectedSkill.includes("web")) {
    currentQuestions = questionsData.web;
    skillDisplayName = "Web Development";
  } else if (selectedSkill.includes("design")) {
    currentQuestions = questionsData.design;
    skillDisplayName = "Design";
  } else if (selectedSkill.includes("content")) {
    currentQuestions = questionsData.content;
    skillDisplayName = "Content Writing";
  } else if (selectedSkill.includes("ai")) {
    currentQuestions = questionsData.ai;
    skillDisplayName = "AI Basics";
  } else {
    // Capitalize the first letter of the custom skill for display
    skillDisplayName = selectedSkillRaw.charAt(0).toUpperCase() + selectedSkillRaw.slice(1);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleOptionChange = (questionIndex: number, option: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const handleSubmitTest = (e: React.FormEvent) => {
    e.preventDefault();
    let correctAnswersCount = 0;

    if (selectedSkill.includes("web") || selectedSkill.includes("design") || selectedSkill.includes("content") || selectedSkill.includes("ai")) {
      currentQuestions.forEach((q, index) => {
        if (selectedAnswers[index] === q.correctAnswer) {
          correctAnswersCount++;
        }
      });
    }
    
    setScore(correctAnswersCount);
    setIsSubmitted(true);

    let level = "";
    let message = "";
    let recommendation = "";

    if (selectedSkill.includes("web") || selectedSkill.includes("design") || selectedSkill.includes("content") || selectedSkill.includes("ai")) {
      if (correctAnswersCount <= 2) {
        level = "Beginner Level 📚";
        message = "You're just getting started. Keep practicing!";
        recommendation = "Recommended: Start with basics and practice daily";
      } else if (correctAnswersCount >= 3 && correctAnswersCount <= 4) {
        level = "Intermediate Level 👍";
        message = "Good progress! You're improving steadily.";
        recommendation = "Recommended: Work on small projects and improve skills";
      } else if (correctAnswersCount === 5) {
        level = "Advanced Level 🚀";
        message = "Excellent! You're job-ready in this skill.";
        recommendation = "Recommended: Start freelancing or apply for real projects";
      }
    } else {
      level = "Skill Assessment Completed!";
      message = "Thank you for completing the assessment. We'll review your custom skill details.";
      recommendation = "Recommended: Continue exploring and learning new aspects of your chosen skill.";
    }

    // Update the testResult state with the calculated level and message
    setTestResult({ score: correctAnswersCount, level, message, recommendation });
    localStorage.setItem("level", level);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background text-foreground">
      <div className="w-full max-w-2xl text-center p-6 sm:p-8 rounded-2xl glass border border-border">
        {isLoading ? (
          // Loading Screen
          <div className="animate-fade-in-up">
            <h1 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              Preparing your test for: <span className="text-primary">{skillDisplayName}</span>
            </h1>
            <p className="text-muted-foreground text-lg">Please wait a moment...</p>
          </div>
        ) : isSubmitted ? (
          // Result Screen
          <div className="animate-fade-in-up">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">Test Completed Successfully! 🎉</h2>
            {selectedSkill.includes("web") || selectedSkill.includes("design") || selectedSkill.includes("content") || selectedSkill.includes("ai") ? (
              <>
                <p className="text-lg text-muted-foreground mb-2">Skill: {skillDisplayName}</p>
                <p className="text-lg text-muted-foreground mb-2">Your Score: {testResult.score}/5</p>
                <p className="text-lg text-muted-foreground mb-4">{testResult.message}</p>
                <h3 className="font-display text-xl font-bold text-primary mb-2">{testResult.level}</h3>
                <p className="text-sm text-muted-foreground">{testResult.recommendation}</p>
              </>
            ) : (
              <>
                <p className="text-lg text-muted-foreground mb-2">Skill: {skillDisplayName}</p>
                <p className="text-lg text-muted-foreground mb-4">{testResult.message}</p>
                <h3 className="font-display text-xl font-bold text-primary">{testResult.level}</h3>
              </>
            )}
            <p className="text-sm text-muted-foreground mt-4">Keep learning & improving 🚀</p>
            <button
              onClick={() => navigate('/opportunities')}
              className="btn-primary mt-6 py-2 px-6 text-base"
            >
              Explore Opportunities
            </button>
          </div>
        ) : (
          // Questions Screen
          <>
            <h1 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              Preparing your test for: <span className="text-primary">{skillDisplayName}</span>
            </h1>
            <p className="text-muted-foreground text-sm mb-8">
              Answer the following questions to assess your skill level.
            </p>

            <form onSubmit={handleSubmitTest} className="space-y-6 text-left">
              {currentQuestions.map((q, qIndex) => (
                <div key={qIndex} className="bg-card p-4 rounded-lg border border-border">
                  <p className="font-semibold mb-3 text-base">{qIndex + 1}. {q.question}</p>
                  <div className="space-y-2">
                    {q.options.map((option, oIndex) => (
                      <label key={oIndex} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name={`question-${qIndex}`}
                          value={option}
                          checked={selectedAnswers[qIndex] === option}
                          onChange={() => handleOptionChange(qIndex, option)}
                          className="form-radio text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-muted-foreground">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <button
                type="submit"
                className="btn-primary w-full py-3 text-base mt-8"
              >
                Submit Test
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
