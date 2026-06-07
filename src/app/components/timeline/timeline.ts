import { Component } from '@angular/core';

type TimelineItem = {
  title: string;
  org: string;
  period: string;
  description: string;
  // Replace favicon URLs with assets/images/logos/*.png later for sharper local logos.
  logo?: string;
};

@Component({
  selector: 'app-timeline',
  standalone: true,
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.scss'],
})
export class Timeline {
  education: TimelineItem[] = [
    {
      title: 'MS in Computer Science',
      org: 'State University of New York - Stony Brook',
      period: '2025 - 2027',
      description:
        'Courses - System Security, HCI, Logic in Computer Science, Data Science Fundamentals, Advanced Project on Causal Networks',
      logo: 'https://www.google.com/s2/favicons?domain=stonybrook.edu&sz=128',
    },
    {
      title: 'B. Tech. in Computer Engineering',
      org: 'University of Mumbai',
      period: '2021 - 2024',
      description: '',
      logo: 'https://www.google.com/s2/favicons?domain=mu.ac.in&sz=128',
    },
  ];

  experience: TimelineItem[] = [
    {
      title: 'SWE Intern',
      org: 'Google',
      period: 'May 2026 - Aug 2026',
      description: 'Software Engineering Intern.',
      logo: 'https://www.google.com/s2/favicons?domain=google.com&sz=128',
    },
    {
      title: 'Software Engineer',
      org: 'Deutsche Bank',
      period: '2024 - 2025',
      description:
        'Worked full-time on backend systems, APIs, UX migration, testing, GCP, and production infrastructure.',
      logo: 'https://www.google.com/s2/favicons?domain=db.com&sz=128',
    },
    {
      title: 'Research Intern',
      org: 'IIT Bombay',
      period: 'Jan 2024 - Jun 2024',
      description: 'Built an image processing and change detection pipeline for SAR images using CNN.',
      logo: 'https://www.google.com/s2/favicons?domain=iitb.ac.in&sz=128',
    },
    {
      title: 'SDE Intern',
      org: 'Deutsche Bank',
      period: 'May 2023 - Jul 2023',
      description: 'Built SRE dashboards using Grafana, PostgreSQL, and Spring Boot.',
      logo: 'https://www.google.com/s2/favicons?domain=db.com&sz=128',
    },
  ];
}
