import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-textSecondary"
        >
          <p>© {new Date().getFullYear()} Sangeeta Mishra. All rights reserved.</p>
          <p className="mt-2">
            Built with ❤️ using React and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;