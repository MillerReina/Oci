import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacCienciasI02 } from 'src/app/models/fac-ciencias-i02';

@Component({
  selector: 'app-fac-cien-i02',
  templateUrl: './fac-cien-i02.component.html',
  styleUrls: ['./fac-cien-i02.component.css']
})
export class FacCienI02Component implements OnInit {

  @Input() compare: boolean;
  
  public preload: boolean;
  public barChart: am4charts.XYChart;

  public especie2014=0;
  public especie2015=0;
  public especie2016=0;
  public especie2017=0;
  public especie2018=0;

  public efectivo2014=0;
  public efectivo2015=0;
  public efectivo2016=0;
  public efectivo2017=0;
  public efectivo2018=0;

  public externo2014=0;
  public externo2015=0;
  public externo2016=0;
  public externo2017=0;
  public externo2018=0;
  constructor(public zone : NgZone,public service: ServiceService) { }

  ngOnInit() {
    this.preload = true;
    this.service.getFacCienciasI02()
          .subscribe(res=>{
             this.service.facCienI02Array = res as FacCienciasI02[];
             this.countAportes();
             this.preload = false;  
          });
  }
  countAportes(){
    const array = this.service.facCienI02Array as FacCienciasI02[];
    
    for(var _i = 0; _i < array.length; _i++){
        if(parseInt(array[_i].ANIOEJECUCION)==2014){
            this.especie2014+=parseInt(array[_i].MONTOESPECIEINTERNO);
            this.externo2014+=parseInt(array[_i].MONTOEXTERNO1);
            this.efectivo2014+=parseInt(array[_i].MONTOEFECTIVOINTERNO);
        }else if(parseInt(array[_i].ANIOEJECUCION)==2015){
          this.especie2015+=parseInt(array[_i].MONTOESPECIEINTERNO);
          this.externo2015+=parseInt(array[_i].MONTOEXTERNO1);
          this.efectivo2015+=parseInt(array[_i].MONTOEFECTIVOINTERNO);
        }else if(parseInt(array[_i].ANIOEJECUCION)==2016){
          this.especie2016+=parseInt(array[_i].MONTOESPECIEINTERNO);
          this.externo2016+=parseInt(array[_i].MONTOEXTERNO1);
          this.efectivo2016+=parseInt(array[_i].MONTOEFECTIVOINTERNO);
        }else if(parseInt(array[_i].ANIOEJECUCION)==2017){
          this.especie2017+=parseInt(array[_i].MONTOESPECIEINTERNO);
          this.externo2017+=parseInt(array[_i].MONTOEXTERNO1);
          this.efectivo2017+=parseInt(array[_i].MONTOEFECTIVOINTERNO);
        }else if(parseInt(array[_i].ANIOEJECUCION)==2018){
          this.especie2018+=parseInt(array[_i].MONTOESPECIEINTERNO);
          this.externo2018+=parseInt(array[_i].MONTOEXTERNO1);
          this.efectivo2018+=parseInt(array[_i].MONTOEFECTIVOINTERNO);
        }
    }
  }  
}
