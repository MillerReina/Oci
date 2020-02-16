import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-ghap5second',
  templateUrl: './ghap5second.component.html',
  styleUrls: ['./ghap5second.component.css']
})
export class Ghap5secondComponent implements OnInit {

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
        "Grupo": "ACFYDE",
        "Aporte": this.gibnaAporte
      }, {
        "Grupo": "AION",
        "Aporte": this.gipsoAporte
      },{
        "Grupo": "Caldas",
        "Aporte": this.gidimevetzAporte
      },{
        "Grupo": "CCE",
        "Aporte": this.giaAporte
      },
      {
        "Grupo": "Filosofía, Educación y Pedagogía",
        "Aporte": this.cideAporte
      },
      {
        "Grupo": "GIEPEG",
        "Aporte": this.gibemolAporte
      },
      {
        "Grupo": "GIFSE",
        "Aporte": this.ftcAporte
      },      
      {
        "Grupo": "GIIAH",
        "Aporte": this.gsecAporte
      },
      {
        "Grupo": "HISULA",
        "Aporte": this.gfmAporte
      },
      {
        "Grupo": "ILAC",
        "Aporte": this.sisbioAporte
      },
      {
        "Grupo": "MICRAM",
        "Aporte": this.algelAporte
      },
      {
        "Grupo": "Región",
        "Aporte": this.quimolAporte
      },
      {
        "Grupo": "SENDEROS",
        "Aporte": this.giqtaAporte
      },
      {
        "Grupo": "TONGUE",
        "Aporte": this.udesaAporte
      },
      {
        "Grupo": "VTS",
        "Aporte": this.ebacAporte
      },
      {
        "Grupo": "WAIRA",
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