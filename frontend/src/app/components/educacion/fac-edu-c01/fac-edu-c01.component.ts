import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacEducacionC01 } from 'src/app/models/fac-educacion-c01';

@Component({
  selector: 'app-fac-edu-c01',
  templateUrl: './fac-edu-c01.component.html',
  styleUrls: ['./fac-edu-c01.component.css']
})
export class FacEduC01Component implements OnInit {

  @Input() compare: boolean;
  public preload: boolean;
  public barChart: am4charts.XYChart;

  public a12014=0;
  public a12015=0;
  public a12016=0;
  public a12017=0;
  public a12018=0;
  public a2014=0;
  public a2015=0;
  public a2016=0;
  public a2017=0;
  public a2018=0;
  public b2014=0;
  public b2015=0;
  public b2016=0;
  public b2017=0;
  public b2018=0;
  public c2014=0;
  public c2015=0;
  public c2016=0;
  public c2017=0;
  public c2018=0;
  public d2014=0;
  public d2015=0;
  public d2016=0;
  public d2017=0;
  public d2018=0;
  public r2014=0;
  public r2015=0;
  public r2016=0;
  public r2017=0;
  public r2018=0;

  constructor(public zone : NgZone, public service: ServiceService) { }

  ngOnInit() {
    this.preload = true;
     this.service.getFacEducacionC01()
          .subscribe(res=>{
              this.service.facEduC01Array = res as FacEducacionC01[];
              this.countData();              
              this.preload = false;
          });
  }


  countData(){
    const array = this.service.facEduC01Array as FacEducacionC01[];
    for (var _i = 0; _i < array.length; _i++){
      console.log(this.a12014)
        if(array[_i].Anio==="2014"){
          if(!isNaN(array[_i].A1)){
            this.a12014=array[_i].A1;

          }
          if(!isNaN(array[_i].A)){
            this.a2014=array[_i].A;
          }
          if(!isNaN(array[_i].B)){
            this.b2014=array[_i].B;
          }
          if(!isNaN(array[_i].C)){
            this.c2014=array[_i].C;
          }
          if(!isNaN(array[_i].D)){
            this.d2014=array[_i].D;
          }
          if(!isNaN(array[_i].R)){
            this.r2014=array[_i].R;
          }
        }else if(array[_i].Anio==="2015"){
          if(!isNaN(array[_i].A1)){
            this.a12015=array[_i].A1;
          }
          if(!isNaN(array[_i].A)){
            this.a2015=array[_i].A;
          }
          if(!isNaN(array[_i].B)){
            this.b2015=array[_i].B;
          }
          if(!isNaN(array[_i].C)){
            this.c2015=array[_i].C;
          }
          if(!isNaN(array[_i].D)){
            this.d2015=array[_i].D;
          }
          if(!isNaN(array[_i].R)){
            this.r2015=array[_i].R;
          }
        }else if(array[_i].Anio==="2016"){
          if(!isNaN(array[_i].A1)){
            this.a12016=array[_i].A1;
          }
          if(!isNaN(array[_i].A)){
            this.a2016=array[_i].A;
          }
          if(!isNaN(array[_i].B)){
            this.b2016=array[_i].B;
          }
          if(!isNaN(array[_i].C)){
            this.c2016=array[_i].C;
          }
          if(!isNaN(array[_i].D)){
            this.d2016=array[_i].D;
          }
          if(!isNaN(array[_i].R)){
            this.r2016=array[_i].R;
          }
        }else if(array[_i].Anio==="2017"){
          if(!isNaN(array[_i].A1)){
            this.a12017=array[_i].A1;
          }
          if(!isNaN(array[_i].A)){
            this.a2017=array[_i].A;
          }
          if(!isNaN(array[_i].B)){
            this.b2017=array[_i].B;
          }
          if(!isNaN(array[_i].C)){
            this.c2017=array[_i].C;
          }
          if(!isNaN(array[_i].D)){
            this.d2017=array[_i].D;
          }
          if(!isNaN(array[_i].R)){
            this.r2017=array[_i].R;
          }
        }else if(array[_i].Anio==="2018"){
          if(!isNaN(array[_i].A1)){
            this.a12018=array[_i].A1;
          }
          if(!isNaN(array[_i].A)){
            this.a2018=array[_i].A;
          }
          if(!isNaN(array[_i].B)){
            this.b2018=array[_i].B;
          }
          if(!isNaN(array[_i].C)){
            this.c2018=array[_i].C;
          }
          if(!isNaN(array[_i].D)){
            this.d2018=array[_i].D;
          }
          if(!isNaN(array[_i].R)){
            this.r2018=array[_i].R;
          }
        }
    }
  }
 
}
