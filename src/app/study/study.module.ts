import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudyPageRoutingModule } from './study-routing.module';

import { StudyPage } from './study.page';
import {FlashCardComponent} from '../components/flash-card/flash-card.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudyPageRoutingModule
    
  ],
  declarations: [StudyPage, FlashCardComponent]
})
export class StudyPageModule {}
