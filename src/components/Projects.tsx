import { ExternalLink, Github, Cloud, Database, Smartphone, Monitor, Crop } from 'lucide-react';
import awscostopt from '../assets/awscostopt.png';
import csvfileprocessing from '../assets/csvfileprocessing.png';
import selfhealinginfra from '../assets/selfhealinginfra.png'
import linkimage from '../assets/linkimage.png'

const Projects = () => {
const projects = [
    {
      title: "AWS Cost Optimization",
      description: "Developed an automated solution to identify and delete stale EBS snapshots using AWS Lambda, resulting in significant cost reduction for cloud infrastructure.",
      longDescription: "Built a serverless cost optimization tool that automatically scans for unused EBS snapshots and removes them based on configurable retention policies.",
      icon: <Cloud className="text-primary" size={32} />,
      image: awscostopt,
      githubUrl: "https://github.com/Raj9536/aws-cost-optimization",
      technologies: ["AWS Lambda", "EBS", "CloudWatch", "IAM", "Python"],
      category: "Cloud Infrastructure",
      features: [
        "Automated snapshot lifecycle management",
        "Cost tracking and reporting",
        "Configurable retention policies",
        "CloudWatch integration for monitoring"
      ]
    },
    {
      title: "CSV File Processing Pipeline",
      description: "Built a comprehensive serverless pipeline for processing CSV files using multiple AWS services, demonstrating scalable data processing architecture.",
      longDescription: "Created an end-to-end serverless data processing pipeline that handles CSV file uploads, processing, validation, and storage with real-time monitoring.",
      icon: <Database className="text-accent" size={32} />,
      image: csvfileprocessing,
      githubUrl: "https://github.com/Raj9536/csv-file-processing-pipeline",
      technologies: ["AWS S3", "Lambda", "DynamoDB", "IAM", "CloudWatch"],
      category: "Data Processing",
      features: [
        "Serverless architecture",
        "Real-time data validation",
        "Error handling and logging",
        "Scalable processing pipeline"
      ]
    },
    {
      title: "Self-Healing Infrastructure",
      description: "Implemented an intelligent monitoring and auto-recovery system using Prometheus, Alertmanager, and Ansible for NGINX services.",
      longDescription: "Designed a robust self-healing system that automatically detects service failures and performs recovery actions without manual intervention.",
      icon: <Monitor className="text-success" size={32} />,
      image: selfhealinginfra,
      githubUrl: "https://github.com/Raj9536/self-healing-infrastructure",
      technologies: ["Prometheus", "Alertmanager", "Ansible", "NGINX", "Docker"],
      category: "DevOps & Monitoring",
      features: [
        "Automated failure detection",
        "Self-recovery mechanisms",
        "Performance monitoring",
        "Alert management system"
      ]
    },
    {
      title: "Instagram Clone Web App",
      description: "Developed a full-featured social media application with modern UI/UX, including profiles, stories, posts, and direct messaging functionality.",
      longDescription: "Built a responsive Instagram-like application showcasing advanced React.js skills with Material-UI for elegant user interface design.",
      icon: <Smartphone className="text-warning" size={32} />,
      image: linkimage,
      githubUrl: "https://github.com/Raj9536/instagram-clone-web-app",
      technologies: ["React.js", "Material-UI", "JavaScript", "CSS3", "Responsive Design"],
      category: "Web Development",
      features: [
        "User profiles and authentication",
        "Story and post sharing",
        "Direct messaging system",
        "Responsive mobile-first design"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical skills and problem-solving abilities through real-world projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="project-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="p-2 bg-surface/90 backdrop-blur-sm rounded-lg">
                      {project.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                  <a
                    href="https://github.com/Raj9536"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary-hover transition-colors">
                      <ExternalLink size={16} />
                      <span>Learn More</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Link */}
          <div className="text-center mt-12 animate-fade-in">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com/Raj9536"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 btn-hero"
            >
              <Github size={20} />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;