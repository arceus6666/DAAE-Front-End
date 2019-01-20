import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../services/restapi.service';
import { LoggerService } from '../services/logger.service';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { StuffManagerService } from '../services/stuff-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public codem: number;
  public passwordm: string;
  public err: boolean;
  public remember: boolean;

  constructor(
    private _restapi: RestapiService,
    public _logger: LoggerService,
    public _stuffManager: StuffManagerService,
    public _router: Router
  ) {
    this.err = false;
    this.remember = false;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.err = false;
    let mdata: any;
    let params = new HttpParams()
      .set('code', this.codem.toString())
      .set('password', this.passwordm);

    this._restapi.getGlobal(
      ['users', 'login'],
      params
    ).subscribe(data => {
      // console.log(data)
      mdata = data;
      this._logger.logIn(mdata.msg._id, mdata.msg.role, mdata.token);
      if (this.remember) {
        this._stuffManager.storeItem('token', mdata.token);
      }
      this._restapi.postRegistry(mdata.msg._id, 'Login').subscribe(data => {

      }, error => {
        console.log(error)
        this.err = true;
      })
      this._router.navigate(['home']);
    }, error => {
      console.log(error)
      this.err = true;
    });
  }

  check() {
    this.remember = !this.remember;
  }

}
