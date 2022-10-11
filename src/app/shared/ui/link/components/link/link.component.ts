import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'ms-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
  @Input() disabled: boolean = false;
  @Input() link: string[] = [];
}