import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class Projects {
  projects = [
    {
      title: 'Emotion Responsive Reader',
      desc: '',
      github: 'https://github.com/MadhuraChitale/Emotion-Adaptive-UI'
    },
    {
      title: 'Change Detection in SAR Imagery',
      desc: '',
    },
    {
      title: 'Deepfake Audio Detection',
      desc: '',
    },
    {
      title: 'Sentiment Analysis and Emotion Recognition',
      desc: '',
    }
  ];
}
