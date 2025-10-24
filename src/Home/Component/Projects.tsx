import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { projects } from '../../data/projects';
import { Button } from '../../ui/button';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'frontend' | 'fullstack'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const selectedProjectData = selectedProject !== null 
    ? projects.find(p => p.id === selectedProject) 
    : null;

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{ 
            backgroundImage: 'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)',
            backgroundSize: '80px 80px'
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
            My <span className="text-secondary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-4" />
          <p className="text-foreground/70 max-w-2xl mx-auto" style={{ fontSize: '1.1rem' }}>
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 md:gap-6 mb-12 "
        >
          {(['all', 'frontend', 'fullstack'] as const).map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`md:px-6 px-3 py-3 rounded-xl transition-all ${
                filter === filterType
                  ? 'bg-secondary text-white shadow-lg scale-105'
                  : 'bg-card border border-border text-foreground/70 hover:border-secondary/50'
              }`}
              style={{ fontSize: '1rem', fontWeight: 600 }}
            >
              {filterType === 'all' ? 'All Projects' : filterType === 'frontend' ? 'Frontend' : 'Full-Stack'}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full flex flex-col">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-secondary/20 to-accent/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Quick Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary rounded-full text-white hover:bg-secondary/90 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-foreground rounded-full text-background hover:bg-foreground/90 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      project.category === 'fullstack' 
                        ? 'bg-accent/20 text-accent border border-accent/30' 
                        : 'bg-secondary/20 text-secondary border border-secondary/30'
                    }`} style={{ fontWeight: 600 }}>
                      {project.category === 'fullstack' ? 'Full-Stack' : 'Frontend'}
                    </span>
                  </div>

                  <h3 className="text-foreground mb-2" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground/70 mb-4 flex-1" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted rounded-lg text-foreground/70"
                        style={{ fontSize: '0.75rem', fontWeight: 500 }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span
                        className="px-3 py-1 bg-muted rounded-lg text-foreground/70"
                        style={{ fontSize: '0.75rem', fontWeight: 500 }}
                      >
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <Button
                    variant="outline"
                    className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white"
                    onClick={() => setSelectedProject(project.id)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProjectData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between z-10">
                <h3 className="text-foreground" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                  {selectedProjectData.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <img
                  src={selectedProjectData.image}
                  alt={selectedProjectData.title}
                  className="w-full aspect-video object-cover rounded-xl mb-6"
                />

                <div className="space-y-6">
                  <div>
                    <h4 className="text-foreground mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      About This Project
                    </h4>
                    <p className="text-foreground/70" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                      {selectedProjectData.longDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-foreground mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProjectData.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 rounded-lg text-foreground"
                          style={{ fontSize: '0.95rem', fontWeight: 500 }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      className="flex-1 bg-secondary hover:bg-secondary/90 text-white gap-2"
                      onClick={() => window.open(selectedProjectData.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-foreground/20 gap-2"
                      onClick={() => window.open(selectedProjectData.githubUrl, '_blank')}
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
