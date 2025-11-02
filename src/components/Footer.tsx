import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+94775778979" className="hover:text-primary transition-colors">
                  +94 77 5778979
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:eranthawelikala@gmail.com" className="hover:text-primary transition-colors">
                  eranthawelikala@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:eranthawelikala@eng.pdn.ac.lk" className="hover:text-primary transition-colors">
                  eranthawelikala@eng.pdn.ac.lk
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="/" className="block hover:text-primary transition-colors">Home</a>
              <a href="/about" className="block hover:text-primary transition-colors">About</a>
              <a href="/projects" className="block hover:text-primary transition-colors">Projects</a>
              <a href="/knowledge" className="block hover:text-primary transition-colors">Knowledge Library</a>
            </div>
          </div>

          {/* Social & Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a 
                href="https://github.com/eranthawelikala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              BSc Engineering in Computing<br />
              University of Peradeniya
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Erantha Welikala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
