import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen, Terminal, Code2 } from "lucide-react";

const Knowledge = () => {
  const articles = [
    {
      title: "Building Scalable Microservices with Node.js",
      excerpt: "Deep dive into microservices architecture patterns, service mesh implementation, API gateway design, and container orchestration for enterprise-scale distributed systems.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Backend",
      tags: ["NodeJS", "Microservices", "Docker", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      difficulty: "Advanced",
    },
    {
      title: "Modern Frontend Architecture with Angular",
      excerpt: "Architecting production Angular apps: lazy loading strategies, state management with NgRx, RxJS patterns, performance optimization, and micro-frontend architecture.",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "Frontend",
      tags: ["Angular", "TypeScript", "RxJS", "Architecture"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
      difficulty: "Advanced",
    },
    {
      title: "CI/CD Best Practices for Modern Teams",
      excerpt: "Comprehensive guide to building robust pipelines: Jenkins declarative pipelines, Docker multi-stage builds, automated testing strategies, and GitOps workflows.",
      date: "2024-01-05",
      readTime: "12 min read",
      category: "DevOps",
      tags: ["CI/CD", "Jenkins", "Docker", "GitOps"],
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop",
      difficulty: "Intermediate",
    },
    {
      title: "Cross-Platform Mobile Development with Ionic",
      excerpt: "Building performant hybrid apps: native plugin integration, offline-first architecture, push notifications, biometric authentication, and app store deployment strategies.",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "Mobile",
      tags: ["Ionic", "Capacitor", "Angular", "Mobile"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      difficulty: "Intermediate",
    },
    {
      title: "Database Optimization Techniques",
      excerpt: "Query performance tuning: indexing strategies, explain plans, connection pooling, caching layers, partitioning, and scaling PostgreSQL/MySQL for high-traffic applications.",
      date: "2023-12-20",
      readTime: "9 min read",
      category: "Database",
      tags: ["PostgreSQL", "MySQL", "Performance", "Indexing"],
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop",
      difficulty: "Advanced",
    },
    {
      title: "Securing Web Applications: A Practical Guide",
      excerpt: "Production security implementation: JWT authentication, OAuth2/OIDC flows, CSRF/XSS protection, SQL injection prevention, security headers, and vulnerability scanning.",
      date: "2023-12-15",
      readTime: "11 min read",
      category: "Security",
      tags: ["Security", "Authentication", "OAuth", "JWT"],
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop",
      difficulty: "Advanced",
    },
  ];

  const categories = ["All", "Frontend", "Backend", "Mobile", "DevOps", "Database", "Security"];

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      Beginner: "bg-green-500/10 text-green-500 border-green-500/20",
      Intermediate: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      Advanced: "bg-red-500/10 text-red-500 border-red-500/20",
    };
    return colors[difficulty as keyof typeof colors] || "";
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <section className="mb-16 animate-fade-in text-center relative">
          <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-30 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-6 animate-bounce-in">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Knowledge Library
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Technical deep-dives, architecture patterns, and production-grade best practices from years 
              of building and shipping software systems
            </p>
          </div>
        </section>

        {/* Categories */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Terminal className="w-5 h-5 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 hover:shadow-[var(--shadow-code)] border-primary/30"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-[var(--shadow-glow)] transition-all hover:-translate-y-3 group animate-scale-in border-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm shadow-[var(--shadow-code)]">
                  {article.category}
                </Badge>
                <div className={`absolute top-4 left-4 px-2 py-1 rounded text-xs font-medium border ${getDifficultyColor(article.difficulty)}`}>
                  {article.difficulty}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-mono">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-mono hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" className="w-full group/btn justify-between hover:bg-primary/10 border border-primary/20 hover:border-primary">
                  <span className="flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    Read Article
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fade-in">
          <Card className="p-12 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-30" />
            <div className="relative">
              <Terminal className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Stay Updated
                </span>
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                Get notified about new technical articles, in-depth tutorials, and insights on software 
                architecture, best practices, and emerging technologies.
              </p>
              <Button size="lg" className="group shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all">
                <BookOpen className="mr-2 h-5 w-5" />
                Subscribe to Newsletter
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
