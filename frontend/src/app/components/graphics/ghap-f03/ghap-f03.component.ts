import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-ghap-f03',
  templateUrl: './ghap-f03.component.html',
  styleUrls: ['./ghap-f03.component.css']
})
export class GhapF03Component implements OnInit {

  public barChart: am4charts.XYChart;

  @Input()  semilleros2014: number; 
  @Input()  semilleros2015: number; 
  @Input()  semilleros2016: number; 
  @Input()  semilleros2017: number; 
  @Input()  semilleros2018: number; 

  constructor(public zone:NgZone,public service: ServiceService) { }

  ngOnInit() {
    this.createChart();
  }

  createChart(){
    this.zone.runOutsideAngular(() => {
    
        let chart = am4core.create("barChart", am4charts.XYChart);
  
        // Add data
        chart.data = [{
          "year": "2014",
          "N° semilleros": this.semilleros2014
        }, {
          "year": "2015",
          "N° semilleros": this.semilleros2015
        }, {
          "year": "2016",
          "N° semilleros": this.semilleros2016
        }, {
          "year": "2017",
          "N° semilleros": this.semilleros2017
        }, {
          "year": "2018",
          "N° semilleros": this.semilleros2018
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
        series1.dataFields.valueY =  "N° semilleros";
        series1.dataFields.categoryX = "year";
        series1.name = "N° semilleros";
        series1.strokeWidth = 3;
        series1.bullets.push(new am4charts.CircleBullet());
        series1.tooltipText = "{categoryX}: {valueY}";
        series1.legendSettings.valueText = "{valueY}";
        series1.visible = false;

        // Add chart cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "zoomY";
  
        this.barChart = chart;
      });
  }

}
