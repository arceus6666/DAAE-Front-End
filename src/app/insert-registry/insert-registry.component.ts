import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../services/restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-registry',
  templateUrl: './insert-registry.component.html',
  styleUrls: ['./insert-registry.component.css']
})
export class InsertRegistryComponent implements OnInit {

  constructor(
    private _restapi: RestapiService,
    private _router: Router
  ) {
    
  }

  ngOnInit() {
  }

}
