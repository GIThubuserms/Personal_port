import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cloud, Database, Cog, Cpu, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    description: "End-to-end web application development from concept to deployment, using modern technologies and best practices.",
    features: [
      "Custom web applications",
      "Progressive Web Apps (PWA)",
      "E-commerce solutions",
      "API development & integration",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture & Deployment",
    description: "Design and implementation of scalable, secure cloud infrastructure tailored to your business needs.",
    features: [
      "Cloud migration strategies",
      "Multi-cloud architecture",
      "Cost optimization",
      "Security & compliance",
    ],
  },
  {
    icon: Database,
    title: "System Design & API Development",
    description: "Architecting robust systems and APIs that scale with your business while maintaining performance.",
    features: [
      "Microservices architecture",
      "RESTful & GraphQL APIs",
      "Database design",
      "Performance optimization",
    ],
  },
  {
    icon: Cog,
    title: "DevOps & Automation",
    description: "Streamlining development workflows with automated pipelines, monitoring, and infrastructure management.",
    features: [
      "CI/CD pipeline setup",
      "Container orchestration",
      "Infrastructure as Code",
      "Monitoring & alerting",
    ],
  },
  {
    icon: Cpu,
    title: "Machine Learning Solutions",
    description: "Leveraging AI and ML to build intelligent solutions that drive data-informed decision making.",
    features: [
      "Predictive analytics",
      "Natural language processing",
      "Computer vision",
      "ML model deployment",
    ],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/20 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-4">{'// Services'}</p>
          <h2 className="section-title">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software engineering services to help bring your ideas to life 
            and scale your business with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-card rounded-2xl p-6 gradient-border card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:glow-border transition-all">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;