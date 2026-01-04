import {
  Mail,
  Phone,
  Globe,
  Linkedin,
  Github,
  Code,
  Facebook,
  User,
  GraduationCap,
  Info,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Mail,
  Phone,
  Globe,
  Linkedin,
  Github,
  Code,
  Facebook,
  User,
  GraduationCap,
  Info,
};

export const getIcon = (iconName: string): LucideIcon => {
  return iconMap[iconName] || Info;
};

