import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { StuffManagerService } from './services/stuff-manager.service';
import { RestapiService } from './services/restapi.service';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { CryptarcService } from './services/cryptarc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(
    public _logger: LoggerService,
    public _stuffManager: StuffManagerService,
    public _cryptarc: CryptarcService,
    public _restapi: RestapiService
  ) {

  }
  ngOnInit(): void {
    let tk = this._stuffManager.getItem('token');
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', tk);
    if (tk) {
      this._restapi.getGlobal(['auth'], new HttpParams(), headers).subscribe(data => {
        let mdata: any = data;
        mdata = mdata.msg;
        this._logger.logIn(mdata._id, mdata.role, tk);
      }, err => {
        console.log(err)
      })
    }
  }
  public reg(): void {
    this._restapi.postRegistry(this._logger.getID(), 'Logout').subscribe(data => {
    }, err => {
      console.log(err)
    });
  }
}
