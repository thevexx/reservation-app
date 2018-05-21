import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as jwt from 'angular2-jwt-simple';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errMessage;
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  btnLogin(f) {

    console.log(f.value);
    this.errMessage = '';
    console.log('Login work');
    this.authService.loginUser(f.value).subscribe(res => {
      console.log(res.json().message);
      if (res.json().message === 'ok') {
        localStorage.setItem('token', res.json().token);
        const role = jwt.decode(localStorage.getItem('token'), 'my_pass').role;
        console.log(role);
        if (role === 'admin') {
          this.router.navigateByUrl('reservations');
        } else if (role === 'user') {
          this.router.navigateByUrl('home');
        }

      } else {
        this.errMessage = res.json().message;
      }
    });
  }

}
