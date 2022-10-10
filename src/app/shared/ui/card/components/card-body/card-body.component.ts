import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ms-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss'],
})
export class CardBodyComponent implements OnInit {
  @Input() noPadding: boolean = false;

  ngOnInit(): void {
    console.log('yo', this.noPadding);
  }
}