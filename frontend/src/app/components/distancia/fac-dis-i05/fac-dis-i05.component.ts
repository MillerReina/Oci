import { Component, OnInit,NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacDistanciaI05 } from 'src/app/models/fac-distancia-i05';

@Component({
  selector: 'app-fac-dis-i05',
  templateUrl: './fac-dis-i05.component.html',
  styleUrls: ['./fac-dis-i05.component.css']
})
export class FacDisI05Component implements OnInit {

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
    this.service.getFacDistanciaI05()
          .subscribe(res=>{
             this.service.facDisI05Array = res as FacDistanciaI05[];
             this.countAportes();    
             this.preload = false;           
          });
  }

  countAportes(){
    const array = this.service.facDisI05Array as FacDistanciaI05[];
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
