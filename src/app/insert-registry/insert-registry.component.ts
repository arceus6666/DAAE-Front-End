import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../services/restapi.service';
import { Router } from '@angular/router';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-insert-registry',
  templateUrl: './insert-registry.component.html',
  styleUrls: ['./insert-registry.component.css']
})
export class InsertRegistryComponent implements OnInit {

  public msg: string;
  public show: boolean;
  constructor(
    private _restapi: RestapiService,
    private _logger: LoggerService,
    private _router: Router
  ) {
    console.log(this._logger.getRole())
    this.show = false;
  }

  ngOnInit() {
  }

  onSubmit() {
    this._restapi.postRegistry(this._logger.getID(), this.msg).subscribe(data => {
      this.show = true;
    }, err => {
      console.log(err)
    });
  }

}
