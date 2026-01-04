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
    name: 'Phone',
    url: 'tel:+972525530451',
    icon: 'Phone',
    description: '+972-52-553-0451',
  },
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
    name: 'Website',
    url: 'https://afikyefet.com',
    icon: 'Globe',
    description: 'Portfolio website',
  },
  // {
  //   name: 'Facebook',
  //   url: 'https://www.facebook.com/afik.yefet',
  //   icon: 'Facebook',
  //   description: 'Connect',
  // },
];

export const workProjects: WorkProject[] = [
  {
    title: 'Full-Stack Developer — Agilite Tactical Gear',
    description: 'August 2025 – Present',
    bullets: [
      'Architected and shipped a custom Shopify Gear Builder (Liquid, JavaScript, CSS) across 3 global storefronts, resulting in a 20%+ increase in add-on sales.',
      'Developed a browser-based overlay tool (Vite, React) integrating with legacy warehouse systems, reducing manual data entry for returns and exchanges by ~90%.',
      'Built “Agilite Frame,” an internal video review platform, reducing review cycles by 30–50% and saving up to $3,000/year in external SaaS subscriptions.',
      'Built an RAG AI CS chatbot and am building a B2B store solution using React, TypeScript, and Go.',
      'Own end-to-end delivery (CI/CD, QA, UI/UX) for products supporting 6,000+ monthly orders, integrating backend endpoints for event tracking and analytics optimization.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Shopify', 'Liquid', 'Vite', 'Go', 'CI/CD'],
    impactBadge: '6,000+ monthly orders',
  },
  {
    title: 'Customer Support & Technical Operations — Agilite Tactical Gear',
    description: 'January 2025 – August 2025',
    bullets: [
      'Managed daily customer support tickets (Zendesk) and coordinated with the US warehouse on shipping and RMA issues.',
      'Acted as technical point of contact for order system errors, bridging support and development.',
      'Created apps to standardize responses and automate repetitive tagging tasks before transitioning to full-stack development.',
    ],
    tags: ['Customer Support', 'Zendesk', 'Operations', 'Automation'],
  },
];

export const personalProjects: PersonalProject[] = [
  {
    title: 'RAG AI Customer Support Chatbot',
    description: 'End-to-end RAG chatbot for support questions using internal knowledge',
    bullets: [
      'Built an end-to-end RAG chatbot to answer support questions using internal knowledge (policies, product info, macros).',
      'Implemented vector search retrieval and response grounding to reduce hallucinations and keep answers consistent.',
      'Added escalation paths for “can’t resolve” cases (structured handoff and ticket-ready summaries).',
    ],
    tags: ['RAG', 'AI', 'Vector Search', 'Automation'],
  },
  {
    title: 'Agilite Gear Builder (Shopify Product Configurator)',
    description: 'Dynamic “Gear Builder” experience with complex dependency rules and stacking logic',
    bullets: [
      'Developed complex dependency rules and multi-layer stacking logic on Shopify.',
      'Built variant-aware UI behavior (syncing, validation, gating) to prevent invalid configurations.',
      'Optimized UX for speed and resilience to edge cases.',
    ],
    tags: ['Shopify', 'Liquid', 'JavaScript', 'UX'],
  },
  {
    title: 'Agilite Frame (Internal Video Collaboration Tool)',
    description: 'Frame.io-style internal review tool for faster creative iteration',
    bullets: [
      'Built an internal review tool for teams to share videos and collaborate in one place.',
      'Implemented timestamped feedback flows, organized threads, and permission-aware sharing.',
      'Optimized for quick reviews and clear context during iterations.',
    ],
    tags: ['React', 'Node.js', 'Collaboration', 'UX'],
  },
  {
    title: 'Productivity Browser Extension for Customer Support',
    description: 'Browser-based overlay tool integrating with legacy warehouse systems',
    bullets: [
      'Built an overlay tool to speed up daily CS workflows on a legacy warehouse system.',
      'Reduced manual data entry for returns/exchanges by ~90% by automating repetitive steps and standardizing inputs.',
      'Designed for real support pressure: fast UI, minimal clicks, reliable behavior.',
    ],
    tags: ['Browser Extension', 'Vite', 'React', 'Automation'],
  },
];

export const techStack: TechCategory[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Redux', 'HTML5', 'CSS3/SASS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Go', 'MongoDB', 'REST APIs', 'WebSockets', 'Cron Jobs', 'Webhooks'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub Actions', 'Google Cloud', 'Shopify Liquid', 'Docker', 'Chrome Extensions', 'Cursor', 'Claude Code'],
  },
  {
    category: 'Other',
    items: ['SQL', 'BigQuery', 'CI/CD Pipelines', 'Postman/HTTP Debugging', 'Automation'],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'B.Sc. in Computer Science (In Progress, Started 2025)',
    institution: 'Open University of Israel',
    period: '2025–present',
  },
  {
    degree: 'Full-Stack Web Development Bootcamp',
    institution: 'Coding Academy',
    period: '2024',
    description: 'Intensive training in MERN Stack (MongoDB, Express, React, Node.js).',
  },
];

export const aboutCards = [
  {
    title: 'Professional summary',
    description:
      'Full-stack developer at Agilite building customer-facing features and internal tools that improve speed, accuracy, and day-to-day operations.',
  },
  {
    title: 'What I optimize for',
    description: 'Clean UI, reliability, and accessibility — with strong product thinking and UX.',
  },
  {
    title: 'How I work',
    description: 'End-to-end ownership: product thinking → UX → backend logic → deployment and iteration.',
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

