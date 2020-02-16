import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-ghap-f0101',
  templateUrl: './ghap-f0101.component.html',
  styleUrls: ['./ghap-f0101.component.css']
})
export class GhapF0101Component implements OnInit {
  
  
  public barChart: am4charts.XYChart;

  @Input()  investigadores2014: number;
  @Input()  investigadores2018: number;
  @Input()  veterinaria2014: number;
  @Input()  ingAgro2014: number;
  @Input()  veterinaria2018: number;
  @Input()  ingAgro2018: number; 

  
  constructor(public zone:NgZone,public service: ServiceService) { }
  ngOnInit() {
    this.createChart();
    this.createGraph();
  }

  createChart(){
    this.zone.runOutsideAngular(() => {
    
        let chart = am4core.create("barChart", am4charts.XYChart);
  
        // Add data
        chart.data = [{
          "year": "2014",
          "N° Jovenes Investigadores": this.investigadores2014
        },{
          "year": "2018",
          "N° Jovenes Investigadores": this.investigadores2018
        }];
  
        // Create category axis
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.opposite = false;
  
        // Create value axis
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.inversed = false;
        valueAxis.title.text = "Número";
        valueAxis.renderer.minLabelPosition = 0.01;
  
        // Create series
        let series1 = chart.series.push(new am4charts.LineSeries());
        series1.dataFields.valueY =  "N° Jovenes Investigadores";
        series1.dataFields.categoryX = "year";
        series1.name = "N° Jovenes Investigadores";
        series1.strokeWidth = 3;
        series1.bullets.push(new am4charts.CircleBullet());
        series1.tooltipText = "{categoryX}: {valueY}";
        series1.legendSettings.valueText = "{valueY}";
        series1.visible = false;

        // Add chart cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "zoomY";
  
        // Add legend
        this.barChart = chart;
      });
  }

  createGraph() {
    this.zone.runOutsideAngular(() => {

      var chart = am4core.create("chartdiv", am4charts.XYChart);

      // Add data
      chart.data = [{
        "year": 2014,
        "Medicina veterinaria y zootecnia": this.veterinaria2014,
        "Ingenieria agronomica": this.ingAgro2014
      }, {
        "year": 2018,
        "Medicina veterinaria y zootecnia": this.veterinaria2018,
        "Ingenieria agronomica": this.ingAgro2018
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
      createSeries("Medicina veterinaria y zootecnia", "Medicina veterinaria y zootecnia");
      createSeries("Ingenieria agronomica", "Ingenieria agronomica");
      chart.legend = new am4charts.Legend();
    });
  }
}