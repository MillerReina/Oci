import { Component, OnInit,NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacDistanciaI04 } from 'src/app/models/fac-distancia-i04';

@Component({
  selector: 'app-fac-dis-i04',
  templateUrl: './fac-dis-i04.component.html',
  styleUrls: ['./fac-dis-i04.component.css']
})
export class FacDisI04Component implements OnInit {

  @Input() compare: boolean;
  public preload: boolean;

  public barChart: am4charts.XYChart;
  public ticaAporte=0;
  public siekAporte=0;
  public ticaNumProductos=0;
  public siekNumProductos=0;  

  constructor(public zone: NgZone,public service: ServiceService) { }


  ngOnInit() {
    this.preload = true;
    this.service.getFacDistanciaI04()
          .subscribe(res=>{
             this.service.facDisI04Array = res as FacDistanciaI04[];
             this.countAportes();
             this.preload = false; 
          });
  }

  countAportes(){
    const array = this.service.facDisI04Array as FacDistanciaI04[];

    for(var _i = 0; _i < array.length; _i++){
      if(array[_i].Grupo==="TICA"){
        this.ticaAporte+=array[_i].Valor;
        this.ticaNumProductos+=array[_i].Noproductosporgrupo;
      }else if(array[_i].Grupo==="SIEK"){
        this.siekAporte+=array[_i].Valor;
        this.siekNumProductos+=array[_i].Noproductosporgrupo;
      }
    }
  }
}
