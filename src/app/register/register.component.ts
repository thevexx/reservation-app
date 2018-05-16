import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  registerForm;
  ngOnInit() {
    this.registerForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      adresse: new FormControl('', [Validators.required]),
      cin: new FormControl('', [Validators.required, Validators.minLength(8), Validators.max(99999999)]),
      tel: new FormControl('', [Validators.required]),
    });

  }

}


// ng s -o -p 4201 --host 0.0.0.0

// go to chrome and open 192.168.0.20:4201

// chehir@fivep.tn // 12345
