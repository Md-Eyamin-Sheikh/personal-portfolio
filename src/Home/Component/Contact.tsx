import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Phone } from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_YOUR_SERVICE_ID as string,
        import.meta.env.VITE_YOUR_TEMPLATE_ID as string,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'mdeyaminshekh0@gmail.com',
        },
        import.meta.env.VITE_YOUR_PUBLIC_KEY as string
      );
      
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Failed to send message. Please try emailing me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mdeyaminshekh0@gmail.com',
      href: 'mailto:mdeyaminshekh0@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 01775012014',
      href: 'tel:+8801775012014',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bogura, Bangladesh',
      href: 'https://www.google.com/maps/place/Obokash+Building,+BPI/@24.8231562,89.3750188,800m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39fc55afd4cbd337:0x2831ce6455b8a7ba!8m2!3d24.8231514!4d89.3775937!16s%2Fg%2F11ry78z1cf?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Md-Eyamin-Sheikh?tab=repositories',
      color: 'hover:bg-gray-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:bg-blue-600',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://x.com/eyamin_2004',
      color: 'hover:bg-sky-500',
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
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
            Get In <span className="text-secondary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-4" />
          <p className="text-foreground/70 max-w-2xl mx-auto" style={{ fontSize: '1.1rem' }}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-foreground mb-6" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                Let's Connect
              </h3>
              <p className="text-foreground/70 mb-8" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                I'm currently looking for Front-End Developer opportunities. Whether you have a 
                question or just want to say hi, I'll try my best to get back to you!
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-foreground/60" style={{ fontSize: '0.875rem' }}>
                        {info.label}
                      </p>
                      <p className="text-foreground" style={{ fontSize: '1rem', fontWeight: 600 }}>
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-foreground mb-4" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`p-4 rounded-xl bg-secondary/10 text-secondary ${social.color} hover:text-white transition-all`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-green-500/20 to-green-400/20 border border-green-500/30"
            >
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-foreground" style={{ fontSize: '1rem', fontWeight: 600 }}>
                Available for new opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 shadow-lg space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or just say hi..."
                  required
                  rows={6}
                  className="w-full resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary hover:bg-secondary/90 text-white gap-2 py-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}