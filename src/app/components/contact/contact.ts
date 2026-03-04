import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

// ⚠️ À remplacer avec vos clés EmailJS (https://www.emailjs.com)
const EMAILJS_SERVICE_ID = 'service_crc350a';
const EMAILJS_TEMPLATE_ID = 'template_ekic3ca';
const EMAILJS_PUBLIC_KEY = 'G6clxTqMPA6mn4myS';

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

  isLoading = signal(false);
  submitStatus = signal<'idle' | 'success' | 'error'>('idle');

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

  updateField(field: 'name' | 'email' | 'message', value: string) {
    this.formData.update((data) => ({ ...data, [field]: value }));
  }

  async onSubmit() {
    const { name, email, message } = this.formData();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    this.isLoading.set(true);
    this.submitStatus.set('idle');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: name,
          email: email,
          message: message,
          title: `Message de ${name}`,
        },
        EMAILJS_PUBLIC_KEY
      );

      this.submitStatus.set('success');
      this.formData.set({ name: '', email: '', message: '' });
    } catch {
      this.submitStatus.set('error');
    } finally {
      this.isLoading.set(false);
    }
  }
}
