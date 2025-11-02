import { ArrowRight, Code2, Terminal, Layers, Database, Cpu, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Home = () => {
  const [displayedName, setDisplayedName] = useState("");
  const fullName = "Erantha Welikala";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);
    
    return () => clearInterval(typingInterval);
  }, []);

  const skills = [
    {
      icon: Code2,
      title: "Full-Stack Engineering",
      description: "Architecting scalable systems with Angular, React, Node.js, and modern frameworks",
      gradient: "from-primary/20 to-accent/20",
    },
    {
      icon: Terminal,
      title: "Mobile Innovation",
      description: "Building high-performance native and cross-platform applications with cutting-edge tools",
      gradient: "from-accent/20 to-primary/20",
    },
    {
      icon: GitBranch,
      title: "DevOps Excellence",
      description: "Automating workflows with CI/CD pipelines, containerization, and infrastructure as code",
      gradient: "from-primary/20 via-accent/10 to-primary/20",
    },
  ];

  const techStack = [
    { name: "Angular", icon: Layers },
    { name: "React", icon: Code2 },
    { name: "React Native", icon: Code2 },
    { name: "Node.js", icon: Terminal },
    { name: "ExpressJS", icon: Terminal },
    { name: "NestJS", icon: Layers },
    { name: "Next.js", icon: Layers },
    { name: "Spring Boot", icon: Cpu },
    { name: "Java", icon: Cpu },
    { name: "JavaScript", icon: Code2 },
    { name: "TypeScript", icon: Cpu },
    { name: "Python", icon: Cpu },
    { name: "Flask", icon: Terminal },
    { name: "Django", icon: Layers },
    { name: "Objective-C", icon: Cpu },
    { name: "Swift", icon: Cpu },
    { name: "Android Studio", icon: Cpu },
    { name: "Xcode", icon: Cpu },
    { name: "MySQL", icon: Database },
    { name: "MSSQL", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "Docker", icon: Database },
    { name: "Jenkins", icon: Cpu },
    { name: "SonarQube", icon: Cpu },
    { name: "Git", icon: GitBranch },
    { name: "QGIS", icon: Layers },
  ];

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "AtLink Communication Inc",
      period: "2023 Jan - Present",
      highlights: [
        "Architecting microservices with Angular & Node.js ecosystem",
        "Implementing CI/CD automation pipelines with Jenkins & Docker",
        "Developing cross-platform mobile solutions with Ionic framework",
        "Research & implementation of ELK Stack for distributed logging",
      ],
    },
    {
      title: "Software Engineer",
      company: "AtLink Communication Inc",
      period: "2020 Aug - 2022 Dec",
      highlights: [
        "Native mobile development (Android/Java, iOS/Objective-C)",
        "Full-stack Python development with Django framework",
        "Backend API development with Node.js and Express",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Mesh Gradient */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-mesh)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="container relative mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-bounce-in">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Senior Software Engineer</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow inline-block min-w-[200px]">
                  {displayedName}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                Senior Software Engineer
              </h2>
              
              <p className="text-lg text-foreground/70 max-w-xl leading-relaxed">
                Senior Software Engineer with over 5 years of experience in building scalable and impactful software solutions.
              </p>

              <p className="text-lg text-foreground/70 max-w-xl leading-relaxed">
                Building elegant solutions at the intersection of{" "}
                <span className="text-primary font-medium">web</span>,{" "}
                <span className="text-accent font-medium">mobile</span>, and{" "}
                <span className="text-primary font-medium">cloud</span> technologies.
              </p>

              <p className="text-lg text-foreground/70 max-w-xl leading-relaxed">
                Passionate about continuous learning and innovation, I thrive on crafting technology that makes a difference.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/projects">
                  <Button size="lg" className="group shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all">
                    <Code2 className="mr-2 h-5 w-5" />
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="group border-primary/30 hover:border-primary">
                    Explore Journey
                  </Button>
                </Link>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-3 pt-6">
                {techStack.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:scale-105 animate-slide-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <tech.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="relative w-full max-w-md mx-auto">
                {/* Animated gradient rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-3xl animate-pulse-glow" />
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-30 blur-2xl animate-rotate-gradient" style={{ animationDuration: '10s' }} />
                
                <img
                  src="https://eranthawelikala.github.io/static/media/me.3e1cdb209e5c638341b4.png"
                  alt="Erantha Welikala - Software Engineer"
                  className="relative rounded-full w-full h-auto shadow-2xl border-4 border-primary/20 animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Years Coding", value: "5+", icon: Terminal },
              { label: "Tech Stack", value: "...", icon: Layers },
              { label: "Projects Shipped", value: "...", icon: Code2 },
              { label: "Coffee Consumed", value: "∞", icon: Cpu },
            ].map((stat, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-2 group animate-bounce-in border-primary/10" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Engineering Expertise
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Crafting robust solutions across the entire technology stack
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-[var(--shadow-glow)] transition-all hover:-translate-y-3 group relative overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <skill.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Career Timeline
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building production-grade systems and leading technical initiatives
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-[var(--shadow-elegant)] transition-all hover:scale-[1.02] animate-slide-up border-l-4 border-l-primary" 
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium text-lg">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  {exp.highlights.slice(0, 3).map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <Code2 className="w-4 h-4 text-primary mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/about">
              <Button variant="outline" size="lg" className="group border-primary/30 hover:border-primary hover:shadow-[var(--shadow-code)]">
                Full Experience & Tech Stack
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
