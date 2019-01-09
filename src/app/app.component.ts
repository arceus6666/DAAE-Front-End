import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { StuffManagerService } from './services/stuff-manager.service';
import { RestapiService } from './services/restapi.service';
import { HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(
    private _logger: LoggerService,
    private _stuffManager: StuffManagerService,
    private _service: RestapiService
  ) {

  }
  ngOnInit(): void {
    let tk = this._stuffManager.getItem('token');
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', tk);
    // console.log(tk)
    if (tk) {
      this._service.getGlobal(['auth'], new HttpParams(), headers).subscribe(data => {
        let mdata: any = data;
        mdata = mdata.msg;
        this._logger.logIn(mdata._id, mdata.role, tk);
      }, err => {
        console.log(err)
      })
    }
  }
}
