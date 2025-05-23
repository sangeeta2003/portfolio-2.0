import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const CVDownload = () => {
  return (
    <motion.a
      href="/cv.pdf" // Add your CV file path here
      download
      className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/80 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <FaDownload />
      Download CV
    </motion.a>
  );
};

export default CVDownload;