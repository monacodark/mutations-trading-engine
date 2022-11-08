import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

export type SelectFieldItemType = {
  value: string | number;
  label: string;
}

@Component({
  selector: 'ms-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SelectFieldComponent,
    },
  ],
})
export class SelectFieldComponent implements ControlValueAccessor, OnInit {
  @Input() formControlName!: string;
  @Input() error!: string | null;
  @Input() label!: string;
  @Input() items: SelectFieldItemType[] = [];

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

  onSelect(value: string | number) {
    console.log(value)
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
    this.disabled = disabled;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
}