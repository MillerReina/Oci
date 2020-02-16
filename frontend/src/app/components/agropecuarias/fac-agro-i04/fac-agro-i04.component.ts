import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacAgropecuariaI04 } from 'src/app/models/fac-agropecuaria-i04';

@Component({
  selector: 'app-fac-agro-i04',
  templateUrl: './fac-agro-i04.component.html',
  styleUrls: ['./fac-agro-i04.component.css']
})
export class FacAgroI04Component implements OnInit {

  @Input() compare: boolean;
  public preload: boolean;
  public barChart: am4charts.XYChart;

  public gibnaAporte=0;
  public gipsoAporte=0;
  public gidimevetzAporte=0;
  public giaAporte=0;
  public cideAporte=0;
  public gibnaNumProductos=0;
  public gipsoNumProductos=0;
  public gidimevetzNumProductos=0;
  public giaNumProductos=0;
  public cideNumProductos=0;  
  constructor(public zone: NgZone,public service: ServiceService) { }

  ngOnInit() {
    this.preload = true;
    this.service.getFacAgropecuariaI04()
          .subscribe(res=>{
             this.service.facAgroI04Array = res as FacAgropecuariaI04[];
             this.countAportes();
             this.preload = false;   
          });
  }

  countAportes(){
    const array = this.service.facAgroI04Array as FacAgropecuariaI04[];

    for(var _i = 0; _i < array.length; _i++){
      if(array[_i].Grupo==="GIBNA"){
        this.gibnaAporte=array[_i].Valor;
        this.gibnaNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="GIPSO"){
        this.gipsoAporte=array[_i].Valor;
        this.gipsoNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="GIDIMEVETZ"){
        this.gidimevetzAporte=array[_i].Valor;
        this.gidimevetzNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="GIA"){
        this.giaAporte=array[_i].Valor;
        this.giaNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="CIDE"){
        this.cideAporte=array[_i].Valor;
        this.cideNumProductos=array[_i].Noproductos;
      }
    }
  }
}
