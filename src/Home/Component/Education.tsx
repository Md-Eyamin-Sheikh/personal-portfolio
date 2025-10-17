import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'Diploma in Engineering',
      field: 'Computer Technology',
      institution: 'Bogura Polytechnic Institute',
      location: 'Bogura, Bangladesh',
      period: '2021 - 2025',
      description: 'Specialized in computer science, programming, and web technologies. Achieved excellence in software development and database management courses.',
      achievements: [
        'Top performer in Web Development courses',
        'Led multiple team projects',
        'Participated in coding competitions',
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-foreground mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
            My <span className="text-secondary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-accent to-secondary/20 hidden md:block" />

              {/* Content Card */}
              <div className="relative pl-0 md:pl-24">
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="absolute left-5 top-8 w-6 h-6 rounded-full bg-secondary border-4 border-background shadow-lg hidden md:block"
                />

                <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-secondary/10 rounded-xl">
                          <GraduationCap className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="text-foreground" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                            {edu.degree}
                          </h3>
                          <p className="text-secondary" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                            {edu.field}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-accent/20 text-accent px-4 py-2 rounded-lg border border-accent/30">
                      <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>In Progress</span>
                    </div>
                  </div>

                  {/* Institution Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Award className="w-5 h-5 text-secondary" />
                      <span style={{ fontSize: '1rem' }}>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <MapPin className="w-5 h-5 text-secondary" />
                      <span style={{ fontSize: '1rem' }}>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Calendar className="w-5 h-5 text-secondary" />
                      <span style={{ fontSize: '1rem' }}>{edu.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 mb-6" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="text-foreground mb-3" style={{ fontSize: '1rem', fontWeight: 600 }}>
                      Key Achievements:
                    </h4>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-secondary" />
                          <span className="text-foreground/70" style={{ fontSize: '0.95rem' }}>
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Expected Graduation', value: '2025' },
              { label: 'Major Focus', value: 'Web Development' },
              { label: 'Current CGPA', value: '3.8/4.0' },
            ].map((item, index) => (
              <div
                key={item.label}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20"
              >
                <p className="text-foreground/60 mb-2" style={{ fontSize: '0.875rem' }}>
                  {item.label}
                </p>
                <p className="text-secondary" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
