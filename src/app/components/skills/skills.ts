import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skillCategories = [
    {
      title: 'Frontend',
      icon: 'layout',
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'HTML5 / CSS3 / Bootstrap', level: 90 },
        { name: 'JavaScript / TypeScript', level: 90 },
        { name: 'LWC (Lightning Web Component)', level: 80 },
      ],
    },
    {
      title: 'Backend',
      icon: 'server',
      skills: [
        { name: 'Node.js / Strapi', level: 90 },
        { name: 'Java Spring Boot', level: 75 },
        { name: 'Laravel (PHP)', level: 75 },
        { name: 'WordPress / PHP', level: 75 },
        { name: 'Salesforce Apex', level: 85 },
        { name: 'GraphQL / Apollo', level: 80 },
      ],
    },
    {
      title: 'Base de données',
      icon: 'database',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 85 },
        { name: 'Elasticsearch', level: 80 },
        { name: 'Redis', level: 80 },
        { name: 'Prisma ORM', level: 80 },
      ],
    },
    {
      title: 'Outils & DevOps',
      icon: 'tool',
      skills: [
        { name: 'Git / SVN', level: 90 },
        { name: 'Docker / CI-CD', level: 80 },
        { name: 'AWS (S3)', level: 75 },
        { name: 'Swagger / OpenAPI', level: 85 },
        { name: 'Agile / Scrum', level: 85 },
        { name: 'Linux', level: 80 },
      ],
    },
    {
      title: 'Vibe Coding & IA',
      icon: 'sparkles',
      skills: [
        { name: 'Claude Code (Anthropic)', level: 95 },
        { name: 'Cursor IDE', level: 90 },
        { name: 'GitHub Copilot', level: 85 },
        { name: 'Prompt Engineering', level: 90 },
      ],
    },
  ];
}
