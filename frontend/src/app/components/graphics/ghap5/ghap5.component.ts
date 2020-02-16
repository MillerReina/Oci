import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-ghap5',
  templateUrl: './ghap5.component.html',
  styleUrls: ['./ghap5.component.css']
})
export class Ghap5Component implements OnInit {

  public barChart: am4charts.XYChart;

  @Input() gibnaAporte: number;
  @Input() gipsoAporte: number;
  @Input() gidimevetzAporte: number;
  @Input() giaAporte: number;
  @Input() cideAporte: number;
  @Input() gibnaNumProductos: number;
  @Input() gipsoNumProductos: number;
  @Input() gidimevetzNumProductos: number;
  @Input() giaNumProductos: number;
  @Input() cideNumProductos: number;

  constructor(public zone: NgZone,public service: ServiceService) { }

  ngOnInit() {
    this.createChart();
  }
  

  createChart(){
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("barChart", am4charts.XYChart);
  
      chart.data = [{
        "Grupo": "GIBNA",
        "Aporte": this.gibnaAporte
      }, {
        "Grupo": "GIPSO",
        "Aporte": this.gipsoAporte
      },{
        "Grupo": "GIDIMEVETZ",
        "Aporte": this.gidimevetzAporte
      },{
        "Grupo": "GIA",
        "Aporte": this.giaAporte
      },
      {
        "Grupo": "CIDE",
        "Aporte": this.cideAporte
      }];

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "Grupo";
      categoryAxis.title.text = "Grupo";

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = "Aporte";
      
      let series = chart.series.push(new am4charts.ColumnSeries());
    series.name = "Aporte";
    series.columns.template.tooltipText = "Tipo: {name}\n Grupo: {categoryX}\n Aporte: {valueY}";
    series.columns.template.fill = am4core.color("#104547"); // fill
    series.dataFields.valueY = "Aporte";
    series.dataFields.categoryX = "Grupo";

      this.barChart = chart;
    });
  }
}
