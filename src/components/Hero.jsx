// import { motion } from 'framer-motion';
// import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center section-padding">
//       <div className="container-custom">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-secondary mb-4"
//           >
//             Hi, my name is
//           </motion.p>
          
//           <motion.h1
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
//           >
//             Sangeeta Mishra
//           </motion.h1>
          
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="text-2xl md:text-3xl text-textSecondary mb-8"
//           >
//             Full Stack Developer
//           </motion.p>
          
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="flex justify-center space-x-6"
//           >
//             <a
//               href="https://linkedin.com/in/your-profile"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-2xl text-textSecondary hover:text-secondary transition-colors"
//             >
//               <FaLinkedin />
//             </a>
//             <a
//               href="https://github.com/your-profile"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-2xl text-textSecondary hover:text-secondary transition-colors"
//             >
//               <FaGithub />
//             </a>
//             <a
//               href="mailto:mishrasangeeta944@gmail.com"
//               className="text-2xl text-textSecondary hover:text-secondary transition-colors"
//             >
//               <FaEnvelope />
//             </a>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-secondary rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hi, I'm <span className="text-secondary">Sangeeta</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-textSecondary mb-8"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-textSecondary max-w-2xl mx-auto mb-8"
          >
            I build exceptional digital experiences that make an impact.
            Specializing in creating software solutions that are both
            beautiful and functional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
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
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-secondary rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;