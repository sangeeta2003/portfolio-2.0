import { motion } from 'framer-motion';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "LeetCode",
      icon: <SiLeetcode className="text-[#FFA116]" />,
      url: "https://leetcode.com/u/Sangeeta_/",
      stats: {
        solved: "150+",
        rating: "1500+",
        rank: "Top 20%"
      }
    },
    {
      platform: "GeeksforGeeks",
      icon: <SiGeeksforgeeks className="text-[#2F8D46]" />,
      url: "https://www.geeksforgeeks.org/user/mishrasanjnck/",
      stats: {
        solved: "133",
        score: "338",
        rank: "10"
      }
    }
  ];

  return (
    <section id="coding-profiles" className="py-20 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Coding Profiles
          </h2>
          <p className="text-textSecondary">
            My journey in competitive programming and problem solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-tertiary dark:bg-tertiary-light p-6 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{profile.icon}</div>
                  <h3 className="text-2xl font-bold">{profile.platform}</h3>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(profile.stats).map(([key, value], i) => (
                    <motion.div
                      key={i}
                      className="text-center p-4 bg-primary/50 dark:bg-primary-light/50 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-secondary mb-1">
                        {value}
                      </div>
                      <div className="text-sm text-textSecondary capitalize">
                        {key}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="absolute bottom-4 right-4 text-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCode size={24} />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Floating code elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-textSecondary/10 text-2xl"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotate: Math.random() * 360,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {['{', '}', '<', '>', ';', '(', ')', '[', ']', '='][i]}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;