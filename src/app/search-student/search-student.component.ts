import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../services/restapi.service';
import { LoggerService } from '../services/logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {

  public code_var: number;

  private student: any;

  constructor(
    private _service: RestapiService,
    private _logger: LoggerService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  getStudent(): void {
    this._service.getGlobal(['students', 'code', this.code_var.toString()]).subscribe(data => {
      let mdata: any = data;
      this.student = mdata.msg;
    }, err => {
      console.log(err)
    });
  }

  private getCareer(id: string): string {
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
