import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful user experiences',
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Always exploring new technologies',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative and communicative',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-foreground mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
            About <span className="text-secondary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-4 border-secondary/20 shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-secondary/20 to-accent/20">
                <img
                  src="https://i.postimg.cc/3RSxYmGb/476107369-1150035723577979-4042357699969649814-n.jpg"
                  alt="Md Eyamin Sheikh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
            {/* Floating badge */}
            {/* <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-2xl shadow-xl border-4 border-background"
            >
              <p style={{ fontSize: '1rem', fontWeight: 700 }}>1+ Years</p>
              <p style={{ fontSize: '0.875rem' }}>Experience</p>
            </motion.div> */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-2xl shadow-xl border-4 border-background"
            >
              <p style={{ fontSize: '1rem', fontWeight: 700 }}>20+ Projects</p>
              <p style={{ fontSize: '0.875rem' }}>Built & Deployed</p>
            </motion.div>

          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-foreground" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
                Hello! I'm Eyamin from <span className="text-secondary">Bogura, Bangladesh</span>
              </h3>
              <div className="space-y-4 text-foreground/70" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                <p>
                  I'm currently pursuing my Diploma in Engineering in the Computer Department, 
                  where I've developed a deep passion for web development and modern technologies.
                </p>
                <p>
                  My journey in tech started with curiosity about how websites work, and it has 
                  evolved into a mission to create exceptional digital experiences. I specialize 
                  in front-end development with React and am expanding my skills into full-stack 
                  development with Next.js, Node.js, and MongoDB.
                </p>
                <p>
                  Beyond coding, I enjoy teaching others what I've learned and contributing to 
                  the developer community. My goal is to secure a Front-End Developer position 
                  where I can contribute to innovative projects and continue growing as a developer.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 hover:border-secondary/40 transition-all group"
                >
                  <item.icon className="w-8 h-8 text-secondary mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="text-foreground mb-1" style={{ fontSize: '1rem', fontWeight: 600 }}>
                    {item.title}
                  </h4>
                  <p className="text-foreground/60" style={{ fontSize: '0.875rem' }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
