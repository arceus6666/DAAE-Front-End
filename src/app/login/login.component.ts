import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../services/restapi.service';
import { LoggerService } from '../services/logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private mydata: any
  private code: number
  private password: string
  constructor(
    private _service: RestapiService,
    private _logger: LoggerService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this._service.getGlobal('/users/login', '', this.code + ' ' + this.password).subscribe(data => {
      this.mydata = data
      this._logger.setRole(this.mydata.role)
      this._logger.setID(this.mydata._id)
    }, error => {
      console.log(error)
    })
    this._logger.logIn()
    this._router.navigate(['home'])
  }

}
