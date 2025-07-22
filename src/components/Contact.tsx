import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: "Email",
      value: "rajmourya9536@gmail.com",
      link: "mailto:rajmourya9536@gmail.com"
    },
    {
      icon: <Phone className="text-accent" size={24} />,
      title: "Phone",
      value: "+91 9536307263",
      link: "tel:+919536307263"
    },
    {
      icon: <MapPin className="text-success" size={24} />,
      title: "Location",
      value: "Bareilly, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/Raj9536",
      color: "hover:text-foreground"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://linkedin.com/in/raj-kumar-mourya9536",
      color: "hover:text-primary"
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      url: "mailto:rajmourya9536@gmail.com",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how we can work together to bring your ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="card-gradient rounded-xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="contact-input w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="contact-input w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="contact-input w-full"
                      placeholder="Project discussion, collaboration, etc."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="contact-input w-full resize-none"
                      placeholder="Tell me about your project, requirements, or any questions you have..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-hero flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {/* Contact Details */}
              <div className="card-gradient rounded-xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start space-x-4">
                      <div className="p-3 bg-secondary rounded-lg flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="card-gradient rounded-xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Connect on Social Media
                </h3>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-secondary text-muted-foreground rounded-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="card-gradient rounded-xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Availability
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span className="text-foreground font-medium">Available for new opportunities</span>
                  </div>
                  <p className="text-muted-foreground text-sm ml-6">
                    Open to full-time positions and freelance projects
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">Response time: 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="card-gradient rounded-xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Whether you need DevOps solutions, cloud infrastructure, or web development, 
                I'm here to help turn your vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:rajmourya9536@gmail.com"
                  className="inline-flex items-center space-x-2 btn-hero"
                >
                  <Mail size={16} />
                  <span>Email Me Directly</span>
                </a>
                <a
                  href="https://linkedin.com/in/raj-kumar-mourya9536"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 btn-secondary"
                >
                  <ExternalLink size={16} />
                  <span>View LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;