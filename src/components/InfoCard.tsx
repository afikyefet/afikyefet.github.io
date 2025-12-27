import { Card } from './Card';
import { Chip } from './Chip';
import { getIcon } from '../utils/icons';

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
  tags?: string[];
  delay?: number;
}

export const InfoCard = ({ icon, title, description, tags = [], delay = 0 }: InfoCardProps) => {
  const IconComponent = getIcon(icon);

  return (
    <Card delay={delay} className="p-6 h-full">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-accent/10 text-accent flex-shrink-0">
          <IconComponent size={24} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold mb-2 text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600 mb-3">{description}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <Chip key={idx}>{tag}</Chip>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

