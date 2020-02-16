import { Component, OnInit,NgZone, Input } from '@angular/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import { ServiceService } from 'src/app/services/service.service';
import { FacAgropecuariaI06 } from 'src/app/models/fac-agropecuaria-i06';

@Component({
  selector: 'app-fac-agro-i06',
  templateUrl: './fac-agro-i06.component.html',
  styleUrls: ['./fac-agro-i06.component.css']
})
export class FacAgroI06Component implements OnInit {
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
    this.service.getFacAgropecuariaI06()
          .subscribe(res=>{
              this.service.facAgroI06Array = res as FacAgropecuariaI06[];
              this.countAportes();     
              this.preload = false;          
          });
  }

  countAportes(){
    const array = this.service.facAgroI06Array as FacAgropecuariaI06[];
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
