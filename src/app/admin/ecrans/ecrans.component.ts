import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ecrans',
  templateUrl: './ecrans.component.html',
  styleUrls: ['./ecrans.component.css']
})
export class EcransComponent implements OnInit {
  constructor() { }
  ecarnForm;

  ngOnInit() {
    this.ecarnForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      Dimension: new FormControl('', [Validators.required]),
      Resolution: new FormControl('', [Validators.required, Validators.email]),
      adresse: new FormControl('', [Validators.required]),
      iteration: new FormControl('', [Validators.required]),
    });
  }

}
