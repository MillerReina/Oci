import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-ghap3',
  templateUrl: './ghap3.component.html',
  styleUrls: ['./ghap3.component.css']
})
export class Ghap3Component implements OnInit {

  public barChart: am4charts.XYChart;

  //Parametros

      //Especie
    @Input() especie2014: number;
    @Input() especie2015: number;
    @Input() especie2016: number;
    @Input() especie2017: number;
    @Input() especie2018: number;
      //Efectivo
    @Input() efectivo2014: number;
    @Input() efectivo2015: number;
    @Input() efectivo2016: number;
    @Input() efectivo2017: number;
    @Input() efectivo2018: number;
      //Externo
    @Input() externo2014: number;
    @Input() externo2015: number;
    @Input() externo2016: number;
    @Input() externo2017: number;
    @Input() externo2018: number;
  

    constructor(public zone : NgZone, public service: ServiceService) { }

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    this.zone.runOutsideAngular(() => {
    
      let chart = am4core.create("barChart", am4charts.XYChart);

      // Add data
      chart.data = [{
        "year": "2014",
        "Aporte Especie UPTC": this.especie2014,
        "Aporte Efectivo UPTC": this.efectivo2014,
        "Aporte Externo": this.externo2014
      }, {
        "year": "2015",
        "Aporte Especie UPTC": this.especie2015,
        "Aporte Efectivo UPTC": this.efectivo2015,
        "Aporte Externo": this.externo2015
      }, {
        "year": "2016",
        "Aporte Especie UPTC": this.especie2016,
        "Aporte Efectivo UPTC": this.efectivo2016,
        "Aporte Externo": this.externo2016
      }, {
        "year": "2017",
        "Aporte Especie UPTC": this.especie2017,
        "Aporte Efectivo UPTC": this.efectivo2017,
        "Aporte Externo": this.externo2017
      }, {
        "year": "2018",
        "Aporte Especie UPTC": this.especie2018,
        "Aporte Efectivo UPTC": this.efectivo2018,
        "Aporte Externo": this.externo2018
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
      series1.dataFields.valueY = "Aporte Especie UPTC";
      series1.dataFields.categoryX = "year";
      series1.name = "Aporte Especie UPTC";
      series1.strokeWidth = 3;
      series1.bullets.push(new am4charts.CircleBullet());
      series1.tooltipText = "{name} en {categoryX}: {valueY}";
      series1.legendSettings.valueText = "{valueY}";
      series1.visible = false;

      let series2 = chart.series.push(new am4charts.LineSeries());
      series2.dataFields.valueY = "Aporte Efectivo UPTC";
      series2.dataFields.categoryX = "year";
      series2.name = 'Aporte Efectivo UPTC';
      series2.strokeWidth = 3;
      series2.bullets.push(new am4charts.CircleBullet());
      series2.tooltipText = "{name} en {categoryX}: {valueY}";
      series2.legendSettings.valueText = "{valueY}";

      let series3 = chart.series.push(new am4charts.LineSeries());
      series3.dataFields.valueY = "Aporte Externo";
      series3.dataFields.categoryX = "year";
      series3.name = 'Aporte Externo';
      series3.strokeWidth = 3;
      series3.bullets.push(new am4charts.CircleBullet());
      series3.tooltipText = "{name} en {categoryX}: {valueY}";
      series3.legendSettings.valueText = "{valueY}";

      // Add chart cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "zoomY";

      // Add legend
      chart.legend = new am4charts.Legend();
      this.barChart = chart;
    });
   
  }

}
