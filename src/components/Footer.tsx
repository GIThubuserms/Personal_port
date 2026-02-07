import { Github, Linkedin, Twitter, Heart,Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/GIThubuserms", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/murtaza-saleem9704", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/murtaza__.s/", label: "Instagram" }
  ];

  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Title */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text">Murtaza :)</h3>
            <p className="text-sm text-muted-foreground">Software Engineer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
               <Heart className="w-4 h-4 text-primary fill-primary" /> © 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;