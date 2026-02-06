import { Component } from '@angular/core';

type TimelineItem = {
  title: string;
  org: string;
  period: string;
  description: string;
  category: 'education' | 'experience';
};

@Component({
  selector: 'app-timeline',
  standalone: true,
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.scss'],
})
export class Timeline {
  items: TimelineItem[] = [
    {
      title: 'MS in Computer Science',
      org: 'State University of New York - Stony Brook',
      period: '2025-2027',
      description:
        'Courses - System Security, HCI, Logic in Computer Science, Data Science Fundamentals, Advanced Project on Causal Networks',
      category: 'education',
    },
    {
      title: 'Software Engineer',
      org: 'Deutsche Bank',
      period: '2024 – 2025',
      description:
        'Worked full-time on backend systems, APIs, UX migration, Testing, GCP and production infrastructure.',
      category: 'experience',
    },
    {
      title: 'B. Tech. in Computer Engineering',
      org: 'Sardar Patel Institute of Technology, Mumbai',
      period: '2021- 2024',
      description:
        '',
      category: 'experience',
    },
    {
      title: 'Research Intern',
      org: 'IIT Bombay',
      period: 'Jan 2024- June 2024',
      description:
        'Built an image processing and change detection Pipeline for SAR images using CNN',
      category: 'education',
    },
    {
      title: 'SDE Intern',
      org: 'Deutsche Bank',
      period: 'May 2023- July 2023',
      description:
        'Built SRE Dashboards using Grafana, PostgreSQL, Springboot',
      category: 'experience',
    },
  ];
}
