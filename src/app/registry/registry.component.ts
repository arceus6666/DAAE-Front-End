import { Component, OnInit } from '@angular/core';
import { StuffManagerService } from '../services/stuff-manager.service';
import { RestapiService } from '../services/restapi.service';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  public registries = [];
  public users = [];
  public done: boolean;

  constructor(
    public _logger: LoggerService,
    public _stuffManager: StuffManagerService,
    private _restapi: RestapiService
  ) {
    this._restapi.getGlobal(['regs', 'all']).subscribe(data => {
      let mdata: any = data;
      this.registries = mdata.msg;
      console.log(data)
      for (let r in mdata.msg) {
        this._restapi.getGlobal(['users', 'find', mdata.msg[r].user]).subscribe(data2 => {
          console.log(data2)
          let mdata2: any = data2;
          this.users.push(mdata2.msg);
        }, err => {
          console.log(err)
        })
      }
    }, err => {
      console.log(err)
    });
  }

  ngOnInit() {
  }

}
