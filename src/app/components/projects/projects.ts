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
      desc: 'An adaptive reading interface that responds to user emotion signals to improve comfort and focus.',
      github: 'https://github.com/MadhuraChitale/Emotion-Adaptive-UI',
      tags: ['Angular', 'Human Computer Interaction'],
    },
    {
      title: 'Change Detection in SAR Imagery',
      desc: 'A CNN-based image processing pipeline for detecting meaningful changes in SAR satellite imagery.',
      tags: ['DL', 'Image Processing'],
    },
    {
      title: 'Deepfake Audio Detection',
      desc: 'A machine learning project focused on identifying manipulated audio using signal and model-driven features.',
      tags: [ 'DL', 'Audio'],
      paper: 'https://ieeexplore.ieee.org/document/10574576',
    },
    {
      title: 'Sentiment Analysis and Emotion Recognition',
      desc: 'Natural language processing work for classifying sentiment and recognizing emotion patterns from text.',
      tags: ['NLP', 'ML'],
    },
  ];
}
