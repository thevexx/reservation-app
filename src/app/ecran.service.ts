import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EcranService {

  constructor(private http: Http) { }
  getAllEcrans() {
     const url = 'http://192.168.0.20:3000/api/ecrans';
    this.http.get(url);
  }

  AddnewEcran(ecran) {
    const url = 'http://192.168.0.20:3000/api/ecrans';
    this.http.post(url, ecran);
  }

  getEcranById(_idEcran) {
    const url = 'http://192.168.0.20:3000/api/ecrans';
    this.http.get(url, _idEcran);
  }
}


