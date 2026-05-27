import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skillCategories: { title: string; icon: string; skills: string[] }[] = [
    {
      title: 'Frontend',
      icon: 'layout',
      skills: ['Angular', 'HTML5 / CSS3', 'Bootstrap', 'JavaScript', 'TypeScript', 'LWC (Lightning Web Component)'],
    },
    {
      title: 'Backend',
      icon: 'server',
      skills: ['Node.js', 'Strapi', 'Java Spring Boot', 'Laravel (PHP)', 'WordPress / PHP', 'Salesforce Apex', 'GraphQL / Apollo'],
    },
    {
      title: 'Base de données',
      icon: 'database',
      skills: ['MySQL', 'MongoDB', 'Elasticsearch', 'Redis', 'Prisma ORM'],
    },
    {
      title: 'Outils & DevOps',
      icon: 'tool',
      skills: ['Git / SVN', 'Docker', 'CI/CD', 'AWS (S3)', 'Swagger / OpenAPI', 'Agile / Scrum', 'Linux'],
    },
    {
      title: 'Vibe Coding & IA',
      icon: 'sparkles',
      skills: ['Claude Code (Anthropic)', 'Cursor IDE', 'GitHub Copilot', 'Prompt Engineering'],
    },
  ];
}
