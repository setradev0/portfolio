import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = signal({
    name: '',
    email: '',
    message: '',
  });

  contactInfo = [
    {
      icon: 'email',
      label: 'Email',
      value: 'setraniainafranckiedev@gmail.com',
      link: 'mailto:setraniainafranckiedev@gmail.com',
    },
    {
      icon: 'location',
      label: 'Localisation',
      value: 'Antananarivo 101, Madagascar',
      link: '',
    },
    {
      icon: 'phone',
      label: 'Téléphone',
      value: '034 58 664 16',
      link: 'tel:+261345866416',
    },
    {
      icon: 'upwork',
      label: 'Upwork',
      value: 'Top Rated Plus',
      link: 'https://www.upwork.com/freelancers/~01cc5073de2985a363',
      rating: 4.9,
      stars: 5,
      badges: [
        { label: '100%', sub: 'Job Success' },
        { label: '+5,000h', sub: 'Hours' },
      ],
    },
  ];

  onSubmit() {
    console.log('Form submitted:', this.formData());
  }
}
