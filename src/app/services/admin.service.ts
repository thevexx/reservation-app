import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: Http) { }
 getAllUser() {
     const url = 'http://192.168.0.20:3000/api/listuser/list';
    this.http.get(url);
  }

  AddnewUser(user) {
    const url = 'http://192.168.0.20:3000/api/listuser/insert';
    this.http.post(url, user);
  }
  AddUser(user) {
    const url = 'http://192.168.0.20:3000/api/listuser/update';
    this.http.put(url, user);
  }
  delUser(user) {
    const url = 'http://192.168.0.20:3000/api/listuser/delete';
    this.http.delete(url, user);
  }

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
  getEcranByUser(_idUser) {
    const url = 'http://192.168.0.20:3000/api/ecrans/idUser';
    this.http.get(url, _idUser);
  }
/* GET reservation by userId */

   getReservationByUser(_idUser) {
    const url = 'http://192.168.0.20:3000/api/ecrans/idUser';
    this.http.get(url, _idUser);
  }
   getlistReservation() {
    const url = 'http://192.168.0.20:3000/api/reservations/:idUser';
this.http.get(url);
  }
}
