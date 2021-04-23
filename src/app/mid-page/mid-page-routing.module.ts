import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MidPagePage } from './mid-page.page';

const routes: Routes = [
  {
    path: '',
    component: MidPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MidPagePageRoutingModule {}
