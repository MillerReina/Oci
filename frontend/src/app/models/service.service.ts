import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
import { FacDistanciaI01 } from '../models/fac-distancia-i01';
import { FacDistanciaI02 } from '../models/FacDistanciaI02';
import { FacDistanciaI03 } from '../models/fac-distancia-i03';
import { FacDistanciaI04 } from '../models/fac-distancia-i04';
import { FacDistanciaI05 } from '../models/fac-distancia-i05';
import { FacDistanciaI06 } from '../models/fac-distancia-i06';
import { FacDistanciaF03 } from '../models/fac-distancia-f03';
import { FacDistanciaC01 } from '../models/fac-distancia-c01';
import { FacDistanciaC02 } from '../models/fac-distancia-c02';
import { FacAgropecuariaI01 } from '../models/fac-agropecuaria-i01';
import { FacAgropecuariaI02 } from '../models/fac-agropecuaria-i02';
import { FacAgropecuariaI03 } from '../models/fac-agropecuaria-i03';
import { FacAgropecuariaI04 } from '../models/fac-agropecuaria-i04';
import { FacAgropecuariaI05 } from '../models/fac-agropecuaria-i05';
import { FacAgropecuariaI06 } from '../models/fac-agropecuaria-i06';
import { FacAgropecuariaF01 } from '../models/fac-agropecuaria-f01';
import { FacAgropecuariaF02 } from '../models/fac-agropecuaria-f02';
import { FacAgropecuariaF03 } from '../models/fac-agropecuaria-f03';
import { FacAgropecuariaC01 } from '../models/fac-agropecuaria-c01';
import { FacAgropecuariaC02 } from '../models/fac-agropecuaria-c02';
import{FacCienciasC01} from '../models/fac-ciencias-c01';
import{FacCienciasC02} from '../models/fac-ciencias-c02';
import{FacCienciasC0201} from '../models/fac-ciencias-c0201';
import{FacCienciasF01} from '../models/fac-ciencias-f01';
import{FacCienciasF02} from '../models/fac-ciencias-f02';
import{FacCienciasF03} from '../models/fac-ciencias-f03';
import{FacCienciasI01} from '../models/fac-ciencias-i01';
import{FacCienciasI02} from '../models/fac-ciencias-i02';
import{FacCienciasI03} from '../models/fac-ciencias-i03';
import{FacCienciasI04 } from '../models/fac-ciencias-i04';
import{FacCienciasI05 } from '../models/fac-ciencias-i05';
import{FacCienciasI06 } from '../models/fac-ciencias-i06';
import { FacEducacionI01 } from '../models/fac-educacion';
import { FacEducacionI02 } from '../models/fac-educacion-i02';
import { FacEducacionI03 } from '../models/fac-educacion-i03';
import { FacEducacionI04 } from '../models/fac-educacion-i04';
import { FacEducacionI05 } from '../models/fac-educacion-i05';
import { FacEducacionI06 } from '../models/fac-educacion-i06';
import { FacEducacionF01 } from '../models/fac-educacion-f01';
import { FacEducacionF02 } from '../models/fac-educacion-f02';
import { FacEducacionF03 } from '../models/fac-educacion-f03';
import { FacEducacionC01 } from '../models/fac-educacion-c01';
import { FacEducacionC02 } from '../models/fac-educacion-c02';

import { FacDerechoI01 } from '../models/fac-derecho-i01';
import { FacDerechoI02 } from '../models/fac-derecho-i02';
import { FacDerechoI05 } from '../models/fac-derecho-i05';
import { FacDerechoI06 } from '../models/fac-derecho-i06';
import { FacDerechoF01 } from '../models/fac-derecho-f01';
import { FacDerechoF03 } from '../models/fac-derecho-f03';
import { FacDerechoC01 } from '../models/fac-derecho-c01';
import { FacDerechoC02 } from '../models/fac-derecho-c02';

import { FacEconomiaI01 } from '../models/fac-economia-i01';
import { FacEconomiaI02 } from '../models/fac-economia-i02';
import { FacEconomiaI03 } from '../models/fac-economia-i03';
import { FacEconomiaI04 } from '../models/fac-economia-i04';
import { FacEconomiaI05 } from '../models/fac-economia-i05';
import { FacEconomiaI06 } from '../models/fac-economia-i06';
import { FacEconomiaF01 } from '../models/fac-economia-f01';
import { FacEconomiaF02 } from '../models/fac-economia-f02';
import { FacEconomiaF03 } from '../models/fac-economia-f03';
import { FacEconomiaC01 } from '../models/fac-economia-c01';
import { FacEconomiaC02 } from '../models/fac-economia-c02';

import { SecChiquinquiraC01 } from '../models/sec-chiquinquira-c01';
import { SecChiquinquiraC02 } from '../models/sec-chiquinquira-c02';
import { SecChiquinquiraI01 } from '../models/sec-chiquinquira-i01';
import { SecChiquinquiraI02 } from '../models/sec-chiquinquira-i02';
import { SecChiquinquiraI03 } from '../models/sec-chiquinquira-i03';
import { SecChiquinquiraI05 } from '../models/sec-chiquinquira-i05';
import { SecChiquinquiraI06 } from '../models/sec-chiquinquira-i06';
import { SecChiquinquiraF01 } from '../models/sec-chiquinquira-f01';
import { SecChiquinquiraF03 } from '../models/sec-chiquinquira-f03';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  facDisI01Array: FacDistanciaI01[];
  facDisI02Array: FacDistanciaI02[];
  facDisI03Array: FacDistanciaI03[];
  facDisI04Array: FacDistanciaI04[];
  facDisI05Array: FacDistanciaI05[];
  facDisI06Array: FacDistanciaI06[];
  facDisF03Array: FacDistanciaF03[];
  facDisC01Array: FacDistanciaC01[];
  facDisC02Array: FacDistanciaC02[];
  facAgroI01Array: FacAgropecuariaI01[];
  facAgroI02Array: FacAgropecuariaI02[];
  facAgroI03Array: FacAgropecuariaI03[];
  facAgroI04Array: FacAgropecuariaI04[];
  facAgroI05Array: FacAgropecuariaI05[];
  facAgroI06Array: FacAgropecuariaI06[];
  facAgroF01Array: FacAgropecuariaF01[];
  facAgroF02Array: FacAgropecuariaF02[];
  facAgroF03Array: FacAgropecuariaF03[];
  facAgroC01Array: FacAgropecuariaC01[];
  facAgroC02Array: FacAgropecuariaC02[];
  facCienC01Array: FacCienciasC01[];
  facCienC02Array: FacCienciasC02[];
  facCienC0201Array: FacCienciasC0201[];
  facCienF01Array: FacCienciasF01[];
  facCienF02Array: FacCienciasF02[];
  facCienF03Array: FacCienciasF03[];
  facCienI01Array: FacCienciasI01[];
  facCienI02Array: FacCienciasI02[];
  facCienI03Array: FacCienciasI03[];
  facCienI04Array: FacCienciasI04[];
  facCienI05Array: FacCienciasI05[];
  facCienI06Array: FacCienciasI06[];
  facEduI01Array: FacEducacionI01[];
  facEduI02Array: FacEducacionI02[];
  facEduI03Array: FacEducacionI03[];
  facEduI04Array: FacEducacionI04[];
  facEduI05Array: FacEducacionI05[];
  facEduI06Array: FacEducacionI06[];
  facEduF01Array: FacEducacionF01[];
  facEduF02Array: FacEducacionF02[];
  facEduF03Array: FacEducacionF03[];
  facEduC01Array: FacEducacionC01[];
  facEduC02Array: FacEducacionC02[];
  facDerI01Array: FacDerechoI01[];
  facDerI02Array: FacDerechoI02[];  
  facDerI05Array: FacDerechoI05[];
  facDerI06Array: FacDerechoI06[];
  facDerF01Array: FacDerechoF01[];  
  facDerF03Array: FacDerechoF03[];
  facDerC01Array: FacDerechoC01[];
  facDerC02Array: FacDerechoC02[];

  facEcoI01Array: FacEconomiaI01[];
  facEcoI02Array: FacEconomiaI02[];
  facEcoI03Array: FacEconomiaI03[];
  facEcoI04Array: FacEconomiaI04[];
  facEcoI05Array: FacEconomiaI05[];
  facEcoI06Array: FacEconomiaI06[];
  facEcoF01Array: FacEconomiaF01[];
  facEcoF02Array: FacEconomiaF02[];
  facEcoF03Array: FacEconomiaF03[];
  facEcoC01Array: FacEconomiaC01[];
  facEcoC02Array: FacEconomiaC02[];

  secChiI01Array: SecChiquinquiraI01[];
  secChiI02Array: SecChiquinquiraI02[];
  secChiI03Array: SecChiquinquiraI03[];
  secChiI05Array: SecChiquinquiraI05[];
  secChiI06Array: SecChiquinquiraI06[];
  secChiF01Array: SecChiquinquiraF01[];
  secChiF03Array: SecChiquinquiraF03[];
  secChiC01Array: SecChiquinquiraC01[];
  secChiC02Array: SecChiquinquiraC02[];


  constructor(private http: HttpClient) {
  }

  getFacDistanciaI01(){
    return this.http.get('http://localhost:3000/facDistancia/i01'); 
  }

  getFacDistanciaI02(){
    return this.http.get('http://localhost:3000/facDistancia/i02');
  }

  getFacDistanciaI03(){
    return this.http.get('http://localhost:3000/facDistancia/i03');
  }

  getFacDistanciaI04(){
    return this.http.get('http://localhost:3000/facDistancia/i04');
  }

  getFacDistanciaI05(){
    return this.http.get('http://localhost:3000/facDistancia/i05');
  }

  getFacDistanciaI06(){
    return this.http.get('http://localhost:3000/facDistancia/i06');
  }

  getFacDistanciaF03(){
    return this.http.get('http://localhost:3000/facDistancia/f03');
  }
  
  getFacDistanciaC01(){
    return this.http.get('http://localhost:3000/facDistancia/c01');
  }

  getFacDistanciaC02(){
    return this.http.get('http://localhost:3000/facDistancia/c02');
  }

  getSecChiquinquiraI01(){
    return this.http.get('http://localhost:3000/secChi/i01'); 
  }

  getSecChiquinquiraI02(){
    return this.http.get('http://localhost:3000/secChi/i02');
  }

  getSecChiquinquiraI03(){
    return this.http.get('http://localhost:3000/secChi/i03');
  }

  getSecChiquinquiraI05(){
    return this.http.get('http://localhost:3000/secChi/i05');
  }

  getSecChiquinquiraI06(){
    return this.http.get('http://localhost:3000/secChi/i06');
  }

  getSecChiquinquiraF01(){
    return this.http.get('http://localhost:3000/secChi/f01');
  }

  getSecChiquinquiraF03(){
    return this.http.get('http://localhost:3000/secChi/f03');
  }
  
  getSecChiquinquiraC01(){
    return this.http.get('http://localhost:3000/secChi/c01');
  }

  getSecChiquinquiraC02(){
    return this.http.get('http://localhost:3000/secChi/c02');
  }


  getFacEconomiaI01(){
    return this.http.get('http://localhost:3000/facEco/i01'); 
  }

  getFacEconomiaI02(){
    return this.http.get('http://localhost:3000/facEco/i02');
  }

  getFacEconomiaI03(){
    return this.http.get('http://localhost:3000/facEco/i03');
  }

  getFacEconomiaI04(){
    return this.http.get('http://localhost:3000/facEco/i04');
  }

  getFacEconomiaI05(){
    return this.http.get('http://localhost:3000/facEco/i05');
  }

  getFacEconomiaI06(){
    return this.http.get('http://localhost:3000/facEco/i06');
  }

  getFacEconomiaF01(){
    return this.http.get('http://localhost:3000/facEco/f01');
  }

  getFacEconomiaF02(){
    return this.http.get('http://localhost:3000/facEco/f02');
  }

  getFacEconomiaF03(){
    return this.http.get('http://localhost:3000/facEco/f03');
  }
  
  getFacEconomiaC01(){
    return this.http.get('http://localhost:3000/facEco/c01');
  }

  getFacEconomiaC02(){
    return this.http.get('http://localhost:3000/facEco/c02');
  }

  getFacAgropecuariaI01(){
    return this.http.get('http://localhost:3000/facAgro/i01');
  }

  getFacAgropecuariaI02(){
    return this.http.get('http://localhost:3000/facAgro/i02');
  }

  getFacAgropecuariaI03(){
    return this.http.get('http://localhost:3000/facAgro/i03');
  }
  
  getFacAgropecuariaI04(){
    return this.http.get('http://localhost:3000/facAgro/i04');
  }

  getFacAgropecuariaI05(){
    return this.http.get('http://localhost:3000/facAgro/i05');
  }

  getFacAgropecuariaI06(){
    return this.http.get('http://localhost:3000/facAgro/i06');
  }

  getFacAgropecuariaF01(){
    return this.http.get('http://localhost:3000/facAgro/f01');
  }

  getFacAgropecuariaF02(){
    return this.http.get('http://localhost:3000/facAgro/f02');
  }

  getFacAgropecuariaF03(){
    return this.http.get('http://localhost:3000/facAgro/f03');
  }

  getFacAgropecuariaC01(){
    return this.http.get('http://localhost:3000/facAgro/c01');
  }

  getFacAgropecuariaC02(){
    return this.http.get('http://localhost:3000/facAgro/c02');
  }

  getFacCienciasC01(){
    return this.http.get('http://localhost:3000/facCien/c01');
  }

  getFacCienciasC02(){
    return this.http.get('http://localhost:3000/facCien/c02');
  }

  getFacCienciasC0201(){
    return this.http.get('http://localhost:3000/facCien/c0201');
  }

  getFacCienciasF01(){
    return this.http.get('http://localhost:3000/facCien/f01');
  }

  getFacCienciasF02(){
    return this.http.get('http://localhost:3000/facCien/f02');
  }

  getFacCienciasF03(){
    return this.http.get('http://localhost:3000/facCien/f03');
  }

  getFacCienciasI01(){
    return this.http.get('http://localhost:3000/facCien/i01');
  }

  getFacCienciasI02(){
    return this.http.get('http://localhost:3000/facCien/i02');
  }

  getFacCienciasI03(){
    return this.http.get('http://localhost:3000/facCien/i03');
  }

  getFacCienciasI04(){
    return this.http.get('http://localhost:3000/facCien/i04');
  }

  getFacCienciasI05(){
    return this.http.get('http://localhost:3000/facCien/i05');
  }

  getFacCienciasI06(){
    return this.http.get('http://localhost:3000/facCien/i06');
  }

  getFacEducacionI01(){
    return this.http.get('http://localhost:3000/facEdu/i01');
  }

  getFacEducacionI02(){
    return this.http.get('http://localhost:3000/facEdu/i02');
  }

  getFacEducacionI03(){
    return this.http.get('http://localhost:3000/facEdu/i03');
  }

  getFacEducacionI04(){
    return this.http.get('http://localhost:3000/facEdu/i04');
  }

  getFacEducacionI05(){
    return this.http.get('http://localhost:3000/facEdu/i05');
  }

  getFacEducacionI06(){
    return this.http.get('http://localhost:3000/facEdu/i06');
  }

  getFacEducacionF01(){
    return this.http.get('http://localhost:3000/facEdu/f01');
  }

  getFacEducacionF02(){
    return this.http.get('http://localhost:3000/facEdu/f02');
  }

  getFacEducacionF03(){
    return this.http.get('http://localhost:3000/facEdu/f03');
  }

  getFacEducacionC01(){
    return this.http.get('http://localhost:3000/facEdu/c01');
  }

  getFacEducacionC02(){
    return this.http.get('http://localhost:3000/facEdu/c02');
  }

  getFacDerechoI01(){
    return this.http.get('http://localhost:3000/facDer/i01');
  }

  getFacDerechoI02(){
    return this.http.get('http://localhost:3000/facDer/i02');
  }

  getFacDerechoI05(){
    return this.http.get('http://localhost:3000/facDer/i05');
  }

  getFacDerechoI06(){
    return this.http.get('http://localhost:3000/facDer/i06');
  }

  getFacDerechoF01(){
    return this.http.get('http://localhost:3000/facDer/f01');
  }

  getFacDerechoF03(){
    return this.http.get('http://localhost:3000/facDer/f03');
  }

  getFacDerechoC01(){
    return this.http.get('http://localhost:3000/facDer/c01');
  }

  getFacDerechoC02(){
    return this.http.get('http://localhost:3000/facDer/c02');
  }
}