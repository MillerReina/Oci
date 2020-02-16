import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacEducacionI01 } from 'src/app/models/fac-educacion';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  @Input() compare: boolean;

  public preload: boolean;
  public barChart: am4charts.XYChart;
  public anio2014=0;
  public anio2015=0;
  public anio2016=0;
  public anio2017=0;
  public anio2018=0;

  public semilla2014=0;
  public semilla2015=0;
  public semilla2016=0;
  public semilla2017=0;
  public semilla2018=0;

  public contra2014=0;
  public contra2015=0;
  public contra2016=0;
  public contra2017=0;
  public contra2018=0;

  public sinfin2014=0;
  public sinfin2015=0;
  public sinfin2016=0;
  public sinfin2017=0;
  public sinfin2018=0;
  constructor(public zone : NgZone, public service: ServiceService) { 
    this.preload = true;
    this.service.getFacEducacionI01()
            .subscribe(res=>{
                  this.service.facEduI01Array = res as FacEducacionI01[];
                  this.countData();
                  this.preload = false;
            });
  }

  ngOnInit() {
    
  }


  countData(){
    const array =  this.service.facEduI01Array as FacEducacionI01[];
    for (var _i = 0; _i < array.length; _i++) {
        //console.log(array[_i].ANIOEJECUCION);
        if(parseInt(array[_i].ANIOEJECUCION)==2014){
            this.anio2014++;
            if(array[_i].TIPOFINANCIACION==="CAPITAL SEMILLA"){
                this.semilla2014++;
            }else if(array[_i].TIPOFINANCIACION==="CONTRAPARTIDA"){
                this.contra2014++;
            }else if(array[_i].TIPOFINANCIACION==="SIN FINANCIACION"){
              this.sinfin2014++;
            }
        }else if(parseInt(array[_i].ANIOEJECUCION)==2015){
            this.anio2015++;
            if(array[_i].TIPOFINANCIACION==="CAPITAL SEMILLA"){
              this.semilla2015++;
            }else if(array[_i].TIPOFINANCIACION==="CONTRAPARTIDA"){
              this.contra2015++;
            }else if(array[_i].TIPOFINANCIACION==="SIN FINANCIACION"){
            this.sinfin2015++;
            }
        }else if(parseInt(array[_i].ANIOEJECUCION)==2016){
            this.anio2016++;
            if(array[_i].TIPOFINANCIACION==="CAPITAL SEMILLA"){
              this.semilla2016++;
            }else if(array[_i].TIPOFINANCIACION==="CONTRAPARTIDA"){
              this.contra2016++;
            }else if(array[_i].TIPOFINANCIACION==="SIN FINANCIACION"){
            this.sinfin2016++;
            }
        }else if(parseInt(array[_i].ANIOEJECUCION)==2017){
          this.anio2017++;
          if(array[_i].TIPOFINANCIACION==="CAPITAL SEMILLA"){
            this.semilla2017++;
          }else if(array[_i].TIPOFINANCIACION==="CONTRAPARTIDA"){
            this.contra2017++;
          }else if(array[_i].TIPOFINANCIACION==="SIN FINANCIACION"){
          this.sinfin2017++;
          }
        }else if(parseInt(array[_i].ANIOEJECUCION)==2018){
          this.anio2018++;
          if(array[_i].TIPOFINANCIACION==="CAPITAL SEMILLA"){
            this.semilla2018++;
          }else if(array[_i].TIPOFINANCIACION==="CONTRAPARTIDA"){
            this.contra2018++;
          }else if(array[_i].TIPOFINANCIACION==="SIN FINANCIACION"){
          this.sinfin2018++;
          }
      }
    }
  }

  


  

}
