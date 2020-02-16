import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fac-cien-pb03',
  templateUrl: './fac-cien-pb03.component.html',
  styleUrls: ['./fac-cien-pb03.component.css']
})
export class FacCienPb03Component implements OnInit {
  @Input() compare: boolean;
  constructor() { }

  ngOnInit() {
  }

}
