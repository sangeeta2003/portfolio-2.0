import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Java", "Python", "C", "C++"]
    },
    {
      category: "Web Development",
      items: ["HTML5", "CSS3", "JavaScript", "React"]
    },
    {
      category: "Database Technologies",
      items: ["SQL", "MongoDB"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js"]
    },
    {
      category: "Core CS Subjects",
      items: ["DBMS", "OOPS", "OS", "Networking", "Cloud computing"]
    },
    {
      category: "Behavioral Skills",
      items: ["Teamwork", "Adaptability", "Quick Learner"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-tertiary p-6 rounded-lg card-hover"
            >
              <h3 className="text-xl font-semibold mb-4 text-secondary">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/50 text-secondary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;