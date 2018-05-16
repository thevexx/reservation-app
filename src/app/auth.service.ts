 import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  loginUser(loginUser) {

    const url = 'http://192.168.0.20:3000/auth/login';
    return this.http.post(url, loginUser);
  }



  getregister(user) {

    return this.http.post('http://192.168.0.20:3000/auth/register' , user);

  }

}
