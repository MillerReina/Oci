import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-ghap-c02',
  templateUrl: './ghap-c02.component.html',
  styleUrls: ['./ghap-c02.component.css']
})
export class GhapC02Component implements OnInit {

  public barChart: am4charts.XYChart;
  @Input() r2018: number;   

  @Input() junior2014: number;  
  @Input() asociado2014: number;  
  @Input() senior2014: number;  
  @Input() emerito2014: number;  
  @Input() junior2015: number;  
  @Input() asociado2015: number;  
  @Input() senior2015: number;  
  @Input() emerito2015: number;  
  @Input() junior2016: number;  
  @Input() asociado2016: number;  
  @Input() senior2016: number;  
  @Input() emerito2016: number;  
  @Input() junior2017: number;  
  @Input() asociado2017: number;  
  @Input() senior2017: number;  
  @Input() emerito2017: number;  
  @Input() junior2018: number;  
  @Input() asociado2018: number;  
  @Input() senior2018: number;  
  @Input() emerito2018: number;  

  constructor(public zone:NgZone,public service: ServiceService) { }

  ngOnInit() {
    this.createChart();
  }

  createChart(){
    this.zone.runOutsideAngular(() => {
    
      var chart = am4core.create("barChart", am4charts.XYChart);

      // Add data
      chart.data = [{
        "year": 2014,
        "Junior": this.junior2014,
        "Asociado": this.asociado2014,
        "Senior": this.senior2014,
        "Emérito": this.emerito2014
      },{
        "year": 2015,
        "Junior": this.junior2015,
        "Asociado": this.asociado2015,
        "Senior": this.senior2015,
        "Emérito": this.emerito2015
      },{
        "year": 2016,
        "Junior": this.junior2016,
        "Asociado": this.asociado2016,
        "Senior": this.senior2016,
        "Emérito": this.emerito2016
      },{
        "year": 2017,
        "Junior": this.junior2017,
        "Asociado": this.asociado2017,
        "Senior": this.senior2017,
        "Emérito": this.emerito2017
      },{
        "year": 2018,
        "Junior": this.junior2018,
        "Asociado": this.asociado2018,
        "Senior": this.senior2018,
        "Emérito": this.emerito2018
      }];
      
      // Create axes
      var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "year";
      categoryAxis.numberFormatter.numberFormat = "#";
      categoryAxis.renderer.inversed = true;
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.cellStartLocation = 0.1;
      categoryAxis.renderer.cellEndLocation = 0.9;
      
      var  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 
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
      createSeries("Junior", "Junior");
      createSeries("Asociado", "Asociado");
      createSeries("Senior", "Senior");
      createSeries("Emérito", "Emérito");
      chart.legend = new am4charts.Legend();
  });
  }
}
