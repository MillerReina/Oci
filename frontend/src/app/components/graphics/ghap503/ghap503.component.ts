import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-ghap503',
  templateUrl: './ghap503.component.html',
  styleUrls: ['./ghap503.component.css']
})
export class Ghap503Component implements OnInit {
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

  @Input() gibemolAporte: number;
  @Input() ftcAporte: number;
  @Input() gsecAporte: number;
  @Input() gibemolNumProductos: number;
  @Input() ftcNumProductos: number;
  @Input() gsecNumProductos: number;

  constructor(public zone: NgZone,public service: ServiceService) { }

  ngOnInit() {
    this.createChart();
  }
  

  createChart(){
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("barChart", am4charts.XYChart);
  
      chart.data = [{
        "Grupo": "CREPIB",
        "Aporte": this.gibnaAporte
      }, {
        "Grupo": "GEVAFI",
        "Aporte": this.gipsoAporte
      },{
        "Grupo": "GIDICON",
        "Aporte": this.gidimevetzAporte
      },{
        "Grupo": "IDEAS",
        "Aporte": this.giaAporte
      },
      {
        "Grupo": "INNTEC",
        "Aporte": this.cideAporte
      },
      {
        "Grupo": "MODEAL",
        "Aporte": this.gibemolAporte
      },
      {
        "Grupo": "OIKOS",
        "Aporte": this.ftcAporte
      },      
      {
        "Grupo": "PODER",
        "Aporte": this.gsecAporte
      }             
    ];

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