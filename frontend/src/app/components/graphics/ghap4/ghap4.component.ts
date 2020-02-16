import { Component, OnInit, NgZone, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-ghap4',
  templateUrl: './ghap4.component.html',
  styleUrls: ['./ghap4.component.css']
})
export class Ghap4Component implements OnInit {
  public barChart: am4charts.XYChart;
      //entidad
    @Input() entidad2014: number;
    @Input() entidad2015: number;
    @Input() entidad2016: number;
    @Input() entidad2017: number;
    @Input() entidad2018: number;
      //cenInv
    @Input() cenInvestigacion2014: number;
    @Input() cenInvestigacion2015: number;
    @Input() cenInvestigacion2016: number;
    @Input() cenInvestigacion2017: number;
    @Input() cenInvestigacion2018: number;
      //Colc
    @Input() colciencias2014: number;
    @Input() colciencias2015: number;
    @Input() colciencias2016: number;
    @Input() colciencias2017: number;
    @Input() colciencias2018: number;
      //Hos
    @Input() hospitales2014: number;
    @Input() hospitales2015: number;
    @Input() hospitales2016: number;
    @Input() hospitales2017: number;
    @Input() hospitales2018: number;
      //priva
    @Input() privadas2014: number;
    @Input() privadas2015: number;
    @Input() privadas2016: number;
    @Input() privadas2017: number;
    @Input() privadas2018: number;
      //ong
    @Input() ong2014: number;
    @Input() ong2015: number;
    @Input() ong2016: number;
    @Input() ong2017: number;
    @Input() ong2018: number;  

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
        "Centro de investigación y desarrollo tecnológico	": this.cenInvestigacion2014,
        "Colciencias": this.colciencias2014,
        "Entidades del Gobierno Regional": this.entidad2014,
        "Hospitales y Clínicas": this.hospitales2014,
        "Instituciones privadas sin fines de lucro IPSFL":this.privadas2014,
        "ONG Asociaciones y Agremiaciones Profesionales":this.ong2014
      }, {
        "year": "2015",
        "Centro de investigación y desarrollo tecnológico	": this.cenInvestigacion2015,
        "Colciencias": this.colciencias2015,
        "Entidades del Gobierno Regional": this.entidad2015,
        "Hospitales y Clínicas": this.hospitales2015,
        "Instituciones privadas sin fines de lucro IPSFL":this.privadas2015,
        "ONG Asociaciones y Agremiaciones Profesionales":this.ong2015
      }, {
        "year": "2016",
        "Centro de investigación y desarrollo tecnológico	": this.cenInvestigacion2016,
        "Colciencias": this.colciencias2016,
        "Entidades del Gobierno Regional": this.entidad2016,
        "Hospitales y Clínicas": this.hospitales2016,
        "Instituciones privadas sin fines de lucro IPSFL":this.privadas2016,
        "ONG Asociaciones y Agremiaciones Profesionales":this.ong2016
      }, {
        "year": "2017",
        "Centro de investigación y desarrollo tecnológico	": this.cenInvestigacion2017,
        "Colciencias": this.colciencias2017,
        "Entidades del Gobierno Regional": this.entidad2017,
        "Hospitales y Clínicas": this.hospitales2017,
        "Instituciones privadas sin fines de lucro IPSFL":this.privadas2017,
        "ONG Asociaciones y Agremiaciones Profesionales":this.ong2017
      }, {
        "year": "2018",
        "Centro de investigación y desarrollo tecnológico	": this.cenInvestigacion2018,
        "Colciencias": this.colciencias2018,
        "Entidades del Gobierno Regional": this.entidad2018,
        "Hospitales y Clínicas": this.hospitales2018,
        "Instituciones privadas sin fines de lucro IPSFL":this.privadas2018,
        "ONG Asociaciones y Agremiaciones Profesionales":this.ong2018
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
      series1.dataFields.valueY = "Centro de investigación y desarrollo tecnológico	";
      series1.dataFields.categoryX = "year";
      series1.name = "Centro de investigación y desarrollo tecnológico	";
      series1.strokeWidth = 3;
      series1.bullets.push(new am4charts.CircleBullet());
      series1.tooltipText = "{name} en {categoryX}: {valueY}";
      series1.legendSettings.valueText = "{valueY}";
      series1.visible = false;

      let series2 = chart.series.push(new am4charts.LineSeries());
      series2.dataFields.valueY = "Colciencias";
      series2.dataFields.categoryX = "year";
      series2.name = 'Colciencias';
      series2.strokeWidth = 3;
      series2.bullets.push(new am4charts.CircleBullet());
      series2.tooltipText = "{name} en {categoryX}: {valueY}";
      series2.legendSettings.valueText = "{valueY}";

      let series3 = chart.series.push(new am4charts.LineSeries());
      series3.dataFields.valueY = "Entidades del Gobierno Regional";
      series3.dataFields.categoryX = "year";
      series3.name = 'Entidades del Gobierno Regional';
      series3.strokeWidth = 3;
      series3.bullets.push(new am4charts.CircleBullet());
      series3.tooltipText = "{name} en {categoryX}: {valueY}";
      series3.legendSettings.valueText = "{valueY}";

      let series4 = chart.series.push(new am4charts.LineSeries());
      series4.dataFields.valueY = "Hospitales y Clínicas";
      series4.dataFields.categoryX = "year";
      series4.name = 'Hospitales y Clínicas';
      series4.strokeWidth = 3;
      series4.bullets.push(new am4charts.CircleBullet());
      series4.tooltipText = "{name} en {categoryX}: {valueY}";
      series4.legendSettings.valueText = "{valueY}";

      let series5 = chart.series.push(new am4charts.LineSeries());
      series5.dataFields.valueY = "Instituciones privadas sin fines de lucro IPSFL";
      series5.dataFields.categoryX = "year";
      series5.name = 'Instituciones privadas sin fines de lucro IPSFL';
      series5.strokeWidth = 3;
      series5.bullets.push(new am4charts.CircleBullet());
      series5.tooltipText = "{name} en {categoryX}: {valueY}";
      series5.legendSettings.valueText = "{valueY}";

      let series6 = chart.series.push(new am4charts.LineSeries());
      series6.dataFields.valueY = "ONG Asociaciones y Agremiaciones Profesionales";
      series6.dataFields.categoryX = "year";
      series6.name = 'ONG Asociaciones y Agremiaciones Profesionales';
      series6.strokeWidth = 3;
      series6.bullets.push(new am4charts.CircleBullet());
      series6.tooltipText = "{name} en {categoryX}: {valueY}";
      series6.legendSettings.valueText = "{valueY}";

      // Add chart cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "zoomY";

      // Add legend
      chart.legend = new am4charts.Legend();
      this.barChart = chart;
    });
   
  }
}
