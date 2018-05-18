import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ListuserService {
   constructor(private http: Http) { }
  getAllUser() {
     const url = 'http://192.168.0.20:3000/api/listuser/list';
    this.http.get(url);
  }

  AddnewUser(user) {
    const url = 'http://192.168.0.20:3000/api/listuser/insert';
    this.http.post(url, user);
  }

    getUserByUser(_idUser) {
    const url = 'http://192.168.0.20:3000/api/listuser/idUser';
    this.http.get(url, _idUser);
  }
}
