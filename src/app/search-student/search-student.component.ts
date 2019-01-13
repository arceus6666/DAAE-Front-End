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

  public student: any;

  constructor(
    private _restapi: RestapiService,
    public _logger: LoggerService,
    public _router: Router
  ) { }

  ngOnInit() {
  }

  getStudent(): void {
    this._restapi.getGlobal(['students', 'code', this.code_var.toString()]).subscribe(data => {
      let mdata: any = data;
      this.student = mdata.msg;
    }, err => {
      console.log(err)
    });
  }

  public getCareer(id: string): string {
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

  public getType(t: string): string {
    switch (t) {
      case 'altasBajas':
        return 'Altas y Bajas';
      case 'cartaSolPracEmpr':
        return 'Carta de Solicitud - Práctica Empresarial';
      case 'cambioCampus':
        return 'Cambio de Campus';
      case 'cambioCarrera':
        return 'Cambio de Carrera';
      case 'evalPractEmpr':
        return 'Evaluación de Prácticas Empresariales';
      case 'evalPractEmprArq':
        return 'Evaluación de Prácticas Empresariales de Arquitectura';
      case 'examenDiferido':
        return 'Examen Diferido';
      case 'examenSuficiencia':
        return 'Examen de Suficiencia';
      case 'materiaIncompleta':
        return 'Materia Incompleta';
      case 'modfCalificacion':
        return 'Modificación/Inclusión de Calificaciones';
      case 'solicitudOyente':
        return 'Solicitud de Alumno Oyente';
      case 'solPendiente':
        return 'Solicitud de Calificación Pendiente';
      case 'solConvalidacion':
        return 'Solicitud de Convalidación de Asignaturas por Cambio de Universidad';
      case 'solHomologacion':
        return 'Solicitud de Homologación por Cambio de Plan de Estudios';
      case 'solEmpresa':
        return 'Solicitud de Prácticas en Empresa';
    }
  }
}
