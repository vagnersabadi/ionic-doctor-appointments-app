import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { ProfilePageModule } from './../profile/profile.module';

@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ProfilePageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
