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
  private codem: number
  private passwordm: string
  private err: boolean
  constructor(
    private _service: RestapiService,
    private _logger: LoggerService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.err = false
  }

  onSubmit() {
    this.err = false
    this._service.getGlobal('/users/login', '', this.codem + ' ' + this.passwordm).subscribe(data => {
      this.mydata = data
      console.log(data)
      this._logger.setRole(this.mydata.role)
      this._logger.setID(this.mydata._id)
      this._logger.logIn()
      this._router.navigate(['home'])
    }, error => {
      this.err = true
      console.log(error)
    })
  }

}
