import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class UsersComponent {



  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false
      },
      nom: {
        title: ' nom',
        filter: false
      },
      prenom: {
        title: 'prenom',
        filter: false
      },
        pass: {
        title: 'pass',
        filter: false
      },
      email: {
        title: 'Email',
        filter: false
      },
    }
  };

  data = [
    {'id': 1,
    'nom': 'chehir',
    'prenom': 'dhwedi',
    'pass': 'fivepts',
    'email': 'fivepoints.com',
  }
  ];
  source: LocalDataSource;

  constructor() {
    this.source = new LocalDataSource(this.data);
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      },
      {
        field: 'Nom',
        search: query
      },
      {
        field: 'prenom',
        search: query
      },
       {
        field: 'pass',
        search: query
      },
      {
        field: 'email',
        search: query
      }
    ], false);
  }

}
