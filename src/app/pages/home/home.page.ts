import { Component } from '@angular/core';


interface Doctor {
  avatar: string;
  name: string;
  specialty: string;
  status: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  doctors: Doctor[] = [
  {
    avatar: 'https://avatars0.githubusercontent.com/u/12532889?s=400&u=758efee3e15b5e61f684a351fc82048426228f11&v=4',
    specialty: 'Cardiologist',
    name: 'Dr. Alan C Braverman',
    status: true
  },
  {
    avatar: 'https://avatars0.githubusercontent.com/u/12532889?s=400&u=758efee3e15b5e61f684a351fc82048426228f11&v=4',
    specialty: 'Orthodontist',
    name: 'Dr. Michael Aaron',
    status: false
  },
  {
    avatar: 'https://avatars0.githubusercontent.com/u/12532889?s=400&u=758efee3e15b5e61f684a351fc82048426228f11&v=4',
    specialty: 'Eye Specialist',
    name: 'Dr. Shelley Rahman',
    status: false
  }
  ]

constructor() { }

}
