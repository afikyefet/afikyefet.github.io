import { Card } from './Card';
import { BarChart3 } from 'lucide-react';

interface StatCardProps {
  title: string;
  imageUrl: string;
  alt?: string;
  delay?: number;
}

export const StatCard = ({ title, imageUrl, alt, delay = 0 }: StatCardProps) => {
  return (
    <Card delay={delay} className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 size={20} className="text-accent" />
        <h3 className="text-lg font-semibold text-white/90">{title}</h3>
      </div>
      <div className="rounded-xl overflow-hidden bg-ink-950/40 border border-white/10 flex items-center justify-center p-2">
        <img
          src={imageUrl}
          alt={alt || title}
          loading="lazy"
          className="w-full h-auto"
          style={{ maxHeight: '280px', objectFit: 'contain' }}
        />
      </div>
    </Card>
  );
};

