import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2, Rocket } from "lucide-react";

// 🧩 Your Real Projects
import flowerInventoryDesktopImg from "@/assets/images/projects/flower-inventory-desktop.png";
import smpeaImg from "@/assets/images/projects/smpea.png";
import bmsImg from "@/assets/images/projects/bms.png";
import imsImg from "@/assets/images/projects/ims.png";
import peraEMSImg from "@/assets/images/projects/pera-ems.png";
import portfolioImg from "@/assets/images/projects/portfolio.png";
import altS3Img from "@/assets/images/projects/alt-s3.png";
import gitProfileManagerImg from "@/assets/images/projects/git-profile-manager.png";
import gitProfileManagerDesktopImg from "@/assets/images/projects/git-profile-manager-desktop.png";
import mockRESTAPIImage from "@/assets/images/projects/mock-rest-api.png";
import peraCricketImg from "@/assets/images/projects/pera-cricket.png";
import rtqwmsImg from "@/assets/images/projects/rtwqms.png";
import openHoursImg from "@/assets/images/projects/open-hours.png";
import audioVisualizationImg from "@/assets/images/projects/audio-visualization.png";
import mtuteImg from "@/assets/images/projects/mtute.png";
import mtuteMobileImg from "@/assets/images/projects/mtute-mobile.png";
import thunderCricketImg from "@/assets/images/projects/thunder-cricket.png";
import frsImg from "@/assets/images/projects/face-recognition-system.png";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web", "Mobile", "Full-stack", "Backend / API", "Desktop", "DevOps", "CLI / Tools", "AI / Machine Learning", "Embedded / IoT"];

  const projects = [
    {
      title: "Flower Inventory Management",
      description: "Electron desktop application for florists to manage inventory, suppliers and sales. Built with React + TypeScript (Vite) on the frontend, Prisma ORM for MySQL on the backend, and packaged as a native desktop app with Electron. Includes internationalization, theming, and packaged macOS installers.",
      categories: ["Desktop", "Backend / API"],
      technologies: ["Electron", "React", "TypeScript", "Tailwind CSS", "Prisma", "Node.js"],
      image: flowerInventoryDesktopImg,
      github: "https://github.com/eranthaWELIKALA/flower-inventory-management"
    },
    {
      title: "Stock Market Prediction Platform",
      description:
        "An ensemble-based stock market prediction system combining multiple ML models for improved accuracy.",
      categories: ["Full-stack", "AI / Machine Learning"],
      technologies: ["Python", "Angular", "NodeJS", "Flask", "Firebase"],
      image: smpeaImg,
      github: "https://github.com/eranthaWELIKALA/Stock_Market_Prediction_Platform.git",
      demo: "",
    },
    {
      title: "Alternative for AWS S3 Bucket",
      description:
        "A local, containerized alternative to AWS S3 bucket for file storage and retrieval.",
      categories: ["Full-stack"],
      technologies: ["NodeJS", "EJS", "Docker"],
      image: altS3Img,
      github: "https://github.com/eranthaWELIKALA/Alternative-AWS-S3-Bucket.git",
      demo: "https://hub.docker.com/r/eranthawelikala/storage-service",
    },
    {
      title: "Git Profile Manager (Desktop Edition)",
      description: "Electron-based desktop app that manages multiple Git profiles through an intuitive UI, executing shell automation under the hood.",
      categories: ["Desktop", "DevOps"],
      technologies: ["Electron", "NodeJS", "Shell Commands (exec)"],
      image: gitProfileManagerDesktopImg,
      github: "https://github.com/eranthaWELIKALA/GIT-Profile-Manager/tree/desktop",
      demo: "https://eranthawelikala.github.io/GIT-Profile-Manager/",
    },
    {
      title: "Git Profile Manager (CLI Version)",
      description: "Command-line tool for managing multiple Git profiles, built with Batch and Shell scripts.",
      categories: ["CLI / Tools", "DevOps"],
      technologies: ["Batch", "Shell", "Inno Setup"],
      image: gitProfileManagerImg,
      github: "https://github.com/eranthaWELIKALA/GIT-Profile-Manager/tree/cli",
      demo: "https://eranthawelikala.github.io/GIT-Profile-Manager/",
    },
    {
      title: "Mock REST API",
      description:
        "A configurable mock API for testing frontend clients without an actual backend.",
      categories: ["Backend / API"],
      technologies: ["NodeJS", "Docker"],
      image: mockRESTAPIImage,
      github: "https://github.com/eranthaWELIKALA/ResponseHandler.git",
      demo: "https://hub.docker.com/r/eranthawelikala/mock-rest-api",
    },
    {
      title: "Pera Cricket Database",
      description:
        "A statistics tracker for University of Peradeniya Cricket Team to record and view match performances.",
      categories: ["Web", "Full-stack"],
      technologies: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS"],
      image: peraCricketImg,
      github: "https://github.com/eranthaWELIKALA/PeraCricket.git",
      demo: "",
    },
    {
      title: "Real-time Water Quality Monitoring",
      description:
        "IoT-based system for monitoring water quality parameters in real-time using embedded sensors.",
      categories: ["Web", "Full-stack", "Embedded / IoT"],
      technologies: ["VueJS", "PHP", "MySQL", "AVR"],
      image: rtqwmsImg,
      github: "https://github.com/eranthaWELIKALA/RealTimeWaterQualityMeasurementSystem.git",
      demo: "",
    },
    {
      title: "mtute.lk",
      description:
        "Educational platform connecting institutes, instructors, and students for online learning and resource sharing.",
      categories: ["Web", "Full-stack"],
      technologies: ["Angular", "NodeJS", "Firebase", "AWS EC2"],
      image: mtuteImg,
      github: "",
      demo: "",
    },
    {
      title: "mtute Mobile",
      description:
        "Mobile app companion to mtute.lk, enabling students to access papers and short notes easily.",
      categories: ["Mobile"],
      technologies: ["Ionic"],
      image: mtuteMobileImg,
      github: "https://github.com/eranthaWELIKALA/Question-App.git",
      demo: "",
    },
    {
      title: "Thunder Cricket Database",
      description:
        "Web app for Thunder Cricket Club, Kandy — inspired by the Pera Cricket database for match records.",
      categories: ["Web", "Full-stack"],
      technologies: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS"],
      image: thunderCricketImg,
      github: "",
      demo: "",
    },
    {
      title: "Audio Visualization",
      description:
        "Music visualization web app that animates real-time sound frequencies.",
      categories: ["Web", "Full-stack"],
      technologies: ["JavaScript", "NodeJS"],
      image: audioVisualizationImg,
      github: "https://github.com/eranthaWELIKALA/AudioVisualization.git",
      demo: "",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio showcasing professional experience, projects, and technical skills.",
      categories: ["Web", "Full-stack"],
      technologies: ["React", "Vite", "TailwindCSS", "GitHub Pages"],
      image: portfolioImg,
      github: "https://github.com/eranthaWELIKALA/eranthaWELIKALA.github.io-react.git",
      demo: "https://eranthawelikala.github.io",
    },
    {
      title: "Bank Management System",
      description:
        "Desktop app for managing banking operations and bill payments, built with Java Swing.",
      categories: ["Desktop"],
      technologies: ["Java"],
      image: bmsImg,
      github: "https://github.com/eranthaWELIKALA/Bank_Management_System",
      demo: "",
    },
    {
      title: "Member Information System",
      description:
        "Web app for managing Old Boys’ Association member details and records.",
      categories: ["Web", "Full-stack"],
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
      image: imsImg,
      github: "https://github.com/eranthaWELIKALA/Information-Management-System.git",
      demo: "",
    },
    {
      title: "Pera EMS",
      description:
        "Web-based health center management system for University of Peradeniya.",
      categories: ["Web", "Full-stack"],
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
      image: peraEMSImg,
      github: "https://github.com/eranthaWELIKALA/PeraEMS-Project.git",
      demo: "",
    },
    {
      title: "Open Hours",
      description:
        "Mobile app that helps users check open/closed stores and supports promotional listings.",
      categories: ["Mobile"],
      technologies: ["Android (Java)"],
      image: openHoursImg,
      github: "",
      demo: "",
    },
    {
      title: "Face Recognition System",
      description:
        "Face recognition project using Python and computer vision libraries.",
      categories: ["Web", "AI / Machine Learning"],
      technologies: ["Python"],
      image: frsImg,
      github:
        "https://github.com/eranthaWELIKALA/Face-Recognition-through-Vision-and-Computer-Vision.git",
      demo: "",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(selectedCategory));

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <section className="mb-16 animate-fade-in text-center relative">
          <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-30 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6 animate-bounce-in">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Engineering Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of full-stack systems, mobile apps, and DevOps tools — built with modern technologies and engineering precision.
            </p>
          </div>
        </section>

        {/* Filters */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Code2 className="w-5 h-5 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all ${selectedCategory === category
                  ? "shadow-[var(--shadow-code)]"
                  : "hover:border-primary/50"
                  }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-[var(--shadow-glow)] transition-all hover:-translate-y-3 group animate-scale-in border-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute top-4 right-4">
                  {project.categories.map((category, idx) => (
                    <Badge key={idx} className="bg-primary/90 backdrop-blur-sm shadow-[var(--shadow-code)] ml-1">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-mono hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn border-primary/30 hover:border-primary"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex-1 group/btn shadow-[var(--shadow-code)]"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <Code2 className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
