import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-ghap1',
  templateUrl: './ghap1.component.html',
  styleUrls: ['./ghap1.component.css']
})
export class Ghap1Component implements OnInit {
  public barChart: am4charts.XYChart;
  
  //Parametros
  @Input() anio2014: number;
  @Input() anio2015: number;
  @Input() anio2016: number;
  @Input() anio2017: number;
  @Input() anio2018: number;

  constructor(public zone : NgZone, public service: ServiceService) { }

  ngOnInit() {
    this.createChart();
  }

  createChart(){
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("barChart", am4charts.XYChart);
  
      // ... chart code goes here ...
      chart.paddingRight = 20;

      chart.data = [{
        "Año": "2014",
        "Num": this.anio2014
      }, {
        "Año": "2015",
        "Num": this.anio2015
      }, {
        "Año": "2016",
        "Num": this.anio2016
      }, {
        "Año": "2017",
        "Num": this.anio2017
      }, {
        "Año": "2018",
        "Num": this.anio2018
      }];

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "Año";
      categoryAxis.title.text = "Año";

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = "Num Proyectos";
      
      let series = chart.series.push(new am4charts.ColumnSeries());
    series.name = "Num";
    series.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
    series.columns.template.fill = am4core.color("#104547"); // fill
    series.dataFields.valueY = "Num";
    series.dataFields.categoryX = "Año";

      this.barChart = chart;
    });
  }

}
