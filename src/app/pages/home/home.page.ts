import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfilePage } from './../profile/profile.page';


interface Doctor {
  avatar: string;
  name: string;
  specialty: string;
  status: boolean;
}

interface Categories {
  color: string;
  bkColor: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3.3,
  };

  doctors: Doctor[] = [
    {
      avatar: 'https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true',
      specialty: 'Cardiologist',
      name: 'Dr. Alan C Braverman',
      status: true
    },
    {
      avatar: 'https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true',
      specialty: 'Orthodontist',
      name: 'Dr. Michael Aaron',
      status: false
    },
    {
      avatar: 'https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true',
      specialty: 'Eye Specialist',
      name: 'Dr. Shelley Rahman',
      status: false
    },
    {
      avatar: 'https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true',
      specialty: 'Orthodontist',
      name: 'Dr. Michael Aaron',
      status: false
    },
    {
      avatar: 'https://github.com/vagnersabadi/ionic-doctor-appointments-app/blob/main/src/assets/avatar.png?raw=true',
      specialty: 'Eye Specialist',
      name: 'Dr. Shelley Rahman',
      status: false
    }
  ];

  categories: Categories[] = [
    {
      name: 'Heart',
      bkColor: '#008aff',
      color: 'white',
      icon: 'heart-outline'
    },
    {
      name: 'Brain',
      bkColor: '#a2c3f7',
      color: 'black',
      icon: 'skull-outline'
    },
    {
      name: 'Kidney',
      bkColor: '#f7be3021',
      color: 'black',
      icon: 'heart-outline'
    },
    {
      name: 'Brain',
      bkColor: '#a2c3f7',
      color: 'black',
      icon: 'skull-outline'
    },
    {
      name: 'Kidney',
      bkColor: '#f7be3021',
      color: 'black',
      icon: 'heart-outline'
    }
  ];

  constructor(
    private modalController: ModalController
  ) { }

  async openProfile() {
    const modal = await this.modalController.create({
      component: ProfilePage,
    });
    await modal.present();
  }
}
