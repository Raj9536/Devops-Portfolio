import { ChevronDown, Github, Linkedin, Mail, Sparkles, Code, Cloud } from 'lucide-react';
import profilePicture from '@/assets/profile-picture.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/8 to-primary-light/5"></div>
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-light rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary rotate-45 animate-spin-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-accent rotate-12 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary-light rounded-full animate-bounce-slow"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Picture with enhanced styling */}
          <div className="mb-12 animate-fade-in">
            <div className="relative inline-block group">
              {/* Floating elements around profile */}
              <div className="absolute -top-4 -right-4 p-2 bg-primary/20 backdrop-blur-sm rounded-full animate-float">
                <Code size={20} className="text-primary" />
              </div>
              <div className="absolute -bottom-2 -left-4 p-2 bg-accent/20 backdrop-blur-sm rounded-full animate-float-delayed">
                <Cloud size={18} className="text-accent" />
              </div>
              <div className="absolute top-2 -left-6 p-1.5 bg-primary-light/20 backdrop-blur-sm rounded-full animate-float-slow">
                <Sparkles size={16} className="text-primary-light" />
              </div>
              
              {/* Main profile image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary-light rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                <img
                  src={profilePicture}
                  alt="Raj Kumar Mourya"
                  className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover mx-auto ring-4 ring-background shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Main Content with enhanced typography */}
          <div className="space-y-8 animate-slide-up">
            {/* Enhanced greeting */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 text-primary font-medium text-sm animate-fade-in">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                Available for opportunities
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Hi, I'm{' '}
                <span className="hero-text relative">
                  Raj Kumar Mourya
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary-light rounded-full"></div>
                </span>
              </h1>
            </div>
            
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
                Cloud & DevOps Enthusiast | AWS Practitioner | Web Developer
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Aspiring DevOps Engineer with hands-on experience in AWS, Docker, Kubernetes, and Terraform. 
                Passionate about building scalable cloud solutions and modern web applications.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  View My Work
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                </span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-xl font-semibold bg-background border-2 border-primary/20 text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
              >
                Get In Touch
              </button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center space-x-8 mt-12">
              <a
                href="https://github.com/Raj9536"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl border border-border hover:border-primary"
              >
                <Github size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/raj-kumar-mourya9536"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl border border-border hover:border-primary"
              >
                <Linkedin size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="mailto:rajmourya9536@gmail.com"
                className="group p-4 bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl border border-border hover:border-primary"
              >
                <Mail size={24} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('about')}
            className="group flex flex-col items-center gap-2 p-3 text-muted-foreground hover:text-primary transition-all duration-300"
          >
            <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Scroll down</span>
            <div className="p-2 rounded-full border border-current group-hover:bg-primary/10 transition-all duration-300 animate-bounce">
              <ChevronDown size={20} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;