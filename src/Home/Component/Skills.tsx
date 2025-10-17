import { motion } from 'framer-motion';
import { Code, Database, Palette, Zap } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-secondary to-secondary/60',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'JavaScript', level: 88 },
        { name: 'React', level: 85 },
        { name: 'Next.js', level: 75 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-accent to-accent/60',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 78 },
        { name: 'MongoDB', level: 82 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      title: 'Design & Tools',
      icon: Palette,
      color: 'from-purple-500 to-purple-300',
      skills: [
        { name: 'Figma', level: 70 },
        { name: 'Git & GitHub', level: 88 },
        { name: 'VS Code', level: 95 },
        { name: 'Responsive Design', level: 92 },
      ],
    },
    {
      title: 'Soft Skills',
      icon: Zap,
      color: 'from-green-500 to-green-300',
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Communication', level: 85 },
        { name: 'Time Management', level: 88 },
        { name: 'Continuous Learning Mindset', level: 86 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-foreground mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
            My <span className="text-secondary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-4" />
          <p className="text-foreground/70 max-w-2xl mx-auto" style={{ fontSize: '1.1rem' }}>
            A comprehensive overview of my technical skills and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-foreground" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-foreground" style={{ fontSize: '1rem', fontWeight: 500 }}>
                        {skill.name}
                      </span>
                      <span className="text-foreground/60" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: 'easeOut',
                        }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-center text-foreground mb-8" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'HTML5',
              'CSS3',
              'JavaScript',
              'React',
              'Next.js',
              'Tailwind',
              'Node.js',
              'MongoDB',
              'Git',
              'Figma',
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, type: 'spring' }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 rounded-xl hover:border-secondary/40 transition-all cursor-pointer"
              >
                <span className="text-foreground" style={{ fontSize: '1rem', fontWeight: 600 }}>
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30 rounded-2xl px-8 py-6">
            <p className="text-foreground/70 mb-2" style={{ fontSize: '0.875rem' }}>
              Currently Learning
            </p>
            <p className="text-foreground" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
              Advanced Next.js, TypeScript 
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
