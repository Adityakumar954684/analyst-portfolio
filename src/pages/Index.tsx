import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import {
  BarChart3,
  Database,
  TrendingUp,
  ArrowRight,
  Download,
  ChevronDown,
} from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "10+" },
  { label: "Data Points Analyzed", value: "5M+" },
  { label: "Month Experience", value: "1+" },
  { label: "Technologies", value: "10+" },
];

const highlights = [
  {
    icon: BarChart3,
    title: "Data Visualization",
    description: "Creating compelling visual stories from complex datasets",
  },
  {
    icon: Database,
    title: "Data Analysis",
    description: "Extracting actionable insights using advanced analytics",
  },
  {
    icon: TrendingUp,
    title: "Business Intelligence",
    description: "Driving strategic decisions with data-backed recommendations",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
          
          {/* Floating Chart Elements */}
          <div className="absolute top-1/3 right-1/4 opacity-20 animate-float">
            <svg viewBox="0 0 200 100" className="w-48 h-24 text-primary">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                points="0,80 40,60 80,70 120,30 160,40 200,10"
              />
            </svg>
          </div>
          <div className="absolute bottom-1/3 left-1/4 opacity-20 animate-float delay-500">
            <svg viewBox="0 0 100 100" className="w-32 h-32 text-accent">
              <rect x="10" y="60" width="15" height="40" fill="currentColor" rx="2" />
              <rect x="30" y="40" width="15" height="60" fill="currentColor" rx="2" />
              <rect x="50" y="50" width="15" height="50" fill="currentColor" rx="2" />
              <rect x="70" y="20" width="15" height="80" fill="currentColor" rx="2" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Available for opportunities
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in [animation-delay:100ms]">
              Hi, I'm{" "}
              <span className="gradient-text">Aditya Kumar</span>
              <br />
              <span className="text-muted-foreground">Data Analyst</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
              Transforming raw data into compelling stories and actionable insights.
              Passionate about uncovering patterns that drive business growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:300ms]">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/resume">
                  <Download className="w-5 h-5" />
                  Download Resume
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 animate-fade-in [animation-delay:400ms]">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft">
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What I Do Best
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combining technical expertise with business acumen to deliver impactful data solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 hover-lift text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl gradient-bg flex items-center justify-center shadow-glow">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="gradient" size="lg" asChild>
              <Link to="/about">
                Learn More About Me
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
