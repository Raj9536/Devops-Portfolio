import { 
  Cloud, 
  Server, 
  Database, 
  Code, 
  Network, 
  Shield, 
  Brain, 
  Lightbulb,
  Zap,
  Settings
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: <Cloud className="text-primary" size={32} />,
      skills: ["AWS EC2", "AWS S3", "AWS IAM", "AWS VPC", "AWS RDS", "AWS Lambda", "Serverless"]
    },
    {
      title: "DevOps Tools",
      icon: <Settings className="text-accent" size={32} />,
      skills: ["Docker", "Kubernetes", "Git", "GitHub", "Jenkins", "Terraform"]
    },
    {
      title: "Core Technologies",
      icon: <Server className="text-success" size={32} />,
      skills: ["Linux", "Networking", "Virtualization","Python", "React.js", "Material-UI"]
    },
    {
      title: "Soft Skills",
      icon: <Brain className="text-warning" size={32} />,
      skills: ["Problem Solving", "Fast Learner", "Curiosity", "Team Collaboration"]
    }
  ];

  const certifications = [
    { name: "Cloud Computing Foundation", credentialId: "A99889B467F8", status: "Completed", verificationLink: "https://verify.acloud.guru/A99889B467F8" },
    { name: "AWS Educate Getting Started with Serverless", credentialId: "Amazon Web Services Training and Certification", status: "Completed", verificationLink: "https://www.credly.com/badges/0797a3f0-229b-4e47-95f0-721a566d3996/public_url" },
    { name: "AWS Educate Getting Started with Security", credentialId: "Amazon Web Services Training and Certification", status: "Completed", verificationLink: "https://www.credly.com/badges/f5ebc1b6-cc94-456d-827c-6f67434cf9d6/public_url" },
    { name: "Docker Training Course", credentialId: "cff32941-1442-43bb-a45c-e10668fb23b9", status: "Completed", verificationLink: "https://learn.kodekloud.com/certificate/cff32941-1442-43bb-a45c-e10668fb23b9" }, 
    { name: "Google Cloud Arcade", credentialId: "31 Points Earned", status: "Swags Achieved", verificationLink: "https://example.com/verify/google-cloud-arcade" }, 
    { name: "AWS Cloud Practitioner", credentialId: "", status: "In Progress", verificationLink: "" },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to build amazing solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="card-gradient rounded-xl p-6 card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  {category.icon}
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Achievements */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <div className="card-gradient rounded-xl p-6 animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Certifications
                </h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex flex-col p-3 bg-secondary rounded-lg">
                    <div className="flex justify-between">
                      <a href={cert.verificationLink || '#'} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:underline">
                        {cert.name}
                      </a>
                      <span className="text-sm text-primary font-medium">{cert.status}</span>
                    </div>
                    {cert.credentialId && (
                      <div className="text-sm text-muted-foreground mt-1">
                        Credential ID: {cert.credentialId}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Approach */}
            <div className="card-gradient rounded-xl p-6 animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Lightbulb className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Learning Philosophy
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Zap className="text-primary mt-1 flex-shrink-0" size={16} />
                  <p className="text-muted-foreground">
                    Always curious about emerging technologies and industry best practices
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="text-primary mt-1 flex-shrink-0" size={16} />
                  <p className="text-muted-foreground">
                    Hands-on approach to learning through real-world projects
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="text-primary mt-1 flex-shrink-0" size={16} />
                  <p className="text-muted-foreground">
                    Focus on efficient problem-solving and scalable solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;