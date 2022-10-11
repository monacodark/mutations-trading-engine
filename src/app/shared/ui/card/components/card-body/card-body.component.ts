import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ms-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss'],
})
export class CardBodyComponent {
  @Input() noPadding: boolean = false;
}