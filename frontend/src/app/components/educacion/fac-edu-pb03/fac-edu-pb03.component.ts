import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fac-edu-pb03',
  templateUrl: './fac-edu-pb03.component.html',
  styleUrls: ['./fac-edu-pb03.component.css']
})
export class FacEduPb03Component implements OnInit {
  @Input() compare: boolean;
  constructor() { }

  ngOnInit() {
  }

}
