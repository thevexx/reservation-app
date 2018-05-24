import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { AdminService } from '../../services/admin.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservations;


  constructor(private adminService: AdminService,public snackBar: MatSnackBar) {
  }

openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration:2000,
    });
  }
  ngOnInit() {
    console.log('das macht');
    this.adminService.getlistReservation().subscribe(res => {
      console.log(res.json());
      this.reservations = res.json();
    });
}

    reservationAcceptBtn (idreservation) {
      this.adminService.UpdateReservationEtat(idreservation, {etat: 'accepte'}).subscribe( res => {
        this.openSnackBar('Modification','reservation accepté ');
      });
      this.ngOnInit();
    }
    reservationRefusedBtn (idreservation) {
      this.adminService.UpdateReservationEtat(idreservation, {etat: 'refused'}).subscribe( res => {
        this.openSnackBar('Modification','reservation refusée ');
        console.log('Etat reservation modifié ');
      });
      this.ngOnInit();
    }


}
