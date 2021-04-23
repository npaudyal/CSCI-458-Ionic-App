import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MidPagePageRoutingModule } from './mid-page-routing.module';

import { MidPagePage } from './mid-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MidPagePageRoutingModule
  ],
  declarations: [MidPagePage]
})
export class MidPagePageModule {}
