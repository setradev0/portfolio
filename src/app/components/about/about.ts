import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  stats = [
    { value: '6+', label: "Années d'expérience" },
    { value: '+5,000', label: 'Heures facturées' },
    { value: '100%', label: 'Job Success' },
  ];
}
