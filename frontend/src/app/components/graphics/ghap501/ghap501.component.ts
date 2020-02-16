import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-ghap501',
  templateUrl: './ghap501.component.html',
  styleUrls: ['./ghap501.component.css']
})
export class Ghap501Component implements OnInit {

  public barChart: am4charts.XYChart;

  @Input() gibnaAporte: number;
  @Input() gipsoAporte: number;
  @Input() gidimevetzAporte: number;
  @Input() giaAporte: number;
  @Input() cideAporte: number;
  @Input() gibnaNumProductos: number;
  @Input() gipsoNumProductos: number;
  @Input() gidimevetzNumProductos: number;
  @Input() giaNumProductos: number;
  @Input() cideNumProductos: number;

  @Input() gibemolAporte: number;
  @Input() ftcAporte: number;
  @Input() gsecAporte: number;
  @Input() gfmAporte: number;
  @Input() sisbioAporte: number;
  @Input() algelAporte: number;
  @Input() quimolAporte: number;
  @Input() giqtaAporte: number;
  @Input() udesaAporte: number;
  @Input() ebacAporte: number;
  @Input() gammaAporte: number;

  @Input() gibemolNumProductos: number;
  @Input() ftcNumProductos: number;
  @Input() gsecNumProductos: number;
  @Input() gfmNumProductos: number;
  @Input() sisbioNumProductos: number;
  @Input() algelNumProductos: number;
  @Input() quimolNumProductos: number;
  @Input() giqtaNumProductos: number;
  @Input() udesaNumProductos: number;
  @Input() ebacNumProductos: number;
  @Input() gammaNumProductos: number;

  constructor(public zone: NgZone,public service: ServiceService) { }

  ngOnInit() {
    this.createChart();
  }
  

  createChart(){
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("barChart", am4charts.XYChart);
  
      chart.data = [{
        "Grupo": "Catálisis",
        "Aporte": this.gibnaAporte
      }, {
        "Grupo": "GEO",
        "Aporte": this.gipsoAporte
      },{
        "Grupo": "DANUM",
        "Aporte": this.gidimevetzAporte
      },{
        "Grupo": "FINUAS",
        "Aporte": this.giaAporte
      },
      {
        "Grupo": "GICBUPTC",
        "Aporte": this.cideAporte
      },
      {
        "Grupo": "GEBIMOL",
        "Aporte": this.gibemolAporte
      },
      {
        "Grupo": "FTC",
        "Aporte": this.ftcAporte
      },      
      {
        "Grupo": "GSEC",
        "Aporte": this.gsecAporte
      },
      {
        "Grupo": "GFM",
        "Aporte": this.gfmAporte
      },
      {
        "Grupo": "SISBIO",
        "Aporte": this.sisbioAporte
      },
      {
        "Grupo": "Álgebra y Análisis",
        "Aporte": this.algelAporte
      },
      {
        "Grupo": "QUIMOL",
        "Aporte": this.quimolAporte
      },
      {
        "Grupo": "GIQTA",
        "Aporte": this.giqtaAporte
      },
      {
        "Grupo": "UDESA",
        "Aporte": this.udesaAporte
      },
      {
        "Grupo": "EBAC",
        "Aporte": this.ebacAporte
      },
      {
        "Grupo": "GAMMA",
        "Aporte": this.gammaAporte
      }                     
    ];

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "Grupo";
      categoryAxis.title.text = "Grupo";

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = "Aporte";
      
      let series = chart.series.push(new am4charts.ColumnSeries());
    series.name = "Aporte";
    series.columns.template.tooltipText = "Tipo: {name}\n Grupo: {categoryX}\n Aporte: {valueY}";
    series.columns.template.fill = am4core.color("#104547"); // fill
    series.dataFields.valueY = "Aporte";
    series.dataFields.categoryX = "Grupo";

      this.barChart = chart;
    });
  }
}