import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Coffee, Rocket, Terminal } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Code2, value: "2+", label: "Years Experience" },
    { icon: Rocket, value: "20+", label: "Projects Completed" },
    { icon: Coffee, value: "100+", label: "Cups of Coffee" },
    { icon: Terminal, value: "7+", label: "Technologies" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <p className="text-primary font-mono text-sm mb-4">
              {"// About Me"}
            </p>
            <h2 className="section-title">
              Passionate About <span className="gradient-text">Technology</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 mx-auto rounded-full" />
          </div>

          <motion.div
            className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-12 gradient-border glow-border"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-8">
              I'am a Software Engineer who likes turning hard ideas into simple
              and useful solutions. I help businesses create software solutions
              that are easy to use and maintain.
            </p>
            <p className="hidden md:block text-base md:text-lg text-muted-foreground leading-relaxed mb-8 md:mb-12">
              I enjoy solving problems and learning new tools to get better at
              my work. When I'm not coding, I like helping other developers,
              exploring new technologies, and keeping myself updated with what's
              new in tech.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-3 md:p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <stat.icon className="w-6 md:w-8 h-6 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
                  <p className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
