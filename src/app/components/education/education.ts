import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  educations = [
    {
      degree: 'Licence en Informatique',
      field: 'Option Développement Web',
      period: '2018 - 2019',
      icon: 'graduation',
    },
    {
      degree: 'Baccalauréat',
      field: '',
      period: '2013 - 2014',
      icon: 'school',
    },
  ];
}
