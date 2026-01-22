import { Layout } from "@/components/Layout";
import { SectionHeading, GlassCard } from "@/components/ui/custom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Award,
  Target,
  Briefcase,
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const achievements = [
  "Completed multiple data analysis projects using Excel, SQL, Power BI, and Python",
  "Created interactive dashboards for sales and business insights",
  "Performed data cleaning, transformation, and analysis on real-world datasets",
  "Developed strong understanding of data visualization and reporting",
];

const interests = [
  "Machine Learning",
  "Data Storytelling",
  "Business Analytics",
  "Process Optimization",
  "Statistical Modeling",
  "Predictive Analysis",
];

export default function About() {
  return (
    <Layout>
      <section className="section-padding pt-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="About Me"
            title="Turning Data Into Decisions"
            subtitle="A passionate data analyst dedicated to uncovering insights that drive meaningful business impact"
          />

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left - Profile */}
            <div className="space-y-8">
              {/* Avatar Card */}
              <GlassCard className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-32 h-32 rounded-2xl gradient-bg flex items-center justify-center shadow-glow flex-shrink-0 overflow-hidden">
                    <img
                      src="/ak.png"
                      alt="AK Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-foreground">
                      Aditya Kumar
                    </h3>
                    <p className="text-primary font-medium mt-1">
                      Data Analyst
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        India
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        1+ Month Exp
                      </span>
                    </div>
                  </div>
                </div>  
              </GlassCard>

              {/* Bio */}
              <GlassCard>
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Professional Summary
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a results-driven Data Analyst with expertise in transforming 
                  complex datasets into clear, actionable insights. With a strong 
                  foundation in data analysis, data visualization, and business 
                  intelligence tools, I help organizations make data-informed decisions 
                  that drive growth and efficiency.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  My approach combines technical proficiency with a deep understanding 
                  of business needs, ensuring that every analysis delivers measurable value. 
                  I'm particularly passionate about automating workflows and creating 
                  intuitive dashboards that empower stakeholders at all levels.
                </p>
              </GlassCard>
            </div>

            {/* Right - Details */}
            <div className="space-y-8">
              {/* Achievements */}
              <GlassCard>
                <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Key Achievements
                </h4>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Interests */}
              <GlassCard>
                <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Areas of Interest
                </h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </GlassCard>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gradient" size="lg" className="flex-1" asChild>
                  <Link to="/projects">
                    View Projects
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="flex-1" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
