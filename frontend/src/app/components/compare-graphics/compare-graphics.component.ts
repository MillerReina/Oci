import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compare-graphics',
  templateUrl: './compare-graphics.component.html',
  styleUrls: ['./compare-graphics.component.css']
})
export class CompareGraphicsComponent implements OnInit {

  public componente1: string;
  public componente2: string;

  //Agro
  public app_agropecuarias1 = false;
  public app_agropecuarias2 = false;
  public app_fac_agro_i02_1 = false;
  public app_fac_agro_i02_2 = false;
  public app_fac_agro_i03_1 = false;
  public app_fac_agro_i03_2 = false;
  public app_fac_agro_i04_1 = false;
  public app_fac_agro_i04_2 = false;

  //Edu
  public app_educacion1 = false;
  public app_educacion2 = false;
  public app_fac_edu_i02_1 = false;
  public app_fac_edu_i02_2 = false;
  public app_fac_edu_i03_1 = false;
  public app_fac_edu_i03_2 = false;

  //Ciencias
  public app_ciencias1 = false;
  public app_ciencias2 = false;
  public app_fac_cien_i02_1 = false;
  public app_fac_cien_i02_2 = false;
  public app_fac_cien_i03_1 = false;
  public app_fac_cien_i03_2 = false;
  public app_fac_cien_i04_1 = false;
  public app_fac_cien_i04_2 = false;

  //Economicas
  public app_economicas1 = false;
  public app_economicas2 = false;
  public app_fac_eco_i02_1 = false;
  public app_fac_eco_i02_2 = false;
  public app_fac_eco_i03_1 = false;
  public app_fac_eco_i03_2 = false;
  public app_fac_eco_i04_1 = false;
  public app_fac_eco_i04_2 = false;
   //Derecho
   public app_derecho1 = false;
   public app_derecho2 = false;
   public app_fac_der_i02_1 = false;
   public app_fac_der_i02_2 = false;
   public app_fac_der_i03_1 = false;
   public app_fac_der_i03_2 = false;
   public app_fac_der_i04_1 = false;
   public app_fac_der_i04_2 = false;
   //Distancia
   public app_distancia1 = false;
   public app_distancia2 = false;
   public app_fac_dis_i02_1 = false;
   public app_fac_dis_i02_2 = false;
   public app_fac_dis_i03_1 = false;
   public app_fac_dis_i03_2 = false;
   public app_fac_dis_i04_1 = false;
   public app_fac_dis_i04_2 = false;

  constructor( private router: Router,
               private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      if(params.has("comp1")){
        this.componente1 = params.get("comp1");
        this.componente2 = params.get("comp2");
      }else{
        console.log("No entro el comp1");
      }
    });

    //Componente1
    if(this.componente1==="app-agropecuarias"){
        this.app_agropecuarias1=true;     
    }else if(this.componente1==="app-fac-agro-i02"){
        this.app_fac_agro_i02_1=true;
    }else if(this.componente1==="app-fac-agro-i03"){
        this.app_fac_agro_i03_1=true;
    }else if(this.componente1==="app-fac-agro-i04"){
        this.app_fac_agro_i04_1=true;
    }else if(this.componente1==="app-educacion"){
        this.app_educacion1=true;
    }else if(this.componente1==="app-fac-edu-i02"){
        this.app_fac_edu_i02_1=true;
    }else if(this.componente1==="app-fac-edu-i03"){
        this.app_fac_edu_i03_1=true;
    }else if(this.componente1==="app-ciencias"){
        this.app_ciencias1=true;
    }else if(this.componente1==="app-fac-cien-i02"){
        this.app_fac_cien_i02_1=true;
    }else if(this.componente1==="app-fac-cien-i03"){
      this.app_fac_cien_i03_1=true;
    }else if(this.componente1==="app-fac-cien-i04"){
      this.app_fac_cien_i04_1=true;
    }else if(this.componente1==="app-economicas"){
      this.app_economicas1=true;
    }else if(this.componente1==="app-fac-eco-i02"){
      this.app_fac_eco_i02_1=true;
    }else if(this.componente1==="app-fac-eco-i03"){
      this.app_fac_eco_i03_1=true;
    }else if(this.componente1==="app-derecho"){
      this.app_derecho1=true;
    }else if(this.componente1==="app-fac-der-i02"){
      this.app_fac_der_i02_1=true;
    }else if(this.componente1==="app-fac-der-i03"){
    this.app_fac_der_i03_1=true;
    }else if(this.componente1==="app-fac-der-i04"){
    this.app_fac_der_i04_1=true;
    }else if(this.componente1==="app-distancia"){
      this.app_distancia1=true;
    }else if(this.componente1==="app-fac-dis-i02"){
      this.app_fac_dis_i02_1=true;
    }else if(this.componente1==="app-fac-dis-i03"){
    this.app_fac_dis_i03_1=true;
    }else if(this.componente1==="app-fac-dis-i04"){
    this.app_fac_dis_i04_1=true;
    }

    //Componente2
    if(this.componente2==="app-agropecuarias"){
      this.app_agropecuarias2=true;
    }else if(this.componente2==="app-fac-agro-i02"){
      this.app_fac_agro_i02_2=true;
    }else if(this.componente2==="app-fac-agro-i03"){
      this.app_fac_agro_i03_2=true;
    }else if(this.componente2==="app-fac-agro-i04"){
      this.app_fac_agro_i04_2=true;
    }else if(this.componente2==="app-educacion"){
      this.app_educacion2=true;
    }else if(this.componente2==="app-fac-edu-i02"){
      this.app_fac_edu_i02_2=true;
    }else if(this.componente2==="app-fac-edu-i03"){
      this.app_fac_edu_i03_2=true;
    }else if(this.componente2==="app-ciencias"){
      this.app_ciencias2=true;
    }else if(this.componente2==="app-fac-cien-i02"){
      this.app_fac_cien_i02_2=true;
    }else if(this.componente2==="app-fac-cien-i03"){
      this.app_fac_cien_i03_2=true;
    }else if(this.componente2==="app-fac-cien-i04"){
      this.app_fac_cien_i04_2=true;
    }else if(this.componente2==="app-economicas"){
      this.app_economicas2=true;
    }else if(this.componente2==="app-fac-eco-i02"){
      this.app_fac_eco_i02_2=true;
    }else if(this.componente2==="app-fac-eco-i03"){
      this.app_fac_eco_i03_2=true;
    }else if(this.componente2==="app-derecho"){
      this.app_derecho2=true;
    }else if(this.componente2==="app-fac-der-i02"){
      this.app_fac_der_i02_2=true;
    }else if(this.componente2==="app-fac-der-i03"){
    this.app_fac_der_i03_2=true;
    }else if(this.componente2==="app-fac-der-i04"){
    this.app_fac_der_i04_2=true;
    }else if(this.componente2==="app-distancia"){
      this.app_distancia2=true;
    }else if(this.componente2==="app-fac-dis-i02"){
      this.app_fac_dis_i02_2=true;
    }else if(this.componente2==="app-fac-dis-i03"){
    this.app_fac_dis_i03_2=true;
    }else if(this.componente2==="app-fac-dis-i04"){
    this.app_fac_dis_i04_2=true;
    }  

  }

}
