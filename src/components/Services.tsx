import { 
  Cloud, 
  Code, 
  Server, 
  Shield, 
  Zap, 
  Monitor,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "DevOps Solutions",
      description: "Complete DevOps transformation services to streamline your development and deployment processes.",
      icon: <Server className="text-primary" size={32} />,
      color: "primary",
      features: [
        "CI/CD Pipeline Setup",
        "Dockerized Applications",
        "Kubernetes Deployments",
        "AWS Infrastructure Automation",
        "Monitoring & Alerting",
        "Infrastructure as Code"
      ],
      technologies: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS", "Git"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Design and implement scalable, secure, and cost-effective cloud solutions on AWS.",
      icon: <Cloud className="text-accent" size={32} />,
      color: "accent",
      features: [
        "AWS Architecture Design",
        "Serverless Solutions",
        "Cost Optimization",
        "Security Implementation",
        "Auto-scaling Setup",
        "Disaster Recovery"
      ],
      technologies: ["AWS", "Lambda", "EC2", "S3", "RDS", "CloudWatch"]
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with the latest technologies and best practices.",
      icon: <Code className="text-success" size={32} />,
      color: "success",
      features: [
        "React.js Applications",
        "Responsive Design",
        "Material-UI Integration",
        "Performance Optimization",
        "SEO Optimization",
        "Cross-browser Compatibility"
      ],
      technologies: ["React.js", "TypeScript", "Material-UI", "CSS3", "JavaScript"]
    },
    {
      title: "System Monitoring",
      description: "Comprehensive monitoring solutions to ensure your systems run smoothly and efficiently.",
      icon: <Monitor className="text-warning" size={32} />,
      color: "warning",
      features: [
        "Performance Monitoring",
        "Log Management",
        "Alert Configuration",
        "Dashboard Creation",
        "Capacity Planning",
        "Incident Response"
      ],
      technologies: ["Prometheus", "Grafana", "Alertmanager", "ELK Stack", "CloudWatch"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "border-primary/20 hover:border-primary/40 hover:shadow-primary/20",
      accent: "border-accent/20 hover:border-accent/40 hover:shadow-accent/20",
      success: "border-success/20 hover:border-success/40 hover:shadow-success/20",
      warning: "border-warning/20 hover:border-warning/40 hover:shadow-warning/20"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "Understanding your requirements, current infrastructure, and business goals."
    },
    {
      number: "02", 
      title: "Planning & Design",
      description: "Creating detailed technical specifications and architecture diagrams."
    },
    {
      number: "03",
      title: "Implementation",
      description: "Building and deploying solutions with best practices and thorough testing."
    },
    {
      number: "04",
      title: "Optimization & Support",
      description: "Continuous monitoring, optimization, and ongoing support."
    }
  ];

  return (
    <section id="services" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technical solutions to help your business scale and succeed
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`card-gradient rounded-xl p-6 border-2 transition-all duration-300 hover:shadow-xl card-hover animate-slide-up ${getColorClasses(service.color)}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-3 bg-${service.color}/10 rounded-lg flex-shrink-0`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className={`text-${service.color} flex-shrink-0`} size={16} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-4 border-t border-border">
                  <button className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors group">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                How I Work
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My structured approach ensures successful project delivery and client satisfaction
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div 
                  key={step.number}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                      {step.number}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border"></div>
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="card-gradient rounded-xl p-8 border border-primary/20">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Zap className="text-primary" size={32} />
                <h3 className="text-2xl font-bold text-foreground">
                  Ready to Get Started?
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Let's discuss your project requirements and how I can help bring your ideas to life.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;