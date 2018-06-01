import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as jwt from 'angular2-jwt-simple';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }



  addReservation(reservation) {
    const url = 'http://localhost:3000/api/reservations';
    return this.http.post(url, reservation);
  }

  listReservation() {
    const url = 'http://localhost:3000/api/reservations';
    return this.http.get(url);
  }
  getlistReservationByUser() {
    const token = localStorage.getItem('token');
    const _id = jwt.decode(token, 'my_pass')._id;
    const url = 'http://localhost:3000/api/reservations/byUser/' + _id;
    return this.http.get(url);
  }
  getEcrans() {
    return this.http.get('http://localhost:3000/api/ecrans');
  }
  getEcranById(idEcran) {
    return this.http.get('http://localhost:3000/api/ecrans/' + idEcran);
  }
}
