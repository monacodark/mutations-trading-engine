import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { CardModule } from '../shared/ui/card/card.module';
import { ButtonModule } from '../shared/ui/button/button.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    CardModule,
    ButtonModule,
  ],
})
export class HomeModule {}
