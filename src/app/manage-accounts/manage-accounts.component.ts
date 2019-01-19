import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-manage-accounts',
  templateUrl: './manage-accounts.component.html',
  styleUrls: ['./manage-accounts.component.css']
})
export class ManageAccountsComponent implements OnInit {

  public users;

  constructor(
    private _restapi: RestapiService
  ) {
    this._restapi.getGlobal(['users', 'all']).subscribe(data => {
      let mdata: any = data;
      this.users = mdata.msg;
    }, err => {
      console.log(err)
    })
  }

  ngOnInit() {
  }

}
