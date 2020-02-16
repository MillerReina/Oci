import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-ghap502',
  templateUrl: './ghap502.component.html',
  styleUrls: ['./ghap502.component.css']
})
export class Ghap502Component implements OnInit {

  public barChart: am4charts.XYChart;
  
  @Input() ticaAporte: number;
  @Input() siekAporte: number;
  @Input() ticaNumProductos: number;
  @Input() siekNumProductos: number;

  constructor(public zone: NgZone,public service: ServiceService) { }

  ngOnInit() {
    this.createChart();
  }
  createChart(){
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("barChart", am4charts.XYChart);
        
      chart.data = [{
        "Grupo": "TIKA",
        "Aporte": this.siekAporte
      }, {
        "Grupo": "SIEK",
        "Aporte": this.ticaAporte
      }];

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "Grupo";
      categoryAxis.title.text = "Grupo";

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = "Aporte";
      
      let series = chart.series.push(new am4charts.ColumnSeries());
    series.name = "Aporte";
    series.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
    series.columns.template.fill = am4core.color("#104547"); // fill
    series.dataFields.valueY = "Aporte";
    series.dataFields.categoryX = "Grupo";

      this.barChart = chart;
    });
  }
}
