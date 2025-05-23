import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import CVDownload from './CvDoanload';

const Hero = () => {
  const socialLinks = [
    { 
      icon: <FaGithub size={24} />, 
      url: "https://github.com/sangeeta2003",
      label: "GitHub"
    },
    { 
      icon: <FaLinkedin size={24} />, 
      url: "https://www.linkedin.com/in/sangeeta-mishra-470bb922b/",
      label: "LinkedIn"
    },
    { 
      icon: <FaTwitter size={24} />, 
      url: "https://x.com/_vaaar_",
      label: "Twitter"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-secondary">Sangeeta</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-textSecondary mb-6">
              Full Stack Developer
            </h2>
            <p className="text-textSecondary max-w-2xl mb-8">
              A passionate Full Stack Developer with a keen eye for detail and a love for creating beautiful, functional applications.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <CVDownload />
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textSecondary hover:text-secondary transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Decorative elements */}
              <motion.div
                className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Profile image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-secondary/20">
                <img
                  src="/image.png" // Add your photo here
                  alt="Sangeeta Mishra"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative dots */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;