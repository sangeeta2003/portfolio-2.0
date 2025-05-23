import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Coddit",
      description: "A social media platform built with modern web technologies",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      points: [
        "Developed an engaging social media platform using HTML, CSS, React JS, Node.js, and MongoDB",
        "Implemented secure user authentication and authorization to protect user data and ensure privacy"
      ],
      github: "https://github.com/your-username/coddit",
      live: "https://coddit.com"
    },
    {
        title: "Eco",
        description: "A delivery service platform built with modern web technologies",
        technologies: ["React", "JavaScript", "ExpressJS", "MongoDB"],
        points: [
          "Designed intuitive and responsive interfaces using ReactJS and JavaScript, ensuring smooth user experience",
          "Optimized application for cross-browser compatibility and responsive design, reaching a wider audience",
          "Collaborated with backend teams to integrate ExpressJS and MongoDB for efficient data handling"
        ],
        github: "https://github.com/your-username/eco",
        live: "https://eco-demo.com"
      },
    // Add more projects here
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-tertiary p-6 rounded-lg card-hover"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-secondary">{project.title}</h3>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textSecondary hover:text-secondary transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textSecondary hover:text-secondary transition-colors"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>

              <p className="text-textSecondary mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/50 text-secondary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="list-disc list-inside space-y-2 text-textSecondary">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;