import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { BackgroundComponent } from './components/background/background.component';

import {HttpClientModule} from '@angular/common/http'

import {AppRoutingModule,routingComponents} from './app-routing.module';
import { FacCienC01Component } from './components/ciencias/fac-cien-c01/fac-cien-c01.component';
import { FacCienC02Component } from './components/ciencias/fac-cien-c02/fac-cien-c02.component';
import { FacCienC0201Component } from './components/ciencias/fac-cien-c0201/fac-cien-c0201.component';
import { FacCienF01Component } from './components/ciencias/fac-cien-f01/fac-cien-f01.component';
import { FacCienF02Component } from './components/ciencias/fac-cien-f02/fac-cien-f02.component';
import { FacCienF03Component } from './components/ciencias/fac-cien-f03/fac-cien-f03.component';
import { FacCienI02Component } from './components/ciencias/fac-cien-i02/fac-cien-i02.component';
import { FacCienI03Component } from './components/ciencias/fac-cien-i03/fac-cien-i03.component';
import { FacCienI04Component } from './components/ciencias/fac-cien-i04/fac-cien-i04.component';
import { FacCienI05Component } from './components/ciencias/fac-cien-i05/fac-cien-i05.component';
import { FacCienI06Component } from './components/ciencias/fac-cien-i06/fac-cien-i06.component';
import { FacCienPb03Component } from './components/ciencias/fac-cien-pb03/fac-cien-pb03.component';
import { FacEduI03Component } from './components/educacion/fac-edu-i03/fac-edu-i03.component';
import { FacEduI04Component } from './components/educacion/fac-edu-i04/fac-edu-i04.component';
import { FacEduI05Component } from './components/educacion/fac-edu-i05/fac-edu-i05.component';
import { FacEduI06Component } from './components/educacion/fac-edu-i06/fac-edu-i06.component';
import { FacEduF01Component } from './components/educacion/fac-edu-f01/fac-edu-f01.component';
import { FacEduF02Component } from './components/educacion/fac-edu-f02/fac-edu-f02.component';
import { FacEduF03Component } from './components/educacion/fac-edu-f03/fac-edu-f03.component';
import { FacEduC01Component } from './components/educacion/fac-edu-c01/fac-edu-c01.component';
import { FacEduC02Component } from './components/educacion/fac-edu-c02/fac-edu-c02.component';
import { FacEduC021Component } from './components/educacion/fac-edu-c021/fac-edu-c021.component';
import { FacEduPb03Component } from './components/educacion/fac-edu-pb03/fac-edu-pb03.component';
import { MenuComponent } from './components/menu/menu.component';
import { Ghap1Component } from './components/graphics/ghap1/ghap1.component';
import { Ghap2Component } from './components/graphics/ghap2/ghap2.component';
import { Ghap3Component } from './components/graphics/ghap3/ghap3.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MenuFacultadesComponent } from './components/menu-facultades/menu-facultades.component';
import { Ghap4Component } from './components/graphics/ghap4/ghap4.component';
import { MenuSeccionalesComponent } from './components/menu-seccionales/menu-seccionales.component';
import { Ghap5Component } from './components/graphics/ghap5/ghap5.component';
import { Ghap6Component } from './components/graphics/ghap6/ghap6.component';
import { Ghap7Component } from './components/graphics/ghap7/ghap7.component';
import { CompareGraphicsComponent } from './components/compare-graphics/compare-graphics.component';
import { Ghap501Component } from './components/graphics/ghap501/ghap501.component';
import { FacDerC01Component } from './components/derecho/fac-der-c01/fac-der-c01.component';
import { FacDerC02Component } from './components/derecho/fac-der-c02/fac-der-c02.component';
import { FacDerF01Component } from './components/derecho/fac-der-f01/fac-der-f01.component';
import { FacDerF03Component } from './components/derecho/fac-der-f03/fac-der-f03.component';
import { FacDerI02Component } from './components/derecho/fac-der-i02/fac-der-i02.component';
import { FacDerI05Component } from './components/derecho/fac-der-i05/fac-der-i05.component';
import { FacDerI06Component } from './components/derecho/fac-der-i06/fac-der-i06.component';
import { Ghap401Component } from './components/graphics/ghap401/ghap401.component';
import { Ghap502Component } from './components/graphics/ghap502/ghap502.component';
import { FacEcoI02Component } from './components/economicas/fac-eco-i02/fac-eco-i02.component';
import { FacEcoI03Component } from './components/economicas/fac-eco-i03/fac-eco-i03.component';
import { FacEcoI04Component } from './components/economicas/fac-eco-i04/fac-eco-i04.component';
import { FacEcoI05Component } from './components/economicas/fac-eco-i05/fac-eco-i05.component';
import { FacEcoI06Component } from './components/economicas/fac-eco-i06/fac-eco-i06.component';
import { FacEcoF01Component } from './components/economicas/fac-eco-f01/fac-eco-f01.component';
import { FacEcoF02Component } from './components/economicas/fac-eco-f02/fac-eco-f02.component';
import { FacEcoF03Component } from './components/economicas/fac-eco-f03/fac-eco-f03.component';
import { FacEcoC01Component } from './components/economicas/fac-eco-c01/fac-eco-c01.component';
import { FacEcoC02Component } from './components/economicas/fac-eco-c02/fac-eco-c02.component';
import { Ghap503Component } from './components/graphics/ghap503/ghap503.component';
import { GhapF01Component } from './components/graphics/ghap-f01/ghap-f01.component';
import { GhapF0101Component } from './components/graphics/ghap-f0101/ghap-f0101.component';
import { GhapF03Component } from './components/graphics/ghap-f03/ghap-f03.component';
import { GhapC01Component } from './components/graphics/ghap-c01/ghap-c01.component';
import { GhapC02Component } from './components/graphics/ghap-c02/ghap-c02.component';
import { Ghap5secondComponent } from './components/graphics/ghap5second/ghap5second.component';
import { SecChiI01Component } from './components/chiquinquira/sec-chi-i01/sec-chi-i01.component';
import { SecChiI02Component } from './components/chiquinquira/sec-chi-i02/sec-chi-i02.component';
import { SecChiI03Component } from './components/chiquinquira/sec-chi-i03/sec-chi-i03.component';
import { SecChiI05Component } from './components/chiquinquira/sec-chi-i05/sec-chi-i05.component';
import { SecChiI06Component } from './components/chiquinquira/sec-chi-i06/sec-chi-i06.component';
import { SecChiF01Component } from './components/chiquinquira/sec-chi-f01/sec-chi-f01.component';
import { SecChiF03Component } from './components/chiquinquira/sec-chi-f03/sec-chi-f03.component';
import { SecChiC01Component } from './components/chiquinquira/sec-chi-c01/sec-chi-c01.component';
import { SecChiC02Component } from './components/chiquinquira/sec-chi-c02/sec-chi-c02.component';


@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    routingComponents,
    FacCienC01Component,
    FacCienC02Component,
    FacCienC0201Component,
    FacCienF01Component,
    FacCienF02Component,
    FacCienF03Component,
    FacCienI02Component,
    FacCienI03Component,
    FacCienI04Component,
    FacCienI05Component,
    FacCienI06Component,
    FacCienPb03Component,
    FacEduI03Component,
    FacEduI04Component,
    FacEduI05Component,
    FacEduI06Component,
    FacEduF01Component,
    FacEduF02Component,
    FacEduF03Component,
    FacEduC01Component,
    FacEduC02Component,
    FacEduC021Component,
    FacEduPb03Component,
    MenuComponent,
    Ghap1Component,
    Ghap2Component,
    Ghap3Component,
    MainMenuComponent,
    MenuFacultadesComponent,
    Ghap4Component,
    MenuSeccionalesComponent,
    Ghap5Component,
    Ghap6Component,
    Ghap7Component,
    CompareGraphicsComponent,
    Ghap501Component,
    FacDerC01Component,
    FacDerC02Component,
    FacDerF01Component,
    FacDerF03Component,
    FacDerI02Component,
    FacDerI05Component,
    FacDerI06Component,
    Ghap401Component,
    Ghap502Component,
    FacEcoI02Component,
    FacEcoI03Component,
    FacEcoI04Component,
    FacEcoI05Component,
    FacEcoI06Component,
    FacEcoF01Component,
    FacEcoF02Component,
    FacEcoF03Component,
    FacEcoC01Component,
    FacEcoC02Component,
    Ghap503Component,
    GhapF01Component,
    GhapF0101Component,
    GhapF03Component,
    GhapC01Component,
    GhapC02Component,
    Ghap5secondComponent,
    SecChiI01Component,
    SecChiI02Component,
    SecChiI03Component,
    SecChiI05Component,
    SecChiI06Component,
    SecChiF01Component,
    SecChiF03Component,
    SecChiC01Component,
    SecChiC02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
