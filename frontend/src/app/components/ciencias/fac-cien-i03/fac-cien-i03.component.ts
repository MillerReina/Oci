import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacCienciasI03 } from 'src/app/models/fac-ciencias-i03';

@Component({
  selector: 'app-fac-cien-i03',
  templateUrl: './fac-cien-i03.component.html',
  styleUrls: ['./fac-cien-i03.component.css']
})
export class FacCienI03Component implements OnInit {
  
  @Input() compare: boolean;

  public preload: boolean;
  public barChart: am4charts.XYChart;

  public entidad2014 =0;
  public entidad2015=0; 
  public entidad2016=0; 
  public entidad2017 = 0;
  public entidad2018 = 0;
  public cenInvestigacion2014 =0;
  public cenInvestigacion2015=0; 
  public cenInvestigacion2016=0; 
  public cenInvestigacion2017 = 0;
  public cenInvestigacion2018 = 0;
  public colciencias2014 =0;
  public colciencias2015=0; 
  public colciencias2016=0; 
  public colciencias2017 = 0;
  public colciencias2018 = 0;
  public hospitales2014 =0;
  public hospitales2015=0; 
  public hospitales2016=0; 
  public hospitales2017 = 0;
  public hospitales2018 = 0;
  public privadas2014 =0;
  public privadas2015=0; 
  public privadas2016=0; 
  public privadas2017 = 0;
  public privadas2018 = 0;
  public ong2014 =0;
  public ong2015=0; 
  public ong2016=0; 
  public ong2017 = 0;
  public ong2018 = 0;
  constructor(public zone : NgZone, public service: ServiceService) { }

  ngOnInit() {
    this.preload = true;
    this.service.getFacCienciasI03()
          .subscribe(res=>{
             this.service.facCienI03Array = res as FacCienciasI03[];
             this.countAportes(); 
             this.preload = false;                
          });
  }

  countAportes(){
    const array = this.service.facCienI03Array as FacCienciasI03[];
    for(var _i = 0; _i < array.length; _i++){
        if(array[_i].TIPODEENTIDAD==="CENTRO DE INVESTIGACIÓN Y DESARROLLO TECNOLÓGICO"){
           if(array[_i].ANIOEJECUCION==="2014"){
              this.cenInvestigacion2014+=array[_i].MONTOEXTERNO1;
           }else if(array[_i].ANIOEJECUCION==="2015"){
              this.cenInvestigacion2015+=array[_i].MONTOEXTERNO1;
           }else if(array[_i].ANIOEJECUCION==="2016"){
            this.cenInvestigacion2016+=array[_i].MONTOEXTERNO1;
           }else if(array[_i].ANIOEJECUCION==="2017"){
            this.cenInvestigacion2017+=array[_i].MONTOEXTERNO1;
           }else if(array[_i].ANIOEJECUCION==="2018"){
            this.cenInvestigacion2018+=array[_i].MONTOEXTERNO1;
           }
        }else if(array[_i].TIPODEENTIDAD==="COLCIENCIAS"){
              if(array[_i].ANIOEJECUCION==="2014"){
                this.colciencias2014+=array[_i].MONTOEXTERNO1;
              }else if(array[_i].ANIOEJECUCION==="2015"){
                  this.colciencias2015+=array[_i].MONTOEXTERNO1;
              }else if(array[_i].ANIOEJECUCION==="2016"){
                  this.colciencias2016+=array[_i].MONTOEXTERNO1;
              }else if(array[_i].ANIOEJECUCION==="2017"){
                  this.colciencias2017+=array[_i].MONTOEXTERNO1;
              }else if(array[_i].ANIOEJECUCION==="2018"){
                  this.colciencias2018+=array[_i].MONTOEXTERNO1;
              }    
         }else if(array[_i].TIPODEENTIDAD==="ENTIDADES DEL GOBIERNO REGIONAL"){
          if(array[_i].ANIOEJECUCION==="2014"){
            this.entidad2014+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2015"){
              this.entidad2015+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2016"){
              this.entidad2016+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2017"){
              this.entidad2017+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2018"){
              this.entidad2018+=array[_i].MONTOEXTERNO1;
          } 
        }else if(array[_i].TIPODEENTIDAD==="INSTITUCIONES PRIVADAS SIN FINES DE LUCRO IPSFL"){
          if(array[_i].ANIOEJECUCION==="2014"){
            this.privadas2014+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2015"){
              this.privadas2015+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2016"){
              this.privadas2016+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2017"){
              this.privadas2017+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2018"){
              this.privadas2018+=array[_i].MONTOEXTERNO1;
          }
        }else if(array[_i].TIPODEENTIDAD==="ONG, ASOCIACIONES Y AGREMIACIONES PROFESIONALES"){
          if(array[_i].ANIOEJECUCION==="2014"){
            this.ong2014+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2015"){
              this.ong2015+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2016"){
              this.ong2016+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2017"){
              this.ong2017+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2018"){
              this.ong2018+=array[_i].MONTOEXTERNO1;
          }
        }else if(array[_i].TIPODEENTIDAD==="HOSPITALES Y CLÍNICAS"){
          if(array[_i].ANIOEJECUCION==="2014"){
            this.hospitales2014+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2015"){
              this.hospitales2015+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2016"){
              this.hospitales2016+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2017"){
              this.hospitales2017+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2018"){
              this.hospitales2018+=array[_i].MONTOEXTERNO1;
          }
        }
    }
  }
}
