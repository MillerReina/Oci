import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacAgropecuariaF02 } from 'src/app/models/fac-agropecuaria-f02';

@Component({
  selector: 'app-fac-agro-f02',
  templateUrl: './fac-agro-f02.component.html',
  styleUrls: ['./fac-agro-f02.component.css']
})
export class FacAgroF02Component implements OnInit {
  
  @Input() compare: boolean;
  public preload: boolean;
  
  public barChart: am4charts.XYChart;
  public investigadores2014=0;
  public investigadores2018=0;
  public veterinaria2014=0;
  public ingAgro2014=0;
  public veterinaria2018=0;
  public ingAgro2018=0;
  constructor(public zone: NgZone, public service: ServiceService) { }

  ngOnInit() {
    this.preload = true;
    this.service.getFacAgropecuariaF02()
      .subscribe(res=>{
          this.service.facAgroF02Array = res as FacAgropecuariaF02[];
          this.createData();    
          this.preload = false;        
      });
  }

  createData(){
    const array = this.service.facAgroF02Array as FacAgropecuariaF02[];
    for(var _i = 0; _i < array.length; _i++){
        if(array[_i].AnionEjecucion==="2014"){
          this.investigadores2014++;
          if(array[_i].Programa==="INGENIERIA AGRONOMICA"){
             this.ingAgro2014++;
          }else if(array[_i].Programa==="MEDICINA VETERINARIA Y ZOOTECNIA"){
              this.veterinaria2014++;
          }
        }else if(array[_i].AnionEjecucion==="2018"){
            this.investigadores2018++;
            if(array[_i].Programa==="INGENIERIA AGRONOMICA"){
              this.ingAgro2018++;
           }else if(array[_i].Programa==="MEDICINA VETERINARIA Y ZOOTECNIA"){
               this.veterinaria2018++;
           }
        }
    }
  } 
}