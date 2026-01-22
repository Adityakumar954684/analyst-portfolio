import { Layout } from "@/components/Layout";
import { SectionHeading, GlassCard, SkillBar } from "@/components/ui/custom";
import {
  Database,
  BarChart3,
  Code2,
  Table,
  PieChart,
  LineChart,
  Braces,
  FileSpreadsheet,
} from "lucide-react";

const technicalSkills = [
  { name: "Microsoft Excel", level: 95, icon: <FileSpreadsheet className="w-4 h-4" /> },
  { name: "SQL", level: 90, icon: <Database className="w-4 h-4" /> },
  { name: "Power BI", level: 88, icon: <PieChart className="w-4 h-4" /> },
  { name: "Python (Pandas)", level: 85, icon: <Code2 className="w-4 h-4" /> },
  { name: "Python (NumPy)", level: 82, icon: <Braces className="w-4 h-4" /> },
  // { name: "Tableau", level: 78, icon: <LineChart className="w-4 h-4" /> },
];

const tools = [
  { name: "Excel", category: "Spreadsheets", icon: FileSpreadsheet },
  { name: "SQL Server", category: "Database", icon: Database },
  { name: "Power BI", category: "Visualization", icon: BarChart3 },
  { name: "Python", category: "Programming", icon: Code2 },
  { name: "Tableau", category: "Visualization", icon: PieChart },
  { name: "Google Sheets", category: "Spreadsheets", icon: Table },
];

const softSkills = [
  "Problem Solving",
  "Critical Thinking",
  "Communication",
  "Team Collaboration",
  "Attention to Detail",
  "Time Management",
  "Adaptability",
  "Presentation Skills",
];

export default function Skills() {
  return (
    <Layout>
      <section className="section-padding pt-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Skills"
            title="Technical Expertise"
            subtitle="A comprehensive toolkit for data analysis, visualization, and business intelligence"
          />

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left - Technical Skills */}
            <div className="space-y-8">
              <GlassCard>
                <h4 className="font-semibold text-foreground mb-8 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-primary" />
                  Technical Proficiency
                </h4>
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <SkillBar
                      key={index}
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </GlassCard>

              {/* Soft Skills */}
              <GlassCard>
                <h4 className="font-semibold text-foreground mb-6">
                  Soft Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Right - Tools Grid */}
            <div>
              <GlassCard>
                <h4 className="font-semibold text-foreground mb-8 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Tools & Technologies
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:-translate-y-1 cursor-default group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                        <tool.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h5 className="font-semibold text-foreground">
                        {tool.name}
                      </h5>
                      <p className="text-sm text-muted-foreground mt-1">
                        {tool.category}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Additional Info */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                <p className="text-center text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Continuously Learning
                  </span>
                  <br />
                  Currently exploring advanced machine learning techniques and
                  cloud-based analytics platforms
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
