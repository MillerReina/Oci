import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fac-edu-f01',
  templateUrl: './fac-edu-f01.component.html',
  styleUrls: ['./fac-edu-f01.component.css']
})
export class FacEduF01Component implements OnInit {

  @Input() compare: boolean;

  constructor() { }

  ngOnInit() {
  }

}
