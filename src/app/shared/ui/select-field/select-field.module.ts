import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SelectFieldComponent } from './components/select-field.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SelectFieldComponent,
  ],
  exports: [
    SelectFieldComponent,
  ],
})
export class SelectFieldModule {}
