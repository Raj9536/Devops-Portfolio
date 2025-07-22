import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/Raj9536'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/raj-kumar-mourya9536'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:rajmourya9536@gmail.com'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary-hover transition-all duration-300 hover:-translate-y-1"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Raj Kumar Mourya</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Cloud & DevOps Enthusiast passionate about building scalable solutions 
              and helping businesses leverage the power of modern technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 text-background hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-background transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <a 
                  href="mailto:rajmourya9536@gmail.com"
                  className="hover:text-background transition-colors"
                >
                  rajmourya9536@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+919536307263"
                  className="hover:text-background transition-colors"
                >
                  +91 9536307263
                </a>
              </p>
              <p>Bareilly, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Raj Kumar Mourya. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} fill="currentColor" />
            <span>using React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;