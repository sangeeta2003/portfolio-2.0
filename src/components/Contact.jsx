import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      text: "mishrasangeeta944@gmail.com",
      link: "mailto:mishrasangeeta944@gmail.com"
    },
    {
      icon: <FaPhone />,
      text: "+91 8926274579",
      link: "tel:+918926274579"
    },
    {
      icon: <FaLinkedin />,
      text: "LinkedIn Profile",
      link: "https://linkedin.com/in/your-profile"
    },
    {
      icon: <FaGithub />,
      text: "GitHub Profile",
      link: "https://github.com/your-profile"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-tertiary">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Contact Me
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/50 p-8 rounded-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 text-textSecondary hover:text-secondary transition-colors"
                >
                  <span className="text-xl">{info.icon}</span>
                  <span>{info.text}</span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-center"
            >
              <p className="text-textSecondary">
                I'm currently available for new opportunities. Feel free to reach out!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;