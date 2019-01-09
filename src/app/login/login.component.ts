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
  private codem: number;
  private passwordm: string;
  private err: boolean;
  private remember: boolean;

  constructor(
    private _service: RestapiService,
    private _logger: LoggerService,
    private _stuffManager: StuffManagerService,
    private _router: Router
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

    this._service.getGlobal(
      ['users', 'login'],
      params
    ).subscribe(data => {
      // console.log(data)
      mdata = data;
      this._logger.logIn(mdata.msg._id, mdata.msg.role, mdata.token);
      console.log(this.remember)
      if (this.remember) {
        this._stuffManager.storeItem('token', mdata.token);
      }
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
