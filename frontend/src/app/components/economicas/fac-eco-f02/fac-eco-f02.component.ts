import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fac-eco-f02',
  templateUrl: './fac-eco-f02.component.html',
  styleUrls: ['./fac-eco-f02.component.css']
})
export class FacEcoF02Component implements OnInit {
  @Input() compare: boolean;
  constructor() { }

  ngOnInit() {
  }

}
