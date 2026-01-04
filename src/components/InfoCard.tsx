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
        <div className="p-3 rounded-xl bg-white/[0.06] border border-white/10 text-white flex-shrink-0 shadow-glow-sm">
          <IconComponent size={24} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold mb-2 text-white/90">{title}</h3>
          <p className="text-sm text-white/65 mb-3">{description}</p>
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

