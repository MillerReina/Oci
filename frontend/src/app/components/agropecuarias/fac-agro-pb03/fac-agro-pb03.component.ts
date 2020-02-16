import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fac-agro-pb03',
  templateUrl: './fac-agro-pb03.component.html',
  styleUrls: ['./fac-agro-pb03.component.css']
})
export class FacAgroPb03Component implements OnInit {
  @Input() compare: boolean;
  constructor() { }

  ngOnInit() {
  }

}
