import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "Proviz School of AI",
      position: "Web Developer Intern",
      period: "November 2024 - Present",
      location: "Remote",
      points: [
        "Developed, maintained, and optimized dynamic React-based web pages to enhance usability and align with the educational objectives",
        "United with cross-functional teams on UI/UX improvements, incorporating user feedback to boost satisfaction metrics by 15%"
      ]
    },
    {
      company: "Ricoz",
      position: "ReactJS Developer Intern",
      period: "May 2024 - August 2024",
      location: "Remote",
      points: [
        "Led the development of responsive front-end applications using ReactJS, enhancing usability for over 5,000 monthly users",
        "Reduced page load times by 20% through performance optimization, improving user retention and reducing error rates by 30%"
      ]
    },
    {
      company: "Physics Wallah",
      position: "Full Stack Developer",
      period: "April 2023 - September 2023",
      location: "Remote",
      points: [
        "Designed and implemented scalable front-end components using ReactJS and Redux",
        "Improved application speed and reduced load times by 30%"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-tertiary">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-primary/50 p-6 rounded-lg card-hover"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-secondary">{exp.position}</h3>
                  <p className="text-textSecondary">{exp.company}</p>
                </div>
                <div className="text-sm text-textSecondary mt-2 md:mt-0">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-textSecondary">
                {exp.points.map((point, i) => (
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

export default Experience;