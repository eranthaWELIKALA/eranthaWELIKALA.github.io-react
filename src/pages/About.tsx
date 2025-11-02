import { Award, BookOpen, Briefcase, GraduationCap, Code2, Terminal, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "AtLink Communications (Pvt) Ltd",
      period: "Jan 2023 - Present",
      highlights: [
        "Led architectural design decisions across multiple web projects, improving scalability and maintainability.",
        "Advocated coding standards and best practices, increasing SonarQube quality gate pass rate by 10%.",
        "Individually designed and implemented CI/CD pipelines with Docker and Jenkins, reducing deployment effort by over 50%.",
        "Mentored interns, guiding them through full project cycles with zero bug reports during delivery.",
        "Contributed to full-stack enterprise-grade solutions using Angular, Node.js, and .NET Framework.",
      ],
    },
    {
      title: "Software Engineer",
      company: "AtLink Communications (Pvt) Ltd",
      period: "Aug 2020 - Dec 2022",
      highlights: [
        "Delivered new features and resolved complex bugs in agile web and mobile projects.",
        "Conducted R&D and knowledge-sharing sessions on microservice architectures.",
        "Spearheaded the development of three client-facing prototypes to support business expansion.",
        "Worked across Angular, Node.js, and Django-based full-stack systems with integrated mobile solutions (Android, iOS, Ionic).",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "AtLink Communications (Pvt) Ltd",
      period: "Feb 2019 - Jul 2019",
      highlights: [
        "Contributed to implementing new features for key web applications.",
        "Specialized in debugging and performance optimization for smoother user experiences.",
        "Researched and implemented emerging technologies relevant to team projects.",
        "Enhanced communication solutions to improve system interaction and usability.",
      ],
    },
  ];


  const technologies = [
    // Frontend
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Vue.js", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Java", category: "Language" },
    { name: "Python", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "TypeScript", category: "Language" },
    { name: "PHP", category: "Language" },

    // Backend
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "NestJS", category: "Backend" },
    { name: "Laravel", category: "Backend" },
    { name: "Django", category: "Backend" },
    { name: ".NET Framework", category: "Backend" },
    { name: ".NET Core", category: "Backend" },
    { name: "Spring Boot", category: "Backend" },
    { name: "RESTful APIs", category: "Backend" },

    // Mobile
    { name: "Android (Java)", category: "Mobile" },
    { name: "iOS (Objective-C / Swift)", category: "Mobile" },
    { name: "Ionic", category: "Mobile" },
    { name: "React Native", category: "Mobile" },

    // Database
    { name: "MySQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "MSSQL", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Redis", category: "Database" },
    { name: "Firebase", category: "Database" },

    // DevOps & Cloud
    { name: "Docker", category: "DevOps" },
    { name: "Jenkins", category: "DevOps" },
    { name: "AWS", category: "DevOps" },
    { name: "SonarQube", category: "DevOps" },
    { name: "ELK Stack (Elasticsearch, Logstash, Kibana)", category: "DevOps" },
    { name: "CI/CD Pipelines", category: "DevOps" },
    { name: "Nginx", category: "DevOps" },

    // Tools & Platforms
    { name: "Firebase Auth", category: "Tools" },
    { name: "QGIS", category: "Tools" },
    { name: "JIRA", category: "Tools" },
    { name: "Confluence", category: "Tools" },
    { name: "Git", category: "Tools" },
    { name: "Postman", category: "Tools" },
    { name: "Figma", category: "Tools" },
  ];


  const qualities = [
    {
      icon: Terminal,
      title: "Code Craftsman",
      description: "Writing clean, maintainable, and scalable code following SOLID principles, design patterns, and best practices. Advocate for code reviews and technical documentation.",
    },
    {
      icon: Zap,
      title: "Performance Optimizer",
      description: "Deep understanding of performance bottlenecks, profiling tools, and optimization techniques. Experience with caching strategies, lazy loading, and database query optimization.",
    },
    {
      icon: BookOpen,
      title: "Continuous Learner",
      description: "Rapidly adapting to new technologies, frameworks, and paradigms. Active contributor to technical communities, staying current with industry trends and emerging tech.",
    },
  ];

  const techCategories = ["Frontend", "Backend", "Mobile", "Database", "DevOps", "Language"];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-20 animate-fade-in relative">
          <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-20 blur-3xl" />
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6 animate-bounce-in">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Engineer Profile</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Senior Software Engineer with over 5 years of experience designing, building, and optimizing
              enterprise-grade systems. Passionate about crafting clean, efficient code and continuously exploring
              emerging technologies to deliver scalable, high-performance solutions.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mb-20 animate-fade-in">
          <Card className="p-8 max-w-3xl mx-auto border-primary/20 hover:shadow-[var(--shadow-elegant)] transition-all hover:scale-[1.02]">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-2">Education</h2>
                <h3 className="text-xl font-medium mb-2">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    BSc in Computer Engineering
                  </span>
                </h3>
                <p className="text-muted-foreground">
                  Faculty of Engineering, University of Peradeniya
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Solid foundation in computer science, algorithms, software engineering, and systems architecture — driving innovation through technical excellence and creative problem-solving.
                </p>

              </div>
            </div>
          </Card>
        </section>

        {/* Qualities */}
        <section className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Engineering Philosophy
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Core principles that drive my approach to software development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualities.map((quality, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-[var(--shadow-glow)] transition-all hover:-translate-y-2 group animate-scale-in border-primary/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <quality.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {quality.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{quality.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Career Journey
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Progressive growth from trainee to senior engineer, shipping production systems
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-[var(--shadow-elegant)] transition-all hover:scale-[1.01] animate-slide-up border-l-4 border-l-primary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Briefcase className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium text-lg">{exp.company}</p>
                      </div>
                      <span className="text-sm font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3 mt-4">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground group/item">
                          <Terminal className="w-4 h-4 text-primary mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                          <span className="leading-relaxed text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Technology Stack
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Battle-tested tools and frameworks for building production systems
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20">
              {techCategories.map((category, catIndex) => (
                <div key={category} className="mb-6 last:mb-0">
                  <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies
                      .filter(tech => tech.category === category)
                      .map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium font-mono hover:bg-primary hover:text-primary-foreground transition-all cursor-default hover:scale-105 animate-slide-up border border-primary/20"
                          style={{ animationDelay: `${(catIndex * 6 + index) * 50}ms` }}
                        >
                          {tech.name}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
