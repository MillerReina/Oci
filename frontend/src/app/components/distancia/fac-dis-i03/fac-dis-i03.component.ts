import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacDistanciaI03 } from 'src/app/models/fac-distancia-i03';

@Component({
  selector: 'app-fac-dis-i03',
  templateUrl: './fac-dis-i03.component.html',
  styleUrls: ['./fac-dis-i03.component.css']
})
export class FacDisI03Component implements OnInit {

  @Input() compare: boolean;

  public preload: boolean;
  public barChart: am4charts.XYChart;  
  public entidad2017 = 0;
  public entidad2018 = 0;

  constructor(public zone : NgZone, public service: ServiceService) { }

  
  ngOnInit() {
    this.preload = true;
    this.service.getFacDistanciaI03()
          .subscribe(res=>{
             this.service.facDisI03Array = res as FacDistanciaI03[];
             this.countAportes();   
             this.preload = false;         
          });
  }

  countAportes(){
    const array = this.service.facDisI03Array as FacDistanciaI03[];
    for(var _i = 0; _i < array.length; _i++){
        if(parseInt(array[_i].ANIOEJECUCION)==2017){
           this.entidad2017+=array[_i].MONTOEFECTIVOINTERNO;
        }else if(parseInt(array[_i].ANIOEJECUCION)==2018){
           this.entidad2018+=array[_i].MONTOEFECTIVOINTERNO; 
        }
    }
  }
}
