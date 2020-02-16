import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacEducacionC02 } from 'src/app/models/fac-educacion-c02';

@Component({
  selector: 'app-fac-edu-c02',
  templateUrl: './fac-edu-c02.component.html',
  styleUrls: ['./fac-edu-c02.component.css']
})
export class FacEduC02Component implements OnInit {

  @Input() compare: boolean;
  public preload: boolean;
  public barChart: am4charts.XYChart;

  public junior2014=0;
  public asociado2014=0;
  public senior2014=0;
  public emerito2014=0;
  public junior2015=0;
  public asociado2015=0;
  public senior2015=0;
  public emerito2015=0;
  public junior2016=0;
  public asociado2016=0;
  public senior2016=0;
  public emerito2016=0;
  public junior2017=0;
  public asociado2017=0;
  public senior2017=0;
  public emerito2017=0;
  public junior2018=0;
  public asociado2018=0;
  public senior2018=0;
  public emerito2018=0;

  constructor(public zone: NgZone, public service: ServiceService) { }

  ngOnInit() {
    this.preload = true;
    this.service.getFacEducacionC02()
          .subscribe(res=>{
              this.service.facEduC02Array = res as FacEducacionC02[];
              this.countData();
              this.preload = false;             
          });
  }

  countData(){
      const array = this.service.facEduC02Array as FacEducacionC02[];
      for (var _i = 0; _i < array.length; _i++){
          if(array[_i].Anio==="2014"){
              if(!isNaN(array[_i].InvestigadorJunior)){
                 this.junior2014=array[_i].InvestigadorJunior;
              }
              if(!isNaN(array[_i].InvestigadorAsociado)){
                this.asociado2014=array[_i].InvestigadorAsociado;
              }
              if(!isNaN(array[_i].InvestigadorSenior)){
                this.senior2014=array[_i].InvestigadorSenior;
              }
              if(!isNaN(array[_i].InvestigadorEmerito)){
                this.emerito2014=array[_i].InvestigadorEmerito;
             }
          }else if(array[_i].Anio==="2015"){
            if(!isNaN(array[_i].InvestigadorJunior)){
                this.junior2015=array[_i].InvestigadorJunior;
            }
            if(!isNaN(array[_i].InvestigadorAsociado)){
              this.asociado2015=array[_i].InvestigadorAsociado;
            }
           if(!isNaN(array[_i].InvestigadorSenior)){
               this.senior2015=array[_i].InvestigadorSenior;
           }
           if(!isNaN(array[_i].InvestigadorEmerito)){
               this.emerito2015=array[_i].InvestigadorEmerito;
            }
          }else if(array[_i].Anio==="2016"){
            if(!isNaN(array[_i].InvestigadorJunior)){
                this.junior2016=array[_i].InvestigadorJunior;
            }
            if(!isNaN(array[_i].InvestigadorAsociado)){
              this.asociado2016=array[_i].InvestigadorAsociado;
            }
           if(!isNaN(array[_i].InvestigadorSenior)){
               this.senior2016=array[_i].InvestigadorSenior;
           }
           if(!isNaN(array[_i].InvestigadorEmerito)){
               this.emerito2016=array[_i].InvestigadorEmerito;
            }
          }else if(array[_i].Anio==="2017"){
            if(!isNaN(array[_i].InvestigadorJunior)){
                this.junior2017=array[_i].InvestigadorJunior;
            }
            if(!isNaN(array[_i].InvestigadorAsociado)){
              this.asociado2017=array[_i].InvestigadorAsociado;
            }
           if(!isNaN(array[_i].InvestigadorSenior)){
               this.senior2017=array[_i].InvestigadorSenior;
           }
           if(!isNaN(array[_i].InvestigadorEmerito)){
               this.emerito2017=array[_i].InvestigadorEmerito;
            }
          }else if(array[_i].Anio==="2018"){
            if(!isNaN(array[_i].InvestigadorJunior)){
                this.junior2018=array[_i].InvestigadorJunior;
            }
            if(!isNaN(array[_i].InvestigadorAsociado)){
              this.asociado2018=array[_i].InvestigadorAsociado;
            }
           if(!isNaN(array[_i].InvestigadorSenior)){
               this.senior2018=array[_i].InvestigadorSenior;
           }
           if(!isNaN(array[_i].InvestigadorEmerito)){
               this.emerito2018=array[_i].InvestigadorEmerito;
            }
          }
      }
  }

  

}

