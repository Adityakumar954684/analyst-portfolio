import { Layout } from "@/components/Layout";
import { SectionHeading, GlassCard } from "@/components/ui/custom";
import { Button } from "@/components/ui/button";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Wrench,
} from "lucide-react";

const experience = [
  {
    title: "Data Analyst / MIS Executive",
    company: "Indo-MIM Pvt. Ltd.",
    period: "2025 - Present",
    responsibilities: [
      "Analyzed production, machine-wise, and part-wise data",
      "Prepared daily, weekly, and monthly MIS reports using Excel",
      "Cleaned and maintained manufacturing and operational datasets",
      "Created structured reports for management decision-making",
      "Tracked output, rejection, and performance metrics",
    ],
  },
  // {
  //   title: "Mechanical Design Assistant",
  //   company: "Indo-MIM Pvt. Ltd.",
  //   period: "2025 - Present",
  //   responsibilities: [
  //     "Assisted in mechanical part designing as per production requirements",
  //     "Worked on part drawings, specifications, and design documentation",
  //     "Coordinated with manufacturing teams for design clarification and updates",
  //     "Maintained design-related data and part records",
  //     "Supported improvements in part accuracy and production readiness",
  //   ],
  // },
  
];

const education = [
  {
    degree: "B.Tech in CSE(Data Science)",
    institution: "Sri Venkateswara College Of Engineering & Technology",
    year: "2022 - 2026",
    // grade: "CGPA: 8.5/10",
  },
];

const tools = [
  "Microsoft Excel",
  "SQL",
  "Power BI",
  "Python",
  "Pandas",
  "NumPy",
  "Google Sheets",
  "PowerPoint",
  "Cenvas",
];

const certifications = [
  "Google Data Analytics Professional Certificate",
  "Microsoft Power BI Data Analyst",
  "SQL for Data Science - Coursera",
  "Python for Data Science - IBM",
];

export default function Resume() {
  return (
    <Layout>
      <section className="section-padding pt-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Resume"
            title="Professional Experience"
            subtitle="A comprehensive overview of my career journey and qualifications"
          />

          {/* Download Button */}
          <div className="text-center mb-12">
            <Button variant="gradient" size="lg">
              <Download className="w-5 h-5" />
              Download Resume PDF
            </Button>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Contact Info */}
            <GlassCard>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-glow">
                    AK
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Aditya Kumar
                    </h3>
                    <p className="text-primary font-medium">Data Analyst</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    adityakumarsingha2004@gmail.com
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    +91 9117280503
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    India
                  </span>
                </div>
              </div>
            </GlassCard>

            {/* Experience */}
            <GlassCard>
              <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Work Experience
              </h4>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div
                    key={index}
                    className="pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <div>
                        <h5 className="font-semibold text-foreground">
                          {job.title}
                        </h5>
                        <p className="text-primary text-sm">{job.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-1 mt-3">
                      {job.responsibilities.map((resp, rIndex) => (
                        <li
                          key={rIndex}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <GlassCard>
                <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Education
                </h4>
                {education.map((edu, index) => (
                  <div key={index}>
                    <h5 className="font-semibold text-foreground">
                      {edu.degree}
                    </h5>
                    <p className="text-primary text-sm">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {edu.year} 
                    </p>
                  </div>
                ))}
              </GlassCard>

              {/* Tools */}
              <GlassCard>
                <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-primary" />
                  Tools & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>

            
          </div>
        </div>
      </section>
    </Layout>
  );
}
