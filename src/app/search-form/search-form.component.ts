import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../services/restapi.service';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  private fstate: any
  private ftype: any
  private fcareer: any
  private fdate: Date
  private arg: string

  private forms: any

  constructor(public _service: RestapiService, private _logger: LoggerService, private _router: Router) { }

  ngOnInit() {
  }

  getForm() {
    this.arg = `${this.ftype} ${this.fstate} ${this.fcareer} ${this.fdate}`

    this._service.getGlobal('/forms/search', '', this.arg).subscribe(data => {
      this.forms = data
    }, err => {
      console.log(err)
    })
  }

}
