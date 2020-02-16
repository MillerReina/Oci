import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacEconomiaI04 } from 'src/app/models/fac-economia-i04';

@Component({
  selector: 'app-fac-eco-i04',
  templateUrl: './fac-eco-i04.component.html',
  styleUrls: ['./fac-eco-i04.component.css']
})
export class FacEcoI04Component implements OnInit {

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

  public gibemolAporte: number;
  public ftcAporte: number;
  public gsecAporte: number;
  public gibemolNumProductos: number;
  public ftcNumProductos: number;
  public gsecNumProductos: number;

  
  constructor(public zone: NgZone,public service: ServiceService) { }

  ngOnInit() {
    this.preload = true;
    this.service.getFacEconomiaI04()
          .subscribe(res=>{
             this.service.facEcoI04Array = res as FacEconomiaI04[];
             this.countAportes();
             this.preload = false;   
          });
  }

  countAportes(){
    const array = this.service.facEcoI04Array as FacEconomiaI04[];

    for(var _i = 0; _i < array.length; _i++){
      if(array[_i].Grupo==="CREPIB"){
        this.gibnaAporte=array[_i].Valor;
        this.gibnaNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="GEVAFI"){
        this.gipsoAporte=array[_i].Valor;
        this.gipsoNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="GIDICON"){
        this.gidimevetzAporte=array[_i].Valor;
        this.gidimevetzNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="IDEAS"){
        this.giaAporte=array[_i].Valor;
        this.giaNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="INNTEC"){
        this.cideAporte=array[_i].Valor;
        this.cideNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="MODEAL"){
        this.gibemolAporte=array[_i].Valor;
        this.gibemolNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="OIKOS"){
        this.ftcAporte=array[_i].Valor;
        this.ftcNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="PODER"){
        this.gsecAporte=array[_i].Valor;
        this.gsecNumProductos=array[_i].Noproductos;
      }
    }
  }
}

