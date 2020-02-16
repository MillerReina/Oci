import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input() routerI01: string;
  @Input() routerI02: string;
  @Input() routerI03: string;
  @Input() routerI04: string;
  @Input() routerI05: string;
  @Input() routerI06: string;

  @Input() routerF01: string;
  @Input() routerF02: string;
  @Input() routerF03: string;

  @Input() routerC01: string;
  @Input() routerC02: string;
  @Input() routerC021: string;

  @Input() routerPB03: string;

  //Comparar graficas
  @Input() item1: string;
  @Input() item2: string;
  @Input() item3: string;
  @Input() item4: string;
  @Input() item5: string;

  @Input() comp1: string;
  @Input() comp2: string;
  @Input() comp3: string;
  @Input() comp4: string;
  @Input() comp5: string;

  @Input() fac_actual: string;



  constructor() { }

  

}
