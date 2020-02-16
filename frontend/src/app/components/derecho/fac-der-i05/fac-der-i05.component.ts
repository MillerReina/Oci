import { Component, OnInit,NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacDerechoI05 } from 'src/app/models/fac-derecho-i05';

@Component({
  selector: 'app-fac-der-i05',
  templateUrl: './fac-der-i05.component.html',
  styleUrls: ['./fac-der-i05.component.css']
})
export class FacDerI05Component implements OnInit {

  @Input() compare: boolean;
  
  public preload: boolean;
  public barChart: am4charts.XYChart;

  public aport2014=0;
  public aport2015=0;
  public aport2016=0;
  public aport2017=0;
  public aport2018=0;
  constructor(public zone: NgZone, public service: ServiceService) { }

  ngOnInit() {
    this.preload = true;
    this.service.getFacDerechoI05()
          .subscribe(res=>{
             this.service.facDerI05Array = res as FacDerechoI05[];
             this.countAportes();  
             this.preload = false;             
          });
  }

  countAportes(){
    const array = this.service.facDerI05Array as FacDerechoI05[];
    for(var _i = 0; _i < array.length; _i++){
        if(array[_i].Vigenciadocumento==="2014"){
          if(!isNaN(array[_i].Valorrecaudo)){
           this.aport2014+=array[_i].Valorrecaudo;
          }
        }else if(array[_i].Vigenciadocumento==="2015"){
          if(!isNaN(array[_i].Valorrecaudo)){
            this.aport2015+=array[_i].Valorrecaudo;
           }
        }else if(array[_i].Vigenciadocumento==="2016"){
          if(!isNaN(array[_i].Valorrecaudo)){
            this.aport2016+=array[_i].Valorrecaudo;
           }
        }else if(array[_i].Vigenciadocumento==="2017"){
          if(!isNaN(array[_i].Valorrecaudo)){
            this.aport2017+=array[_i].Valorrecaudo;
           }
        }else if(array[_i].Vigenciadocumento==="2018"){
          if(!isNaN(array[_i].Valorrecaudo)){
            this.aport2018+=array[_i].Valorrecaudo;
           }
        }
    }
  }
}


