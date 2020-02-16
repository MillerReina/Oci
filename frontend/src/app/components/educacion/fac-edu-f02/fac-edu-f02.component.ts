import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fac-edu-f02',
  templateUrl: './fac-edu-f02.component.html',
  styleUrls: ['./fac-edu-f02.component.css']
})
export class FacEduF02Component implements OnInit {
  @Input() compare: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
