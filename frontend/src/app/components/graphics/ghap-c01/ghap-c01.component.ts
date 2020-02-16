import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-ghap-c01',
  templateUrl: './ghap-c01.component.html',
  styleUrls: ['./ghap-c01.component.css']
})
export class GhapC01Component implements OnInit {

  public barChart: am4charts.XYChart;
 

  @Input() a12014: number; 
  @Input() a12015: number; 
  @Input() a12016: number; 
  @Input() a12017: number; 
  @Input() a12018: number; 
  @Input() a2014: number; 
  @Input() a2015: number; 
  @Input() a2016: number; 
  @Input() a2017: number; 
  @Input() a2018: number; 
  @Input() b2014: number; 
  @Input() b2015: number; 
  @Input() b2016: number; 
  @Input() b2017: number; 
  @Input() b2018: number; 
  @Input() c2014: number; 
  @Input() c2015: number; 
  @Input() c2016: number; 
  @Input() c2017: number; 
  @Input() c2018: number; 
  @Input() d2014: number; 
  @Input() d2015: number; 
  @Input() d2016: number; 
  @Input() d2017: number; 
  @Input() d2018: number; 
  @Input() r2014: number; 
  @Input() r2015: number; 
  @Input() r2016: number; 
  @Input() r2017: number; 
  @Input() r2018: number; 

  constructor(public zone:NgZone,public service: ServiceService) { }

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    this.zone.runOutsideAngular(() => {

      var chart = am4core.create("barChart", am4charts.XYChart);

      // Add data
      chart.data = [{
        "year": 2014,
        "A1": this.a12014,
        "A": this.a2014,
        "B": this.b2014,
        "C": this.c2014,
        "D": this.d2014,
        "R": this.r2014
      }, {
        "year": 2015,
        "A1": this.a12015,
        "A": this.a2015,
        "B": this.b2015,
        "C": this.c2015,
        "D": this.d2015,
        "R": this.r2015
      }, {
        "year": 2016,
        "A1": this.a12016,
        "A": this.a2016,
        "B": this.b2016,
        "C": this.c2016,
        "D": this.d2016,
        "R": this.r2016
      }, {
        "year": 2017,
        "A1": this.a12017,
        "A": this.a2017,
        "B": this.b2017,
        "C": this.c2017,
        "D": this.d2017,
        "R": this.r2017
      }, {
        "year": 2018,
        "A1": this.a12018,
        "A": this.a2018,
        "B": this.b2018,
        "C": this.c2018,
        "D": this.d2018,
        "R": this.r2018
      }];

      // Create axes
      var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "year";
      categoryAxis.numberFormatter.numberFormat = "#";
      categoryAxis.renderer.inversed = true;
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.cellStartLocation = 0.1;
      categoryAxis.renderer.cellEndLocation = 0.9;

      var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.opposite = true;

      // Create series
      function createSeries(field, name) {
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueX = field;
        series.dataFields.categoryY = "year";
        series.name = name;
        series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
        series.columns.template.height = am4core.percent(100);
        series.sequencedInterpolation = true;

        var valueLabel = series.bullets.push(new am4charts.LabelBullet());
        valueLabel.label.text = "{valueX}";
        valueLabel.label.horizontalCenter = "left";
        valueLabel.label.dx = 10;
        valueLabel.label.hideOversized = false;
        valueLabel.label.truncate = false;

        var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
        categoryLabel.label.text = "{name}";
        categoryLabel.label.horizontalCenter = "right";
        categoryLabel.label.dx = -10;
        categoryLabel.label.fill = am4core.color("#fff");
        categoryLabel.label.hideOversized = false;
        categoryLabel.label.truncate = false;
      }
      createSeries("A1", "A1");
      createSeries("A", "A");
      createSeries("B", "B");
      createSeries("C", "C");
      createSeries("D", "D");
      createSeries("R", "R");

      chart.legend = new am4charts.Legend();
    });
  }
}
