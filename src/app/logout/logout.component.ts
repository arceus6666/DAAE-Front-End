import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _logger: LoggerService, private _router: Router) { }

  ngOnInit() {
    this._logger.logOut()
    this._logger.setRole('')
    this._router.navigate(['home'])
  }

}
