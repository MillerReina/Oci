import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fac-eco-f01',
  templateUrl: './fac-eco-f01.component.html',
  styleUrls: ['./fac-eco-f01.component.css']
})
export class FacEcoF01Component implements OnInit {
  @Input() compare: boolean;
  constructor() { }

  ngOnInit() {
  }

}
