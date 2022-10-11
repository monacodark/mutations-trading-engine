import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundPageComponent } from './not-found-page.component';
import { LinkModule } from '../../shared/ui/link/link.module';


const routes: Routes = [
  {
    path: '**',
    component: NotFoundPageComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    LinkModule,
  ],
  declarations: [
    NotFoundPageComponent,
  ]
})
export class NotFoundPageModule {}
