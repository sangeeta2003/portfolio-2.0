import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-tertiary">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-textSecondary">
              Highly motivated computer science student with a strong foundation in programming and problem-solving. 
              Seeking opportunities to leverage my technical expertise and passion for innovation to deliver impactful solutions.
            </p>
            <p className="text-textSecondary">
              I'm currently pursuing my Bachelor's degree in Computer Science at Government College of Engineering Kalahandi, 
              where I've maintained a CGPA of 8.5/10.0.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary/50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-secondary">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Government College of Engineering Kalahandi</h4>
                <p className="text-textSecondary">Bachelor of Technology - Computer Science</p>
                <p className="text-sm text-textSecondary">2021 – 2025 • CGPA: 8.5/10.0</p>
              </div>
              <div>
                <h4 className="font-medium">Science H S School</h4>
                <p className="text-textSecondary">12th CHSE</p>
                <p className="text-sm text-textSecondary">2020 – 2021 • Percentage: 80.67</p>
              </div>
              <div>
                <h4 className="font-medium">Girls high school</h4>
                <p className="text-textSecondary">10th BSE</p>
                <p className="text-sm text-textSecondary">2018 – 2019 • Percentage: 81.67</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;