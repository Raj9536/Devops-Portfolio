import { GraduationCap, MapPin, Calendar, Guitar } from 'lucide-react';
import profilePicture from '@/assets/profile-picture.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting to know the person behind the code
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="animate-scale-in">
              <div className="relative">
                <img
                  src={profilePicture}
                  alt="Raj Kumar Mourya"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 animate-slide-up">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Raj Kumar Mourya
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I've recently completed my final semester of B.Tech in IT from SRMS CET, Bareilly. 
                  My passion lies in cloud computing and DevOps. I've explored technologies like AWS, 
                  Docker, Jenkins, Kubernetes, and Terraform. I love solving problems efficiently and 
                  always strive to learn new things.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Outside of tech, I enjoy writing songs and playing guitar. Music helps me stay 
                  creative and brings balance to my technical pursuits.
                </p>
              </div>

              {/* Quick Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-surface rounded-lg shadow-sm">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Bareilly, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-surface rounded-lg shadow-sm">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Guitar className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Hobby</p>
                    <p className="font-medium text-foreground">Music & Guitar</p>
                  </div>
                </div>
              </div>

              {/* Education Timeline */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Education</h4>
                <div className="border-l-2 border-primary/30 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="bg-surface p-4 rounded-lg shadow-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <GraduationCap className="text-primary" size={20} />
                      <h5 className="font-semibold text-foreground">
                        Bachelor of Technology - Information Technology
                      </h5>
                    </div>
                    <p className="text-muted-foreground mb-1">
                      SRMS College of Engineering & Technology, Bareilly
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar size={16} />
                      <span>2021 – 2025 (Awaiting final results)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;