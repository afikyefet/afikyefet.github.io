export interface Contact {
  name: string;
  url: string;
  icon: string;
  description: string;
}

export interface WorkProject {
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  impactBadge?: string;
}

export interface PersonalProject {
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  url?: string;
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export const contacts: Contact[] = [
  {
    name: 'Email',
    url: 'mailto:afik.yefet@gmail.com',
    icon: 'Mail',
    description: 'Get in touch',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/afik-yefet-906757326/',
    icon: 'Linkedin',
    description: 'Professional profile',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/afikyefet',
    icon: 'Github',
    description: 'Code & projects',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/afikyefet/',
    icon: 'Code',
    description: 'Problem solving',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/afik.yefet',
    icon: 'Facebook',
    description: 'Connect',
  },
];

export const workProjects: WorkProject[] = [
  {
    title: 'Gear Builder',
    description: 'Modular Shopify-based product configurator',
    bullets: [
      'Real-time rendering of product combinations',
      'Smart variant logic and inventory management',
      'Seamless Shopify integration with Liquid templates',
    ],
    tags: ['Shopify', 'Liquid', 'JavaScript', 'React'],
  },
  {
    title: 'HR Employee Evaluation System',
    description: 'Role-based access with automated PDF generation',
    bullets: [
      'Role-based access control for managers and employees',
      'Automated PDF generation with custom templates',
      'Streamlined evaluation workflow',
    ],
    tags: ['Node.js', 'MongoDB', 'PDF Generation', 'Express'],
  },
  {
    title: 'Video Feedback Platform',
    description: 'Timestamped feedback with timeline interactions',
    bullets: [
      'Real-time timestamped feedback system',
      'Interactive timeline for video annotations',
      'Backend syncing and collaboration features',
    ],
    tags: ['React', 'Node.js', 'WebSockets', 'MongoDB'],
  },
  {
    title: 'Internal CS Browser Tool',
    description: 'Automated workflows for customer service',
    bullets: [
      'Automated data entry and workflow management',
      'Browser extension for seamless integration',
      'Reduced manual work by ~90%',
    ],
    tags: ['Chrome Extension', 'Automation', 'JavaScript', 'TypeScript'],
    impactBadge: '-90% manual work',
  },
];

export const personalProjects: PersonalProject[] = [
  {
    title: 'FluxFill',
    description: 'Productivity Chrome extension',
    bullets: [
      'Capture and save UI elements across websites',
      'Reuse saved elements for faster workflows',
      'Cross-site element management',
    ],
    tags: ['Chrome Extension', 'JavaScript', 'Productivity'],
  },
  {
    title: 'Hybet',
    description: 'Real-time poker dashboard',
    bullets: [
      'Live poker statistics and analytics',
      'Real-time updates via WebSockets',
      'React frontend with Node.js backend',
    ],
    tags: ['React', 'Node.js', 'WebSockets', 'MongoDB'],
  },
];

export const techStack: TechCategory[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Redux', 'HTML', 'CSS/SASS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Firebase'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Google Cloud', 'Chrome Extensions', 'Shopify Liquid'],
  },
  {
    category: 'Other',
    items: ['WebSockets', 'PDF Generation', 'Automation'],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'B.Sc. Computer Science',
    institution: 'Open University of Israel',
    period: '2025–present',
    description: 'In progress',
  },
  {
    degree: 'Full-Stack Web Development Bootcamp',
    institution: 'Coding Academy',
    period: '2024',
    description: 'Intensive full-stack program',
  },
];

export const aboutCards = [
  {
    title: 'About me',
    description: 'Full-stack developer passionate about building tools that make work easier and more efficient.',
  },
  {
    title: 'What I care about',
    description: 'Clean code, user experience, and solving real problems with elegant solutions.',
  },
  {
    title: 'How I work',
    description: 'Data-driven, collaborative, and focused on delivering measurable impact.',
  },
];

export const stats = {
  github: {
    username: 'afikyefet',
    // Compact GitHub stats - hide rank, use smaller card width
    statsUrl: 'https://github-readme-stats.vercel.app/api?username=afikyefet&show_icons=true&include_all_commits=true&hide_rank=true&hide=stars&card_width=380',
    // Compact top languages - compact layout, limit to 5 languages
    languagesUrl: 'https://github-readme-stats.vercel.app/api/top-langs/?username=afikyefet&layout=compact&langs_count=5&card_width=380&hide_border=true',
    // Compact streak stats - hide border for cleaner look
    streakUrl: 'https://streak-stats.demolab.com?user=afikyefet&theme=default&hide_border=true',
  },
  leetcode: {
    username: 'afikyefet',
    // Compact LeetCode card - smaller width, no border, compact theme
    cardUrl: 'https://leetcard.jacoblin.cool/afikyefet?theme=light&font=Karla&ext=activity&width=380&border=0&radius=8',
  },
};

