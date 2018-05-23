import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-reservation-ecran',
  templateUrl: './reservation-ecran.component.html',
  styleUrls: ['./reservation-ecran.component.css']
})
export class ReservationEcranComponent implements OnInit {

  idEcran;

  ecran;

  constructor(private route: ActivatedRoute, private userService: UserService, private sanitizer: DomSanitizer) {
    route.params.subscribe(params => {
      this.idEcran = params.id;
    });
  }

  ngOnInit() {
    console.log(this.idEcran);
    this.userService.getEcranById(this.idEcran).subscribe(res => {
      this.ecran = res.json();
      this.ecran.youtubeUrl = 'https://www.youtube.com/embed/' + this.ecran.youtubeUrl;
    });
  }

  geturl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
