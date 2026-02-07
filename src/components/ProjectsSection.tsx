import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Ecommerce Platform",
    description: "A React-based ecommerce web with animated design  ",
    techStack: ["React", "Node.js"],
    liveUrl: "https://ecommerce-ms.vercel.app/",
    githubUrl: "https://github.com/GIThubuserms/Ecommerce_ms",
    featured: false,
  },
  {
    title: "Real-time Chat System",
    description: "WebSocket-based messaging system in realtime and secure ",
    techStack: ["MongoDB", "SocketIO", "React", "Express", "Nodejs"],
    githubUrl: "https://github.com/GIThubuserms/Chat-Blog",
    featured: false,
  },
  {
    title: "Employee Shift Manager Deployment ",
    description: "Comprehensive CI/CD pipeline automation tool reducing deployment time by 70% with integrated monitoring.",
    techStack: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
    githubUrl: "https://github.com/GIThubuserms/Employee_Shift_Manger_DPL",
    featured: false,
  },
  {
    title: "Youtube Backend ",
    description: "Scalable REST API powering multi-tenant youtube platforms with advanced vedio management.",
    techStack: ["Node.js", "Express", "MongoDB", "Multer", "Cloudinary"],
    githubUrl: "https://github.com/GIThubuserms/JS-Backend",
    featured: false,
  },
  {
    title: "ML Insurance Predictor",
    description: "End-to-end machine learning pipeline for prediction of insurance based on input.",
    techStack: ["Python", "Scikit-Learn", "Numpy", "Pandas"],
    githubUrl: "https://github.com/GIThubuserms/Insurance_Predictor",
    featured: false,
  },

];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-4">{'// My Work'}</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-card rounded-2xl overflow-hidden gradient-border card-hover pointer-events-none"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Featured badge - positioned first */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2 py-1 text-xs font-mono bg-primary text-primary-foreground rounded-full">
                    {'<Featured />'}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="p-6 pb-0 pointer-events-auto relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-md hover:bg-primary/10"
                        aria-label="View GitHub repository"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-md hover:bg-primary/10"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors font-mono">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
              
              {/* Footer */}
              <div className="p-6 pt-0 mt-auto pointer-events-auto relative z-10">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs font-mono text-primary bg-primary/10 rounded border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-mono"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        {'$ demo'}
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className={`${project.liveUrl ? '' : 'flex-1'} border-primary/40 text-foreground hover:bg-primary/10 hover:text-primary font-mono`}
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 w-4 h-4" />
                        {'src'}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;