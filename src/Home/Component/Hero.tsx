import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../../ui/button';

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Front-End Developer',
    'React Enthusiast',
    'Web Designer',
    'Problem Solver',
    'Learner & Teacher'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary/10 via-transparent to-accent/10" />
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
                Hi there! I'm
              </p>
              <h1
                className="text-foreground mt-2"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1 }}
              >
                Md Eyamin Sheikh
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-20"
            >
              <motion.p
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-accent"
                style={{ fontSize: '1.5rem', fontWeight: 600 }}
              >
                {roles[currentRole]}
              </motion.p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-foreground/70 max-w-xl"
              style={{ fontSize: '1.1rem', lineHeight: 1.7 }}
            >
              A passionate Diploma in Engineering student from Bogura, Bangladesh, 
              specializing in modern web development. I create beautiful, responsive, 
              and user-friendly web applications using cutting-edge technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                className="bg-secondary hover:bg-secondary/90 text-primary-foreground px-6 py-6 gap-2 group"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                className="px-6 py-6 gap-2 group border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary-foreground"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-4 pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/Md-Eyamin-Sheikh?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:mdeyaminshekh0@gmail.com"
                className="p-3 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image/Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent opacity-20 rounded-full blur-3xl" />
              <div className="relative">
                {/* Animated Background Glow */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-secondary via-accent to-secondary rounded-full blur-3xl opacity-30"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-6 border border-secondary/30 shadow-2xl overflow-hidden">
                  {/* Animated Border Gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: 'linear-gradient(45deg, transparent, rgba(56, 189, 248, 0.3), transparent)',
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  {/* Content */}
                  <div className="relative space-y-6">
                    {/* Photo Container with Floating Animation */}
                    <motion.div
                      className="relative"
                      animate={{
                        y: [0, -15, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {/* Outer Glow Ring */}
                      <motion.div
                        className="absolute -inset-3 rounded-full bg-gradient-to-r from-secondary to-accent opacity-50 blur-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />

                      {/* Rotating Ring */}
                      <motion.div
                        className="absolute -inset-2 rounded-full"
                        style={{
                          background: 'conic-gradient(from 0deg, #38BDF8, #FACC15, #38BDF8)',
                        }}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />

                      {/* Photo Frame */}
                      <div className="relative">
                        <div className="relative w-72 h-72 mx-auto rounded-full overflow-hidden border-4 border-background shadow-2xl">
                          <img
                            src="https://i.postimg.cc/3RSxYmGb/476107369-1150035723577979-4042357699969649814-n.jpg"
                            alt="Md Eyamin Sheikh"
                            className="w-full h-full object-cover"
                          />
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                        </div>

                        {/* Floating Orbs */}
                        <motion.div
                          className="absolute top-0 right-0 w-16 h-16 bg-secondary/30 rounded-full blur-xl"
                          animate={{
                            x: [0, 20, 0],
                            y: [0, -20, 0],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 w-20 h-20 bg-accent/30 rounded-full blur-xl"
                          animate={{
                            x: [0, -20, 0],
                            y: [0, 20, 0],
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Tech Stack Badges with Advanced Animation */}
                    <div className="flex flex-wrap gap-3 justify-center">
                      {['React', 'Next.js', 'Node.js', 'MongoDB'].map((tech, i) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{
                            delay: 1.2 + i * 0.15,
                            type: 'spring',
                            stiffness: 200,
                            damping: 15,
                          }}
                          whileHover={{
                            scale: 1.15,
                            rotate: [0, -5, 5, -5, 0],
                            transition: { duration: 0.5 },
                          }}
                          className="group relative"
                        >
                          {/* Badge Glow on Hover */}
                          <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-xl opacity-0 group-hover:opacity-70 blur transition-opacity duration-300" />
                          
                          <div className="relative px-5 py-2.5 bg-background/90 backdrop-blur-sm rounded-xl border-2 border-secondary/30 group-hover:border-secondary transition-all duration-300">
                            <span className="text-foreground" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                              {tech}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Animated Status Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.8 }}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-full border border-green-500/30 mx-auto w-fit"
                    >
                      <motion.div
                        className="w-2.5 h-2.5 rounded-full bg-green-500"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                      <span className="text-foreground" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                        Available for Work
                      </span>
                    </motion.div>

                    {/* Floating Code Snippets */}
                    <motion.div
                      className="absolute -top-8 -right-8 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-lg border border-accent/30 shadow-lg"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <code className="text-accent" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                        &lt;/&gt; Code
                      </code>
                    </motion.div>

                    <motion.div
                      className="absolute -bottom-6 -left-6 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-lg border border-secondary/30 shadow-lg"
                      animate={{
                        y: [0, 10, 0],
                        rotate: [0, -5, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <code className="text-secondary" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                        ✨ Design
                      </code>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
