import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-ghap2',
  templateUrl: './ghap2.component.html',
  styleUrls: ['./ghap2.component.css']
})
export class Ghap2Component implements OnInit {
  
  public lineChart: am4charts.XYChart;

  //Parametros

    //Capital Semilla
  @Input() semilla2014: number;
  @Input() semilla2015: number;
  @Input() semilla2016: number;
  @Input() semilla2017: number;
  @Input() semilla2018: number;
    //Contrapartida
  @Input() contra2014: number;
  @Input() contra2015: number;
  @Input() contra2016: number;
  @Input() contra2017: number;
  @Input() contra2018: number;
    //Sin financiacion
  @Input() sinfin2014: number;
  @Input() sinfin2015: number;
  @Input() sinfin2016: number;
  @Input() sinfin2017: number;
  @Input() sinfin2018: number;

  constructor(public zone : NgZone, public service: ServiceService) { }

  ngOnInit() {
    this.createChart();
  }

  createChart(){
    this.zone.runOutsideAngular(() => {
    
      let chart = am4core.create("lineChart", am4charts.XYChart);

      // Add data
      chart.data = [{
        "year": "2014",
        "Capital Semilla": this.semilla2014,
        "Contrapartida": this.contra2014,
        "Sin Financiación": this.sinfin2014
      }, {
        "year": "2015",
        "Capital Semilla": this.semilla2015,
        "Contrapartida": this.contra2015,
        "Sin Financiación": this.sinfin2015
      }, {
        "year": "2016",
        "Capital Semilla": this.semilla2016,
        "Contrapartida": this.contra2016,
        "Sin Financiación": this.sinfin2016
      }, {
        "year": "2017",
        "Capital Semilla": this.semilla2017,
        "Contrapartida": this.contra2017,
        "Sin Financiación": this.sinfin2017
      }, {
        "year": "2018",
        "Capital Semilla": this.semilla2018,
        "Contrapartida": this.contra2018,
        "Sin Financiación": this.sinfin2018
      }];

      // Create category axis
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "year";
      categoryAxis.renderer.opposite = false;

      // Create value axis
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.inversed = false;
      valueAxis.title.text = "Cantidad";
      valueAxis.renderer.minLabelPosition = 0.01;

      // Create series
      let series1 = chart.series.push(new am4charts.LineSeries());
      series1.dataFields.valueY = "Capital Semilla";
      series1.dataFields.categoryX = "year";
      series1.name = "Capital Semilla";
      series1.strokeWidth = 3;
      series1.bullets.push(new am4charts.CircleBullet());
      series1.tooltipText = "{name} en {categoryX}: {valueY}";
      series1.legendSettings.valueText = "{valueY}";
      series1.visible = false;

      let series2 = chart.series.push(new am4charts.LineSeries());
      series2.dataFields.valueY = "Contrapartida";
      series2.dataFields.categoryX = "year";
      series2.name = 'Contrapartida';
      series2.strokeWidth = 3;
      series2.bullets.push(new am4charts.CircleBullet());
      series2.tooltipText = "{name} en {categoryX}: {valueY}";
      series2.legendSettings.valueText = "{valueY}";

      let series3 = chart.series.push(new am4charts.LineSeries());
      series3.dataFields.valueY = "Sin Financiación";
      series3.dataFields.categoryX = "year";
      series3.name = 'Sin Financiación';
      series3.strokeWidth = 3;
      series3.bullets.push(new am4charts.CircleBullet());
      series3.tooltipText = "{name} en {categoryX}: {valueY}";
      series3.legendSettings.valueText = "{valueY}";

      // Add chart cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "zoomY";

      // Add legend
      chart.legend = new am4charts.Legend();
      this.lineChart = chart;
    });
  }
}
