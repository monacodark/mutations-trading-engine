import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFieldComponent } from './components/text-field.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    TextFieldComponent,
  ],
  exports: [
    TextFieldComponent,
  ],
})
export class TextFieldModule {}
