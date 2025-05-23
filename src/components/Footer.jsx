import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <FaGithub size={20} />, 
      url: "https://github.com/sangeeta2003",
      label: "GitHub"
    },
    { 
      icon: <FaLinkedin size={20} />, 
      url: "https://www.linkedin.com/in/sangeeta-mishra-470bb922b/",
      label: "LinkedIn"
    },
    { 
      icon: <FaTwitter size={20} />, 
      url: "https://x.com/_vaaar_",
      label: "Twitter"
    }
  ];

  return (
    <footer className="bg-tertiary dark:bg-tertiary-light py-8">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <p className="text-textSecondary text-sm">
            © {new Date().getFullYear()} Sangeeta Mishra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;