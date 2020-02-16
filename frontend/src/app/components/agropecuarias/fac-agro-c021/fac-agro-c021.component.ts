import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fac-agro-c021',
  templateUrl: './fac-agro-c021.component.html',
  styleUrls: ['./fac-agro-c021.component.css']
})
export class FacAgroC021Component implements OnInit {
  @Input() compare: boolean;
  constructor() { }

  ngOnInit() {
  }

}
