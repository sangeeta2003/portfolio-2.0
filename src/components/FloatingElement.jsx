import { motion } from 'framer-motion';

const FloatingElements = () => {
  const elements = [
    { text: "React", delay: 0 },
    { text: "Node.js", delay: 0.2 },
    { text: "TypeScript", delay: 0.4 },
    { text: "MongoDB", delay: 0.6 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-textSecondary/20 text-6xl font-bold"
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
            delay: element.delay,
          }}
        >
          {element.text}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;