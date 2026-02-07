import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Cloud, Layers, Settings, Brain, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const expertiseAreas = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Building responsive, performant web applications using modern frameworks like React, Next.js, and TypeScript with seamless user experiences.",
    projectLink: "#projects",
    skills: ["React", "TypeScript", "Next.js", "Node.js","MongoDB","Express","Multer","Cloudinary","SocketIO","SQL"],
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Designing and deploying scalable cloud infrastructure on AWS with a focus on cost optimization and high availability.",
    projectLink: "#projects",
    skills: ["Linux", "Terraform","Ansible","AWS"],
  },
  {
    icon: Layers,
    title: "System Design",
    description: "Architecting distributed systems and microservices that handle millions of requests with reliability, scalability, and maintainability.",
    projectLink: "#projects",
    skills: ["Microservices","Authentication","Authorization","Scaling","Role-based access control","MVC","REST APIs", "Redis"],
  },
  {
    icon: Settings,
    title: "DevOps",
    description: "Implementing CI/CD pipelines, container orchestration, and infrastructure as code for streamlined development workflows.",
    projectLink: "#projects",
    skills: ["Ansible", "Kubernetes", "Terraform", "Jenkins","Prometheus","Grafana","Trivy","SonarQube","OWASP"],
  },
  {
    icon: Brain,
    title: "AI and Machine Learning",
    description: "Developing intelligent solutions using ML/AI frameworks for data analysis, prediction models, and natural language processing.",
    projectLink: "#projects",
    skills: ["Python","Numpy","Pandas","Seaborn","Matplotlib","LangChain","PyTorch", "Scikit-learn"],
  },
];

const ExpertiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="py-20 md:py-32 bg-secondary/20 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-4">{'// What I Do'}</p>
          <h2 className="section-title">
            Areas of <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className="group relative bg-card rounded-2xl p-6 gradient-border card-hover overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {area.description}
                </p>
                
                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {area.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group/btn"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                  <ArrowUpRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;