import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4 mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 md:p-8",
        hover && "hover-lift",
        className
      )}
    >
      {children}
    </div>
  );
}

interface SkillBarProps {
  name: string;
  level: number;
  icon?: ReactNode;
}

export function SkillBar({ name, level, icon }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && <span className="text-primary">{icon}</span>}
          <span className="font-medium text-foreground">{name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full gradient-bg rounded-full skill-bar"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description?: string;
  isLast?: boolean;
}

export function TimelineItem({
  year,
  title,
  subtitle,
  description,
  isLast,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8">
      {/* Line */}
      {!isLast && (
        <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-border" />
      )}
      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full gradient-bg flex items-center justify-center shadow-glow">
        <div className="w-2 h-2 rounded-full bg-primary-foreground" />
      </div>
      {/* Content */}
      <div className="space-y-1">
        <span className="text-sm font-medium text-primary">{year}</span>
        <h4 className="text-lg font-semibold text-foreground">{title}</h4>
        <p className="text-muted-foreground">{subtitle}</p>
        {description && (
          <p className="text-sm text-muted-foreground mt-2">{description}</p>
        )}
      </div>
    </div>
  );
}
