import React from 'react';
import { Github, Linkedin, Mail, Twitter, FileText } from 'lucide-react';
import { footerData } from '../../data/footerData';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-nord-4 bg-nord-6 py-6 dark:border-nord-3 dark:bg-nord-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <a
              href={footerData.resume.url}
              className="flex items-center gap-2 text-nord-3 transition-colors duration-300 hover:text-frost-darker dark:text-nord-4 dark:hover:text-frost-medium"
              download={footerData.resume.fileName}
            >
              <FileText size={20} />
              <span className="text-sm font-medium">Download CV</span>
            </a>
          </div>

          <div className="flex space-x-4">
            <a
              href={footerData.socialLinks.linkedin}
              className="text-nord-3 transition-colors duration-300 hover:text-frost-darker dark:text-nord-4 dark:hover:text-frost-medium"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={footerData.socialLinks.github}
              className="text-nord-3 transition-colors duration-300 hover:text-frost-darker dark:text-nord-4 dark:hover:text-frost-medium"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a
              href={footerData.socialLinks.twitter}
              className="text-nord-3 transition-colors duration-300 hover:text-frost-darker dark:text-nord-4 dark:hover:text-frost-medium"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={20} />
            </a>
            <a
              href={footerData.socialLinks.email}
              className="text-nord-3 transition-colors duration-300 hover:text-frost-darker dark:text-nord-4 dark:hover:text-frost-medium"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
