import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'ms-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextFieldComponent,
    },
  ],
})
export class TextFieldComponent implements ControlValueAccessor, OnInit {
  constructor(
    private formBuilder: FormBuilder,
  ) {}

  value: string = '';
  touched = false;
  disabled = false;
  form!: FormGroup;

  onInput(): void {
    this.onChange(this.form.value.input)
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      input: [''],
    });
  }

  onChange(value: string): void {}

  onTouched = () => {};

  writeValue(value: any) {
    if (value) {
      this.form.setValue(value, {emitEvent: false});
    }
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    if (disabled) {
      this.form.disable();
    }
    else {
      this.form.enable();
    }
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
}