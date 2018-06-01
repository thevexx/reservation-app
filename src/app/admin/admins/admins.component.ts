import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {



  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false
      },
      name: {
        title: ' name',
        filter: false
      },
      lastname: {
        title: 'lastname',
        filter: false
      },

      email: {
        title: 'Email',
        filter: false
      },
    }
  };

  data = [
    {
      'id': 1,
      'nom': 'chehir',
      'prenom': 'dhwedi',
      'pass': 'fivepts',
      'email': 'fivepoints.com',
    }
  ];
  source: LocalDataSource;

  constructor(private adminService: AdminService) {

  }

  ngOnInit() {
    this.adminService.getUserByRole('admin').subscribe(res => {
      this.data = res.json();
      this.source = new LocalDataSource(this.data);
    });
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
