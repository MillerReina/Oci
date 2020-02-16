import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacCienciasI04 } from 'src/app/models/fac-ciencias-i04';

@Component({
  selector: 'app-fac-cien-i04',
  templateUrl: './fac-cien-i04.component.html',
  styleUrls: ['./fac-cien-i04.component.css']
})
export class FacCienI04Component implements OnInit {

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
    this.service.getFacCienciasI04()
          .subscribe(res=>{
             this.service.facCienI04Array = res as FacCienciasI04[];
             this.countAportes();
             this.preload = false;   
          });
  }

  countAportes(){
    const array = this.service.facCienI04Array as FacCienciasI04[];

    for(var _i = 0; _i < array.length; _i++){
      if(array[_i].Grupo==="Catálisis"){
        this.gibnaAporte=array[_i].Valor;
        this.gibnaNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="GEO"){
        this.gipsoAporte=array[_i].Valor;
        this.gipsoNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="DANUM"){
        this.gidimevetzAporte=array[_i].Valor;
        this.gidimevetzNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="FINUAS"){
        this.giaAporte=array[_i].Valor;
        this.giaNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="GICBUPTC"){
        this.cideAporte=array[_i].Valor;
        this.cideNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="GEBIMOL"){
        this.gibemolAporte=array[_i].Valor;
        this.gibemolNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="FTC"){
        this.ftcAporte=array[_i].Valor;
        this.ftcNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="GSEC"){
        this.gsecAporte=array[_i].Valor;
        this.gsecNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="GFM"){
        this.gfmAporte=array[_i].Valor;
        this.gfmNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="SISBIO"){
        this.sisbioAporte=array[_i].Valor;
        this.sisbioNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="Álgebra y Análisis"){
        this.algelAporte=array[_i].Valor;
        this.algelNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="QUIMOL"){
        this.quimolAporte=array[_i].Valor;
        this.quimolNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="GIQTA"){
        this.giqtaAporte=array[_i].Valor;
        this.giqtaNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="UDESA"){
        this.udesaAporte=array[_i].Valor;
        this.udesaNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="EBAC"){
        this.ebacAporte=array[_i].Valor;
        this.ebacNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="GAMMA"){
        this.gammaAporte=array[_i].Valor;
        this.gammaNumProductos=array[_i].Noproductos;
      }
    }
  }
}
