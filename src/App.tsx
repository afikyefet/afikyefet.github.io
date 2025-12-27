import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Chip } from './components/Chip';
import { Header } from './components/Header';
import { InfoCard } from './components/InfoCard';
import { ProjectCard } from './components/ProjectCard';
import { ScrollToTop } from './components/ScrollToTop';
import { Section } from './components/Section';
import { StatCard } from './components/StatCard';
import { aboutCards, contacts, education, personalProjects, stats, techStack, workProjects } from './data/profile';
import { getIcon } from './utils/icons';

function App() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Afik Yefet
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-slate-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Full-Stack Developer at Agilite
            <br />
            <span className="text-lg sm:text-xl">Building internal tools + products</span>
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-dark transition-colors flex items-center justify-center gap-2"
            >
              View Projects
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 rounded-lg border-2 border-accent text-accent font-medium hover:bg-accent/10 transition-colors"
            >
              Contact
            </button>
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-2 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {['React', 'TypeScript', 'Node.js', 'MongoDB', 'Shopify'].map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch" subtitle="Let's connect and collaborate">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact, idx) => {
            const IconComponent = getIcon(contact.icon);
            return (
              <motion.a
                key={contact.name}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="card-base p-6 block"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                    <IconComponent size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-1 text-slate-900">{contact.name}</h3>
                    <p className="text-sm text-slate-600">{contact.description}</p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </Section>

      {/* Stats Section */}
      <Section id="stats" title="GitHub & LeetCode Stats" subtitle="My coding activity and achievements">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <StatCard
            title="GitHub Stats"
            imageUrl={stats.github.statsUrl}
            alt="GitHub statistics"
            delay={0}
          />
          <StatCard
            title="LeetCode Progress"
            imageUrl={stats.leetcode.cardUrl}
            alt="LeetCode statistics"
            delay={0.1}
          />
          <StatCard
            title="Top Languages"
            imageUrl={stats.github.languagesUrl}
            alt="Top programming languages"
            delay={0.2}
          />
          <StatCard
            title="GitHub Streak"
            imageUrl={stats.github.streakUrl}
            alt="GitHub contribution streak"
            delay={0.3}
          />
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" title="About" subtitle="A glimpse into who I am and how I work">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutCards.map((card, idx) => (
            <InfoCard
              key={card.title}
              icon="User"
              title={card.title}
              description={card.description}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </Section>

      {/* Work Section */}
      <Section id="work" title="Work at Agilite" subtitle="Projects I've built and maintained">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} delay={idx * 0.1} />
          ))}
        </div>
      </Section>

      {/* Personal Projects Section */}
      <Section id="projects" title="Selected Projects" subtitle="Personal projects and side work">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} delay={idx * 0.1} />
          ))}
          <motion.div
            className="card-base p-6 flex items-center justify-center border-dashed border-2 border-slate-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className="text-slate-500 text-center">More projects coming soon...</p>
          </motion.div>
        </div>
      </Section>

      {/* Tech Stack Section */}
      <Section id="tech" title="Tech Stack" subtitle="Technologies I work with">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((category, catIdx) => (
            <motion.div
              key={category.category}
              className="card-base p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-slate-900">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIdx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: catIdx * 0.1 + itemIdx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Chip>{item}</Chip>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education" subtitle="My learning journey">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, idx) => (
            <InfoCard
              key={item.degree}
              icon="GraduationCap"
              title={item.degree}
              description={`${item.institution} • ${item.period}${item.description ? ` • ${item.description}` : ''}`}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Afik Yefet</h3>
              <p className="text-slate-400 mb-4">Full-Stack Web Developer</p>
              <p className="text-sm text-slate-500">Built with React + TypeScript</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex flex-wrap gap-4">
                {contacts.map((contact) => {
                  const IconComponent = getIcon(contact.icon);
                  return (
                    <a
                      key={contact.name}
                      href={contact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                      aria-label={contact.name}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} Afik Yefet. All rights reserved.</p>
            <a
              href="/Afik Yefet - Resume 2026.pdf"
              download
              className="px-4 py-2 rounded-lg bg-accent hover:bg-accent-dark transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

