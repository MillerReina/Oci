import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fac-edu-c021',
  templateUrl: './fac-edu-c021.component.html',
  styleUrls: ['./fac-edu-c021.component.css']
})
export class FacEduC021Component implements OnInit {
  @Input() compare: boolean;
  constructor() { }

  ngOnInit() {
  }

}
