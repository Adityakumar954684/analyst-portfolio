import { Layout } from "@/components/Layout";
import { SectionHeading, GlassCard } from "@/components/ui/custom";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BarChart3, Database, LineChart } from "lucide-react";

const projects = [
  {
    title: "Sales Analytics Dashboard",
    description:
      "Interactive Power BI dashboard analyzing sales performance across regions, products, and time periods. Features dynamic filtering, drill-down capabilities, and automated data refresh.",
    image: "gradient-1",
    tags: ["Power BI", "DAX", "SQL"],
    icon: BarChart3,
    highlights: [
      "Real-time KPI tracking",
      "Revenue forecasting",
      "Regional comparisons",
    ],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Machine learning model to predict customer churn using Python. Implemented data preprocessing, feature engineering, and model evaluation with 85% accuracy.",
    image: "gradient-2",
    tags: ["Python", "Pandas", "Scikit-learn"],
    icon: Database,
    highlights: [
      "85% prediction accuracy",
      "Feature importance analysis",
      "Actionable insights",
    ],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Financial Data Automation",
    description:
      "Automated financial reporting pipeline using Python and SQL. Reduced manual processing time by 60% and improved data accuracy through validation checks.",
    image: "gradient-3",
    tags: ["Python", "SQL", "Excel"],
    icon: LineChart,
    highlights: [
      "60% time reduction",
      "Automated validation",
      "Scheduled reports",
    ],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

const gradients = {
  "gradient-1": "from-primary to-accent",
  "gradient-2": "from-accent to-primary",
  "gradient-3": "from-primary/80 to-accent/80",
};

export default function Projects() {
  return (
    <Layout>
      <section className="section-padding pt-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Portfolio"
            title="Featured Projects"
            subtitle="A showcase of data analysis, visualization, and automation projects"
          />

          <div className="space-y-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <GlassCard key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Project Image/Visual */}
                  <div
                    className={`aspect-video md:aspect-auto rounded-xl bg-gradient-to-br ${
                      gradients[project.image as keyof typeof gradients]
                    } flex items-center justify-center relative overflow-hidden group`}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--card)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--card)/0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                    <project.icon className="w-20 h-20 text-primary-foreground/80 group-hover:scale-110 transition-transform duration-500" />
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 rounded-lg bg-primary-foreground/10 backdrop-blur-sm animate-float" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm animate-float delay-500" />
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <div
                          key={hIndex}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-muted-foreground">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-4">
                      <Button variant="gradient" size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
