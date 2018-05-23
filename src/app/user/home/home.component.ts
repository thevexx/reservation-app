import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ecrans;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getEcrans().subscribe(res => {
      this.ecrans = res.json();
      this.ecrans.forEach(ecran => {
        if (ecran.nSpotParIteration < 6) {
          ecran.nSpotParIteration = Number(((ecran.nSpotParIteration * 100) / 6).toFixed(2));
        } else {
          ecran.nSpotParIteration = Number(((ecran.nSpotParIteration * 100) / 8).toFixed(2));
        }

      });
    });
  }

}
