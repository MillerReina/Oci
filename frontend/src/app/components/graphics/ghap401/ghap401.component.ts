import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-ghap401',
  templateUrl: './ghap401.component.html',
  styleUrls: ['./ghap401.component.css']
})
export class Ghap401Component implements OnInit {

  public barChart: am4charts.XYChart;

  @Input() entidad2017: number;
  @Input() entidad2018: number;

  constructor(public zone : NgZone, public service: ServiceService) { }

  ngOnInit() {
    this.createChart();
  }

  

  createChart(){
    this.zone.runOutsideAngular(() => {
    
      let chart = am4core.create("barChart", am4charts.XYChart);

      // Add data
      chart.data = [{
        "year": "2017",
        "Entidades del Gobierno Regional": this.entidad2017
      }, {
        "year": "2018",
        "Entidades del Gobierno Regional": this.entidad2018
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
      series1.dataFields.valueY = "Entidades del Gobierno Regional";
      series1.dataFields.categoryX = "year";
      series1.name = "Entidades del Gobierno Regional";
      series1.strokeWidth = 3;
      series1.bullets.push(new am4charts.CircleBullet());
      series1.tooltipText = "{categoryX}: {valueY}";
      series1.legendSettings.valueText = "{valueY}";
      series1.visible = false;
     
      // Add chart cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "zoomY";

      // Add legend
      chart.legend = new am4charts.Legend();
      this.barChart = chart;
    });
  }
}
