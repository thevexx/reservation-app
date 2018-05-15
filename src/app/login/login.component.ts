import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errMessage;
  loginForm: FormGroup;

  constructor(private authService: AuthService) { }


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
      } else {
        this.errMessage = res.json().message;
      }
    });
  }

}
