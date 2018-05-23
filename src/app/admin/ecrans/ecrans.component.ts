import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-ecrans',
  templateUrl: './ecrans.component.html',
  styleUrls: ['./ecrans.component.css']
})
export class EcransComponent implements OnInit {

  ecranForm;
  ecrans;
  ecranToEdit;

  constructor(private adminService: AdminService) {
    this.ecranForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      dimlong: new FormControl('', [Validators.required]),
      dimlar: new FormControl('', [Validators.required]),
      reslong: new FormControl('', [Validators.required]),
      reslar: new FormControl('', [Validators.required]),
      emplacementPhysique: new FormControl('', [Validators.required]),
      nSpotParIteration: new FormControl('', [Validators.required]),
      gpslong: new FormControl('', []),
      gpslat: new FormControl('', []),
      prix: new FormControl('', [Validators.required]),
      pictureUrl: new FormControl('', []),
      youtubeUrl: new FormControl('', []),

    });
  }


  ngOnInit() {
    this.adminService.getAllEcrans().subscribe(res => {
      this.ecrans = res.json();
    });
  }

  ecranEditBtn(id) {
    this.adminService.getEcranById(id).subscribe(res => {
      console.log(res.json());
      this.ecranToEdit = res.json();
    });
  }

  AjoutEcran(ecran) {
    ecran['emplacementGps'] = { latitude: ecran.gpslat, longitude: ecran.gpslong };
    ecran['dimensions'] = { longueur: ecran.dimlong, largeur: ecran.dimlar };
    ecran['resolution'] = { longueur: ecran.reslong, largeur: ecran.reslar };
    console.log(ecran);
    this.adminService.AddnewEcran(ecran).subscribe(res => {
      this.ngOnInit();
      console.log(res.json());
    });
  }

}
