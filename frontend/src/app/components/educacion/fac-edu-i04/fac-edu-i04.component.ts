import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacEducacionI04 } from 'src/app/models/fac-educacion-i04';

@Component({
  selector: 'app-fac-edu-i04',
  templateUrl: './fac-edu-i04.component.html',
  styleUrls: ['./fac-edu-i04.component.css']
})
export class FacEduI04Component implements OnInit {

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

  public gibemolAporte=0;
  public ftcAporte=0;
  public gsecAporte=0;
  public gfmAporte=0;
  public sisbioAporte=0;
  public algelAporte=0;
  public quimolAporte=0;
  public giqtaAporte=0;
  public udesaAporte=0;
  public ebacAporte=0;
  public gammaAporte=0;

  public gibemolNumProductos=0;
  public ftcNumProductos=0;
  public gsecNumProductos=0;
  public gfmNumProductos=0;
  public sisbioNumProductos=0;
  public algelNumProductos=0;
  public quimolNumProductos=0;
  public giqtaNumProductos=0;
  public udesaNumProductos=0;
  public ebacNumProductos=0;
  public gammaNumProductos=0;

  constructor(public zone: NgZone,public service: ServiceService) { }

  ngOnInit() {
    this.preload = true;
    this.service.getFacEducacionI04()
          .subscribe(res=>{
             this.service.facEduI04Array = res as FacEducacionI04[];
             this.countAportes();
             this.preload = false;   
          });
  }

  countAportes(){
    const array = this.service.facEduI04Array as FacEducacionI04[];

    for(var _i = 0; _i < array.length; _i++){
      if(array[_i].Grupo==="ACFYDE"){
        this.gibnaAporte=array[_i].Valor;
        this.gibnaNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="AION"){
        this.gipsoAporte=array[_i].Valor;
        this.gipsoNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="Caldas"){
        this.gidimevetzAporte=array[_i].Valor;
        this.gidimevetzNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="CCE"){
        this.giaAporte=array[_i].Valor;
        this.giaNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="Filosofía, Educación y Pedagogía"){
        this.cideAporte=array[_i].Valor;
        this.cideNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="GIEPEG"){
        this.gibemolAporte=array[_i].Valor;
        this.gibemolNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="GIFSE"){
        this.ftcAporte=array[_i].Valor;
        this.ftcNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="GIIAH"){
        this.gsecAporte=array[_i].Valor;
        this.gsecNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="HISULA"){
        this.gfmAporte=array[_i].Valor;
        this.gfmNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="ILAC"){
        this.sisbioAporte=array[_i].Valor;
        this.sisbioNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="MICRAM"){
        this.algelAporte=array[_i].Valor;
        this.algelNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="Región"){
        this.quimolAporte=array[_i].Valor;
        this.quimolNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="SENDEROS"){
        this.giqtaAporte=array[_i].Valor;
        this.giqtaNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="TONGUE"){
        this.udesaAporte=array[_i].Valor;
        this.udesaNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="VTS"){
        this.ebacAporte=array[_i].Valor;
        this.ebacNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="WAIRA"){
        this.gammaAporte=array[_i].Valor;
        this.gammaNumProductos=array[_i].Noproductos;
      }
    }
  }
}

