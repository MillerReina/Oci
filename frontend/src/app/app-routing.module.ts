import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AgropecuariasComponent } from './components/agropecuarias/agropecuarias.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {MenuFacultadesComponent} from './components/menu-facultades/menu-facultades.component';
import {MenuSeccionalesComponent} from './components/menu-seccionales/menu-seccionales.component';
import {CompareGraphicsComponent} from './components/compare-graphics/compare-graphics.component';
import { EconomicasComponent } from './components/economicas/economicas.component';
import { CienciasComponent } from './components/ciencias/ciencias.component';
import { DerechoComponent } from './components/derecho/derecho.component';
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
import { FacDerI02Component } from './components/derecho/fac-der-i02/fac-der-i02.component';
import { FacDerI05Component } from './components/derecho/fac-der-i05/fac-der-i05.component';
import { FacDerI06Component } from './components/derecho/fac-der-i06/fac-der-i06.component';
import { FacDerF01Component } from './components/derecho/fac-der-f01/fac-der-f01.component';
import { FacDerF03Component } from './components/derecho/fac-der-f03/fac-der-f03.component';
import { FacDerC01Component } from './components/derecho/fac-der-c01/fac-der-c01.component';
import { FacDerC02Component } from './components/derecho/fac-der-c02/fac-der-c02.component';
import { DistanciaComponent } from './components/distancia/distancia.component';
import { ChiquinquiraComponent } from './components/chiquinquira/chiquinquira.component';
import { SecChiI01Component } from './components/chiquinquira/sec-chi-i01/sec-chi-i01.component';
import { SecChiI02Component } from './components/chiquinquira/sec-chi-i02/sec-chi-i02.component';
import { SecChiI03Component } from './components/chiquinquira/sec-chi-i03/sec-chi-i03.component';
import { SecChiI05Component } from './components/chiquinquira/sec-chi-i05/sec-chi-i05.component';
import { SecChiI06Component } from './components/chiquinquira/sec-chi-i06/sec-chi-i06.component';
import { SecChiF01Component } from './components/chiquinquira/sec-chi-f01/sec-chi-f01.component';
import { SecChiF03Component } from './components/chiquinquira/sec-chi-f03/sec-chi-f03.component';
import { SecChiC01Component } from './components/chiquinquira/sec-chi-c01/sec-chi-c01.component';
import { SecChiC02Component } from './components/chiquinquira/sec-chi-c02/sec-chi-c02.component';
import { DuitamaComponent } from './components/duitama/duitama.component';
import { SogamosoComponent } from './components/sogamoso/sogamoso.component';
import { FacDisI02Component } from './components/distancia/fac-dis-i02/fac-dis-i02.component';
import { FacDisI03Component } from './components/distancia/fac-dis-i03/fac-dis-i03.component';
import { FacDisI04Component } from './components/distancia/fac-dis-i04/fac-dis-i04.component';
import { FacDisI05Component } from './components/distancia/fac-dis-i05/fac-dis-i05.component';
import { FacDisI06Component } from './components/distancia/fac-dis-i06/fac-dis-i06.component';
import { FacDisF01Component } from './components/distancia/fac-dis-f01/fac-dis-f01.component';
import { FacDisF02Component } from './components/distancia/fac-dis-f02/fac-dis-f02.component';
import { FacDisF03Component } from './components/distancia/fac-dis-f03/fac-dis-f03.component';
import { FacDisC01Component } from './components/distancia/fac-dis-c01/fac-dis-c01.component';
import { FacDisC02Component } from './components/distancia/fac-dis-c02/fac-dis-c02.component';
import { FacDisC021Component } from './components/distancia/fac-dis-c021/fac-dis-c021.component';
import { FacDisPb03Component } from './components/distancia/fac-dis-pb03/fac-dis-pb03.component';
import { FacAgroI02Component } from './components/agropecuarias/fac-agro-i02/fac-agro-i02.component';
import { FacAgroI04Component } from './components/agropecuarias/fac-agro-i04/fac-agro-i04.component';
import { FacAgroI03Component } from './components/agropecuarias/fac-agro-i03/fac-agro-i03.component';
import { FacAgroI05Component } from './components/agropecuarias/fac-agro-i05/fac-agro-i05.component';
import { FacAgroI06Component } from './components/agropecuarias/fac-agro-i06/fac-agro-i06.component';
import { FacAgroF01Component } from './components/agropecuarias/fac-agro-f01/fac-agro-f01.component';
import { FacAgroF02Component } from './components/agropecuarias/fac-agro-f02/fac-agro-f02.component';
import { FacAgroF03Component } from './components/agropecuarias/fac-agro-f03/fac-agro-f03.component';
import { FacAgroC01Component } from './components/agropecuarias/fac-agro-c01/fac-agro-c01.component';
import { FacAgroC02Component } from './components/agropecuarias/fac-agro-c02/fac-agro-c02.component';
import { FacAgroC021Component } from './components/agropecuarias/fac-agro-c021/fac-agro-c021.component';
import { FacAgroPb03Component } from './components/agropecuarias/fac-agro-pb03/fac-agro-pb03.component';
import { FacEduI02Component } from './components/educacion/fac-edu-i02/fac-edu-i02.component';
import { FacEduI03Component } from './components/educacion/fac-edu-i03/fac-edu-i03.component';
import { FacEduI04Component } from './components/educacion/fac-edu-i04/fac-edu-i04.component'
import { FacEduI05Component } from './components/educacion/fac-edu-i05/fac-edu-i05.component';
import { FacEduI06Component } from './components/educacion/fac-edu-i06/fac-edu-i06.component';
import { FacEduF01Component } from './components/educacion/fac-edu-f01/fac-edu-f01.component';
import { FacEduF02Component } from './components/educacion/fac-edu-f02/fac-edu-f02.component';
import { FacEduF03Component } from './components/educacion/fac-edu-f03/fac-edu-f03.component';
import { FacEduC01Component } from './components/educacion/fac-edu-c01/fac-edu-c01.component';
import { FacEduC02Component } from './components/educacion/fac-edu-c02/fac-edu-c02.component';
import { FacEduC021Component } from './components/educacion/fac-edu-c021/fac-edu-c021.component';
import { FacEduPb03Component } from './components/educacion/fac-edu-pb03/fac-edu-pb03.component';
import { FacCienI02Component } from './components/ciencias/fac-cien-i02/fac-cien-i02.component';
import { FacCienI03Component } from './components/ciencias/fac-cien-i03/fac-cien-i03.component';
import { FacCienI04Component } from './components/ciencias/fac-cien-i04/fac-cien-i04.component';
import { FacCienI05Component } from './components/ciencias/fac-cien-i05/fac-cien-i05.component';
import { FacCienI06Component } from './components/ciencias/fac-cien-i06/fac-cien-i06.component';
import { FacCienF01Component } from './components/ciencias/fac-cien-f01/fac-cien-f01.component';
import { FacCienF02Component } from './components/ciencias/fac-cien-f02/fac-cien-f02.component';
import { FacCienF03Component } from './components/ciencias/fac-cien-f03/fac-cien-f03.component';
import { FacCienC01Component } from './components/ciencias/fac-cien-c01/fac-cien-c01.component';
import { FacCienC02Component } from './components/ciencias/fac-cien-c02/fac-cien-c02.component';
import { FacCienC0201Component } from './components/ciencias/fac-cien-c0201/fac-cien-c0201.component';
import { FacCienPb03Component } from './components/ciencias/fac-cien-pb03/fac-cien-pb03.component';

const routes: Routes = [
    {path: '', redirectTo: '/home',pathMatch: 'full'},
    {path: 'home', component: MainMenuComponent},
    {path: 'menu_fac', component: MenuFacultadesComponent},
    {path: 'menu_sec', component: MenuSeccionalesComponent},
    {path: 'compare/:comp1/:comp2', component: CompareGraphicsComponent},
    {path: 'agropecuarias', component: AgropecuariasComponent},
    {path: 'agro_i02', component: FacAgroI02Component},
    {path: 'agro_i04', component: FacAgroI04Component},{path: 'agro_i03', component: FacAgroI03Component},
    {path: 'agro_i05', component: FacAgroI05Component},{path: 'agro_i06', component: FacAgroI06Component},
    {path: 'agro_f01', component: FacAgroF01Component},{path: 'agro_f02', component: FacAgroF02Component},
    {path: 'educacion', component: EducacionComponent},{path: 'edu_i02', component: FacEduI02Component},
    {path: 'agro_f03', component: FacAgroF03Component},{path: 'edu_i03', component : FacEduI03Component},
    {path: 'edu_i04', component: FacEduI04Component},{path: 'edu_i05', component: FacEduI05Component},
    {path: 'edu_i06', component: FacEduI06Component},{path: 'edu_f01', component: FacEduF01Component},
    {path: 'edu_f02', component: FacEduF02Component},{path: 'edu_f03', component: FacEduF03Component},
    {path: 'edu_c01', component: FacEduC01Component},{path: 'edu_c02', component: FacEduC02Component},
    {path: 'edu_pb03', component: FacEduPb03Component},
    {path: 'edu_c021', component: FacEduC021Component},{path: 'edu_f03', component: FacEduF03Component},
    {path: 'agro_c01', component: FacAgroC01Component},{path: 'agro_c02', component: FacAgroC02Component},
    {path: 'agro_c21', component: FacAgroC021Component},{path: 'agro_pb03', component: FacAgroPb03Component},
    {path: 'economicas', component: EconomicasComponent},
    {path: 'eco_i02', component: FacEcoI02Component},
    {path: 'eco_i03', component: FacEcoI03Component},{path: 'eco_i04', component: FacEcoI04Component},
    {path: 'eco_i05', component: FacEcoI05Component},{path: 'eco_i06', component: FacEcoI06Component},
    {path: 'eco_f01', component: FacEcoF01Component},{path: 'eco_f02', component: FacEcoF02Component},
    {path: 'eco_f03', component: FacEcoF03Component},{path: 'eco_c01', component: FacEcoC01Component},
    {path: 'eco_c02', component: FacEcoC02Component},
    {path: 'ciencias', component: CienciasComponent},{path: 'cien_i02', component: FacCienI02Component},
    {path: 'cien_i03', component: FacCienI03Component},{path: 'cien_i04', component: FacCienI04Component},
    {path: 'cien_i05', component: FacCienI05Component},{path: 'cien_i06', component: FacCienI06Component},
    {path: 'cien_f01', component: FacCienF01Component},{path: 'cien_f02', component: FacCienF02Component},
    {path: 'cien_f03', component: FacCienF03Component},{path: 'cien_c01', component: FacCienC01Component},
    {path: 'cien_c02', component: FacCienC02Component},{path: 'cien_c0201', component: FacCienC0201Component},
    {path: 'cien_pb03', component: FacCienPb03Component},
    {path: 'derecho', component: DerechoComponent},
    {path: 'der_i02', component: FacDerI02Component},{path: 'der_i05', component: FacDerI05Component},
    {path: 'der_i06', component: FacDerI06Component},{path: 'der_f01', component: FacDerF01Component},
    {path: 'der_f03', component: FacDerF03Component},{path: 'der_c01', component: FacDerC01Component},
    {path: 'der_c02', component: FacDerC02Component},
    {path: 'distancia', component: DistanciaComponent},
    {path: 'dis_i02', component:FacDisI02Component},{path: 'dis_i03', component:FacDisI03Component},
    {path: 'dis_i04', component:FacDisI04Component},{path: 'dis_i05', component:FacDisI05Component},
    {path: 'chiquinquira', component: ChiquinquiraComponent},{path: 'dis_i06', component:FacDisI06Component},
    {path: 'dis_f01', component: FacDisF01Component},{path: 'dis_f02', component: FacDisF02Component},
    {path: 'duitama', component: DuitamaComponent},{path:'dis_f03', component:FacDisF03Component},
    {path: 'dis_c01', component: FacDisC01Component},{path:'dis_c02', component: FacDisC02Component},
    {path: 'dis_c021', component: FacDisC021Component},{path:'dis_pb03',component: FacDisPb03Component},
    {path: 'sogamoso', component: SogamosoComponent},
    {path: 'chi_i01', component: SecChiI01Component}, {path: 'chi_i02', component: SecChiI02Component},
    {path: 'chi_i03', component: SecChiI03Component}, {path: 'chi_i05', component: SecChiI05Component},
    {path: 'chi_i06', component: SecChiI06Component}, {path: 'chi_f01', component: SecChiF01Component},
    {path: 'chi_f03', component: SecChiF03Component}, {path: 'chi_c01', component: SecChiC01Component},
    {path: 'chi_c02', component: SecChiC02Component}
    ]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }

export const routingComponents = [CarouselComponent,MainMenuComponent,AgropecuariasComponent,
                                MenuFacultadesComponent,MenuSeccionalesComponent,
                                CompareGraphicsComponent,  
                                 EducacionComponent, 
                                 FacEduI03Component,FacEduI04Component,
                                 FacEduI05Component,FacEduI06Component,
                                 FacEduF01Component,FacEduF02Component,
                                 FacEduF03Component,FacEduC01Component,
                                 FacEduC02Component,FacEduC021Component,
                                 FacEduPb03Component,
                                 EconomicasComponent,
                                 FacEcoI02Component,
                                 FacEcoI03Component,FacEcoI04Component,
                                 FacEcoI05Component, FacEcoI06Component, FacEcoF01Component,
                                 FacEcoF02Component,FacEcoF03Component, FacEcoC01Component,
                                 FacEcoC02Component,
                                 CienciasComponent, DerechoComponent,
                                 DistanciaComponent, FacDisI02Component,
                                 FacDisI03Component,FacDisI04Component,ChiquinquiraComponent,
                                 FacDisI05Component, FacDisI06Component, FacDisF01Component,
                                 FacDisF02Component,FacDisF03Component, FacDisC01Component,
                                 FacDisC02Component,FacDisC021Component,FacDisPb03Component,
                                 FacAgroI02Component,FacAgroI03Component,FacAgroI04Component,
                                 FacAgroI05Component,FacAgroI06Component,FacAgroF01Component,
                                 FacAgroF02Component,FacAgroF03Component,FacAgroC021Component,
                                 FacAgroPb03Component,DuitamaComponent,
                                 FacAgroC01Component,FacAgroC02Component,SogamosoComponent,
                                 FacEduI02Component,FacEduI03Component,
                                 FacCienI02Component,
                                 FacCienI03Component,FacCienI04Component,
                                 FacCienI05Component, FacCienI06Component, FacCienF01Component,
                                 FacCienF02Component,FacCienF03Component, FacCienC01Component,
                                 FacCienC02Component,FacCienC0201Component,FacCienPb03Component,
                                 FacDerI02Component,
                                 FacDerI05Component, FacDerI06Component, FacDerF01Component,
                                 FacDerF03Component, FacDerC01Component,
                                 FacDerC02Component, SecChiI01Component, SecChiI02Component,
                                 SecChiI03Component, SecChiI05Component, SecChiI06Component,
                                 SecChiF01Component, SecChiF03Component, SecChiC01Component,
                                 SecChiC02Component                                
                                ]