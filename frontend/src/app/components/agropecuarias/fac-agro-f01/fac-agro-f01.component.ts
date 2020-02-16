import { Component, OnInit,NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacAgropecuariaF01 } from 'src/app/models/fac-agropecuaria-f01';


@Component({
  selector: 'app-fac-agro-f01',
  templateUrl: './fac-agro-f01.component.html',
  styleUrls: ['./fac-agro-f01.component.css']
})
export class FacAgroF01Component implements OnInit {

  @Input() compare: boolean;
  public preload: boolean;

  public barChart: am4charts.XYChart;
  public veterinaria2014=0;
  public ingAgro2014=0;
  public veterinaria2015=0;
  public ingAgro2015=0;
  public veterinaria2016=0;
  public ingAgro2016=0;
  public veterinaria2017=0;
  public ingAgro2017=0;
  public veterinaria2018=0;
  public ingAgro2018=0;

  public investigadores2014=0;
  public investigadores2015=0;
  public investigadores2016=0;
  public investigadores2017=0;
  public investigadores2018=0;
  constructor(public zone: NgZone, public service: ServiceService) { }
  
  ngOnInit() {
    this.preload = true;
    this.service.getFacAgropecuariaF01()
        .subscribe(res=>{
           this.service.facAgroF01Array = res as FacAgropecuariaF01[];
           this.countDatas();
           this.preload = false;             
        });
  }



  countDatas(){
    const array = this.service.facAgroF01Array as FacAgropecuariaF01[];
    for (var _i = 0; _i < array.length; _i++){
        if(array[_i].Anio==="2014"){
          this.investigadores2014++;
          if(array[_i].Programa==="MEDICINA VETERINARIA Y ZOOTECNIA"){
              this.veterinaria2014++;
          }else if(array[_i].Programa==="INGENIERIA AGRONOMICA"){
              this.ingAgro2014++;
          }
        }else if(array[_i].Anio==="2015"){
              this.investigadores2015++;
              if(array[_i].Programa==="MEDICINA VETERINARIA Y ZOOTECNIA"){
                this.veterinaria2015++;
              }else if(array[_i].Programa==="INGENIERIA AGRONOMICA"){
                this.ingAgro2015++;
              }
        }else if(array[_i].Anio==="2016"){
              this.investigadores2016++;
              if(array[_i].Programa==="MEDICINA VETERINARIA Y ZOOTECNIA"){
                this.veterinaria2016++;
              }else if(array[_i].Programa==="INGENIERIA AGRONOMICA"){
                this.ingAgro2016++;
              }
        }else if(array[_i].Anio==="2017"){
              this.investigadores2017++;
              if(array[_i].Programa==="MEDICINA VETERINARIA Y ZOOTECNIA"){
                this.veterinaria2017++;
              }else if(array[_i].Programa==="INGENIERIA AGRONOMICA"){
                this.ingAgro2017++;
              }
        }else if(array[_i].Anio==="2018"){
              this.investigadores2018++;
              if(array[_i].Programa==="MEDICINA VETERINARIA Y ZOOTECNIA"){
                  this.veterinaria2018++;
              }else if(array[_i].Programa==="INGENIERIA AGRONOMICA"){
                  this.ingAgro2018++;
              }
        }
    }
  }
}
