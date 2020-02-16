import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacEducacionF03 } from 'src/app/models/fac-educacion-f03';

@Component({
  selector: 'app-fac-edu-f03',
  templateUrl: './fac-edu-f03.component.html',
  styleUrls: ['./fac-edu-f03.component.css']
})
export class FacEduF03Component implements OnInit {

  @Input() compare: boolean;
  public preload: boolean;
  
  public barChart: am4charts.XYChart;
  public semilleros2014=0;
  public semilleros2015=0;
  public semilleros2016=0;
  public semilleros2017=0;
  public semilleros2018=0;
  constructor(public zone: NgZone, public service: ServiceService) { }

  ngOnInit() {
    this.preload = true;
    this.service.getFacEducacionF03()
        .subscribe(res=>{
            this.service.facEduF03Array = res as FacEducacionF03[];
            this.countData();           
            this.preload = false;  
        });
  }



  countData(){
      const array = this.service.facEduF03Array as FacEducacionF03[];
      for(var _i = 0; _i < array.length; _i++){
          if(array[_i].Anio==="2014"){
              this.semilleros2014=array[_i].Nosemilleros;
          }else if(array[_i].Anio==="2015"){
              this.semilleros2015=array[_i].Nosemilleros;
          }else if(array[_i].Anio==="2016"){
            this.semilleros2016=array[_i].Nosemilleros;
          }else if(array[_i].Anio==="2017"){
            this.semilleros2017=array[_i].Nosemilleros;
          }else if(array[_i].Anio==="2018"){
            this.semilleros2018=array[_i].Nosemilleros;
          }
      }
  }
}

