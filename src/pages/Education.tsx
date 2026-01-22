import { Layout } from "@/components/Layout";
import { SectionHeading, GlassCard, TimelineItem } from "@/components/ui/custom";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const education = [
  {
    year: "2022 - 2026",
    title: "Bachelor of Technology in CSE(Data Science)",
    subtitle: "Sri Venkateswara College Of Engineering & Technology",
    description:
      "CGPA: 7.71",
  },
  {
    year: "2020 - 2022",
    title: "Higher Secondary Education (XII)",
    subtitle: "Jaddu Ram Charitra College",
   
  },
  {
    year: "2019 - 2020",
    title: "Secondary Education (X)",
    subtitle: "Boy's High School",
   
  },
];

// const courses = [
//   "Data Structures & Algorithms",
//   "Database Management Systems",
//   "Statistical Methods",
//   "Machine Learning",
//   "Data Mining",
//   "Business Analytics",
//   "Big Data Technologies",
//   "Python for Data Science",
// ];

// const certifications = [
//   {
//     title: "Google Data Analytics Professional Certificate",
//     issuer: "Google",
//     year: "2023",
//   },
//   {
//     title: "Microsoft Power BI Data Analyst",
//     issuer: "Microsoft",
//     year: "2023",
//   },
//   {
//     title: "SQL for Data Science",
//     issuer: "Coursera - UC Davis",
//     year: "2022",
//   },
//   {
//     title: "Python for Data Science and AI",
//     issuer: "IBM",
//     year: "2022",
//   },
// ];

export default function Education() {
  return (
    <Layout>
      <section className="section-padding pt-32">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Education"
            title="Academic Background"
            subtitle="A strong foundation in computer science and continuous learning in data analytics"
          />

          <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
            {/* Left - Timeline */}
            <div>
              <GlassCard>
                <h4 className="font-semibold text-foreground mb-8 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Education Timeline
                </h4>
                <div>
                  {education.map((item, index) => (
                    <TimelineItem
                      key={index}
                      year={item.year}
                      title={item.title}
                      subtitle={item.subtitle}
                      description={item.description}
                      isLast={index === education.length - 1}
                    />
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Right - Courses & Certifications */}
            <div className="space-y-8">
              {/* Relevant Courses */}
              {/* <GlassCard>
                <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </GlassCard> */}

              {/* Certifications */}
              {/* <GlassCard>
                <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Certifications
                </h4>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h5 className="font-medium text-foreground">
                            {cert.title}
                          </h5>
                          <p className="text-sm text-muted-foreground mt-1">
                            {cert.issuer}
                          </p>
                        </div>
                        <span className="text-sm text-primary font-medium whitespace-nowrap">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
