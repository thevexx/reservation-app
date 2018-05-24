import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: Http) { }
  getAllUser() {
    const url = 'http://137.117.132.180:3000/api/listuser/list';
    return this.http.get(url);
  }

  AddnewUser(user) {
    const url = 'http://137.117.132.180:3000/api/listuser/insert';
    return this.http.post(url, user);
  }
  AddUser(user) {
    const url = 'http://137.117.132.180:3000/api/listuser/update';
    return this.http.put(url, user);
  }
  delUser(user) {
    const url = 'http://137.117.132.180:3000/api/listuser/delete';
    return this.http.delete(url, user);
  }
  getUserByUser(_idUser) {
    const url = 'http://137.117.132.180:3000/api/listuser/idUser';
    return this.http.get(url, _idUser);
  }

  getAllEcrans() {
    const url = 'http://137.117.132.180:3000/api/ecrans';
    return this.http.get(url);
  }

  AddnewEcran(ecran) {
    const url = 'http://137.117.132.180:3000/api/ecrans';
    return this.http.post(url, ecran);
  }

  getEcranById(_idEcran) {
    const url = 'http://137.117.132.180:3000/api/ecrans/' + _idEcran;
    return this.http.get(url);
  }
  getEcranByUser(_idUser) {
    const url = 'http://137.117.132.180:3000/api/ecrans/idUser';
    return this.http.get(url, _idUser);
  }
  /* GET reservation by userId */

  getReservationByUser(_idUser) {
    const url = 'http://137.117.132.180:3000/api/reservations/byUser/idUser';
    return this.http.get(url, _idUser);
  }
  getlistReservation() {
    const url = 'http://137.117.132.180:3000/api/reservations/';
    return this.http.get(url);
  }

  UpdateReservationEtat(id, reser) {
    const url = 'http://137.117.132.180:3000/api/reservations/' + id;
    return this.http.put(url, reser);
  }
}
