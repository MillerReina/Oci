import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-ghap6',
  templateUrl: './ghap6.component.html',
  styleUrls: ['./ghap6.component.css']
})
export class Ghap6Component implements OnInit {

  public barChart: am4charts.XYChart;

  @Input() aport2014: number;
  @Input() aport2015: number;
  @Input() aport2016: number;
  @Input() aport2017: number;
  @Input() aport2018: number;  

  constructor(public zone: NgZone, public service: ServiceService) { }

  ngOnInit() {
    this.createChart();
  }

  createChart(){
    this.zone.runOutsideAngular(() => {
      var chart = am4core.create("barChart", am4charts.XYChart3D);

      // Add data
      chart.data = [{
        "year": 2014,
        "income": this.aport2014,
        "color": chart.colors.next()
      }, {
        "year": 2015,
        "income": this.aport2015,
        "color": chart.colors.next()
      }, {
        "year": 2016,
        "income": this.aport2016,
        "color": chart.colors.next()
      }, {
        "year": 2017,
        "income": this.aport2017,
        "color": chart.colors.next()
      }, {
        "year": 2018,
        "income": this.aport2018,
        "color": chart.colors.next()
      }];
      
      // Create axes
      var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "year";
      categoryAxis.numberFormatter.numberFormat = "#";
      categoryAxis.renderer.inversed = true;
      
      var  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 
      
      // Create series
      var series = chart.series.push(new am4charts.ColumnSeries3D());
      series.dataFields.valueX = "income";
      series.dataFields.categoryY = "year";
      series.name = "Income";
      series.columns.template.propertyFields.fill = "color";
      series.columns.template.tooltipText = "{valueX}";
      series.columns.template.column3D.stroke = am4core.color("#fff");
      series.columns.template.column3D.strokeOpacity = 0.2;

      this.barChart = chart;
      
      }); // end am4core.ready()
  }
}
