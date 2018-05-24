import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }



  addReservation(reservation) {
    const url = 'http://192.168.0.20:3000/api/reservations';
    return this.http.post(url, reservation);
  }

  listReservation() {
    const url = 'http://192.168.0.20:3000/api/reservations';
    return this.http.get(url);
  }
  getlistReservationByUser() {
    const url = 'http://192.168.0.20:3000/api/reservations/user_id';
    return this.http.get(url);
  }
  getEcrans() {
    return this.http.get('http://192.168.0.20:3000/api/ecrans');
  }
  getEcranById(idEcran) {
    return this.http.get('http://192.168.0.20:3000/api/ecrans/' + idEcran);
  }
}