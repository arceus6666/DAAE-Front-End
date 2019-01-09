import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../services/restapi.service';
import { LoggerService } from '../services/logger.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  private ftype: any;
  private fstate: any;
  private fcareer: any;
  private fdate: Date;

  private forms: any;

  constructor(
    public _service: RestapiService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  getForm() {
    let params = new HttpParams()
      .set('type', this.ftype)
      .set('state', this.fstate)
      .set('career', this.fcareer)
      .set('date', this.fdate.toString());

    this._service.getGlobal(['forms', 'search'], params).subscribe(data => {
      let mdata: any = data;
      this.forms = mdata.msg;
    }, err => {
      console.log(err)
    })
  }

  getCareer(id: string) {
    switch (id) {
      case 'admin':
        return 'Administración de Empresas';
      case 'arqui':
        return 'Arquitectura';
      case 'comu':
        return 'Comunicación';
      case 'derecho':
        return 'Derecho';
      case 'disgraf':
        return 'Diseño Gráfico';
      case 'economia':
        return 'Economía';
      case 'civil':
        return 'Ingeniería Civil';
      case 'comercial':
        return 'Ingeniería Comercial';
      case 'isc':
        return 'Ingeniería de Sistemas Computacionales';
      case 'electro':
        return 'Ingeniería Electromecánica';
      case 'telecom':
        return 'Ingeniería en Sistemas Electrónicos y de Telecomunicaciones';
      case 'financiera':
        return 'Ingeniería Financiera';
      case 'industrial':
        return 'Ingeniería Industrial y de Sistemas';
      case 'petrolera':
        return 'Ingeniería Petrolera';
      case 'produccion':
        return 'Ingeniería de Producción';
      case 'mkt':
        return 'Marketing y Logística';
    }
  }

}
