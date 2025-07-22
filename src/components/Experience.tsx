import { Briefcase, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "DevOps Engineer Intern",
      company: "Elevate Labs",
      duration: "Apr 2025 – May 2025",
      location: "Remote",
      type: "Internship",
      description: "Gained hands-on experience with DevOps pipelines and infrastructure monitoring, working with cloud technologies and automation tools.",
      skills: ["DevOps Pipelines", "Infrastructure Monitoring", "Cloud Technologies", "Automation"],
      color: "primary"
    },
    {
      title: "Software Trainee Intern",
      company: "Techvision Technologies",
      duration: "Jul 2024 – Aug 2024",
      location: "On-site",
      type: "Training",
      description: "Worked on software development fundamentals in an offline setting, building foundation in programming and development practices.",
      skills: ["Software Development", "Programming Fundamentals", "Development Practices"],
      color: "accent"
    },
    {
      title: "Google Cloud Arcade Participant",
      company: "Google Cloud",
      duration: "Jul 2024 – Dec 2024",
      location: "Part-time",
      type: "Program",
      description: "Earned 31 points and won GCP swags through hands-on labs and challenges. Gained practical experience with Google Cloud Platform services.",
      skills: ["Google Cloud Platform", "Cloud Labs", "GCP Services", "Cloud Architecture"],
      color: "success"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "border-primary/30 bg-primary/5",
      accent: "border-accent/30 bg-accent/5",
      success: "border-success/30 bg-success/5"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const getIconColor = (color: string) => {
    const colorMap = {
      primary: "text-primary",
      accent: "text-accent",
      success: "text-success"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="experience" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and learning experiences
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative mb-12 animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-2 md:left-1/2 w-4 h-4 ${getColorClasses(exp.color)} border-2 rounded-full transform md:-translate-x-1/2 z-10`}>
                  <div className={`w-2 h-2 ${getIconColor(exp.color)} bg-current rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-1/2'}`}>
                  <div className="card-gradient rounded-xl p-6 card-hover">
                    {/* Header */}
                    <div className="flex flex-col md:items-start space-y-2 mb-4">
                      <div className="flex items-center space-x-2">
                        <Briefcase className={getIconColor(exp.color)} size={20} />
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${getColorClasses(exp.color)}`}>
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold text-primary">
                        {exp.company}
                      </p>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="tech-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="card-gradient rounded-xl p-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Award className="text-primary" size={32} />
                <h3 className="text-xl font-bold text-foreground">
                  Ready for New Opportunities
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                I'm actively seeking full-time opportunities in DevOps, Cloud Engineering, and Software Development.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 btn-hero"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Let's Connect</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;