import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userForm: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  BtnAddAdminUser(f) {
    f.value['role'] = 'admin';
    this.authService.getregister(f.value).subscribe( res => {
      console.log(res.json);
    });
    console.log('added');
  }
}
