import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LinkComponent } from './components/link/link.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    LinkComponent,
  ],
  exports: [
    LinkComponent,
  ],
})
export class LinkModule {}
