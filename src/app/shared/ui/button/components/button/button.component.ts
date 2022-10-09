import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'ms-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Output() click = new EventEmitter();

  @Input() disabled: boolean = false;
  @Input() accent: boolean = false;
  @Input() primary: boolean = false;

  clickHandler(): void {
    this.click.emit();
  }
}