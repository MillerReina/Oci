import { Component, OnInit,NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacDistanciaI06 } from 'src/app/models/fac-distancia-i06';

@Component({
  selector: 'app-fac-dis-i06',
  templateUrl: './fac-dis-i06.component.html',
  styleUrls: ['./fac-dis-i06.component.css']
})
export class FacDisI06Component implements OnInit {
  @Input() compare: boolean;

  public preload: boolean;
  public barChart: am4charts.XYChart;
  
  public aport2014=0;
  public aport2015=0;
  public aport2016=0;
  public aport2017=0;
  public aport2018=0;
  constructor(public zone:NgZone,public service: ServiceService) { }

  ngOnInit() {
    this.preload = true;
      this.service.getFacDistanciaI06()
          .subscribe(res=>{
              this.service.facDisI06Array = res as FacDistanciaI06[];
              this.countAportes();
              this.preload = false; 
          });
  }

  countAportes(){
    const array = this.service.facDisI06Array as FacDistanciaI06[];
    for(var _i = 0; _i < array.length; _i++){
        if(array[_i].Anio==="2014"){
           this.aport2014+=array[_i].Aporte;
        }else if(array[_i].Anio==="2015"){
          this.aport2015+=array[_i].Aporte;
        }else if(array[_i].Anio==="2016"){
          this.aport2016+=array[_i].Aporte;
        }else if(array[_i].Anio==="2017"){
          this.aport2017+=array[_i].Aporte;
        }else if(array[_i].Anio==="2018"){
          this.aport2018+=array[_i].Aporte;
        }
    }
  }
}
