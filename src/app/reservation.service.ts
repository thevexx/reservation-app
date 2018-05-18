import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: Http) { }

  addReservation(reservation) {
    const url = 'http://192.168.0.20:3000/api/reservations';
    this.http.post(url, reservation);
  }

 listReservation() {
    const url = 'http://192.168.0.20:3000/api/reservations';
    this.http.get(url);
  }

}
