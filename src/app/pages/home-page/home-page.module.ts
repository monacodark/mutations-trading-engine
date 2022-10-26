import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ButtonModule } from '../../shared/ui/button/button.module';
import { CardModule } from '../../shared/ui/card/card.module';
import { LinkModule } from '../../shared/ui/link/link.module';
import { TextFieldModule } from '../../shared/ui/text-field/text-field.module';
import { HomePageComponent } from './home-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,

    CardModule,
    ButtonModule,
    LinkModule,
    TextFieldModule,
  ],
  declarations: [
    HomePageComponent,
  ]
})
export class HomePageModule {}
