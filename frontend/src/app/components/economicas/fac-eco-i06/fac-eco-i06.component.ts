import { Component, OnInit,NgZone, Input } from '@angular/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import { ServiceService } from 'src/app/services/service.service';
import { FacEconomiaI06 } from 'src/app/models/fac-economia-i06';

@Component({
  selector: 'app-fac-eco-i06',
  templateUrl: './fac-eco-i06.component.html',
  styleUrls: ['./fac-eco-i06.component.css']
})
export class FacEcoI06Component implements OnInit {

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
    this.service.getFacEconomiaI06()
          .subscribe(res=>{
              this.service.facEcoI06Array = res as FacEconomiaI06[];
              this.countAportes();     
              this.preload = false;          
          });
  }

  countAportes(){
    const array = this.service.facEcoI06Array as FacEconomiaI06[];
    for(var _i = 0; _i < array.length; _i++){
        if(array[_i].Anio==="2014"){
           this.aport2014+=array[_i].Valor;
        }else if(array[_i].Anio==="2015"){
          this.aport2015+=array[_i].Valor;
        }else if(array[_i].Anio==="2016"){
          this.aport2016+=array[_i].Valor;
        }else if(array[_i].Anio==="2017"){
          this.aport2017+=array[_i].Valor;
        }else if(array[_i].Anio==="2018"){
          this.aport2018+=array[_i].Valor;
        }
    }
  }
}
