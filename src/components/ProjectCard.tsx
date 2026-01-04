import { Card } from './Card';
import { Chip } from './Chip';
import { CheckCircle2 } from 'lucide-react';
import { WorkProject, PersonalProject } from '../data/profile';

interface ProjectCardProps {
  project: WorkProject | PersonalProject;
  delay?: number;
}

export const ProjectCard = ({ project, delay = 0 }: ProjectCardProps) => {
  const hasImpactBadge = 'impactBadge' in project && project.impactBadge;

  return (
    <Card delay={delay} className="p-6 h-full flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold text-white/90">{project.title}</h3>
        {hasImpactBadge && (
          <span className="px-3 py-1 rounded-full text-xs font-semibold border border-accent/35 bg-accent/15 text-white/90">
            {project.impactBadge}
          </span>
        )}
      </div>
      <p className="text-sm text-white/65 mb-4">{project.description}</p>
      <ul className="space-y-2 mb-4 flex-1">
        {project.bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-white/75">
            <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
        {project.tags.map((tag, idx) => (
          <Chip key={idx}>{tag}</Chip>
        ))}
      </div>
    </Card>
  );
};

