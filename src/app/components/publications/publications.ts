import { Component } from '@angular/core';

@Component({
  selector: 'app-publications',
  standalone: true,
  templateUrl: './publications.html',
  styleUrls: ['./publications.scss'],
})
export class Publications {
  publications = [
    {
      title: 'A Hybrid CNN-LSTM Approach for Deepfake Audio Detection',
      venue: '2024 3rd IEEE International Conference on Artificial Intelligence for Internet of Things (AIIoT)',
      year: '2024',
      publisher: 'IEEE',
      link: 'https://ieeexplore.ieee.org/document/10574576',
      doi: '10.1109/AIIoT58432.2024.10574576',
    },
  ];
}
