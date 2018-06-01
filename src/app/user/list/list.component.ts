import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  reservations = [1, 1, 1, 1, 1];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getlistReservationByUser().subscribe(res => {
      console.log(res.json());
      this.reservations = res.json();
    });
  }

}
