import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Kv } from '../models/kv';

@Injectable({
  providedIn: 'root'
})
export class StuffManagerService {

  private formularios: Kv<string, string>[];
  private carreras: Kv<string, string>[];
  private materias: Kv<string, string>[];

  constructor(private http: HttpClient) {
    this.formularios = [
      new Kv('Cualquiera', ''),
      new Kv('Altas y Bajas', 'altasBajas'),
      new Kv('Carta de Solicitud - Práctica Empresarial', 'cartaSolPracEmpr'),
      new Kv('Cambio de Campus', 'cambioCampus'),
      new Kv('Cambio de Carrera', 'cambioCarrera'),
      new Kv('Evaluación de Prácticas Empresariales', 'evalPractEmpr'),
      new Kv('Evaluación de Prácticas Empresariales de Arquitectura', 'evalPractEmprArq'),
      new Kv('Diferido', 'examenDiferido'),
      new Kv('Examen de Suficiencia', 'examenSuficiencia'),
      new Kv('Materia Incompleta', 'materiaIncompleta'),
      new Kv('Modificación/Inclusión de Calificaciones', 'modfCalificacion'),
      new Kv('Solicitud de Alumno Oyente', 'solicitudOyente'),
      new Kv('Solicitud de Calificación Pendiente', 'solPendiente'),
      new Kv('Solicitud de Convalidación de Asignaturas por Cambio de Universidad', 'solConvalidacion'),
      new Kv('Solicitud de Homologación por Cambio de Plan de Estudios', 'solHomologacion'),
      new Kv('Solicitud de Prácticas en Empresa', 'solEmpresa')
    ];
    this.carreras = [
      new Kv('Cualquiera', ''),
      new Kv('Administración de Empresas', 'admin'),
      new Kv('Arquitectura', 'arqui'),
      new Kv('Comunicación', 'comu'),
      new Kv('Derecho', 'derecho'),
      new Kv('Diseño Gráfico', 'disgraf'),
      new Kv('Economía', 'economia'),
      new Kv('Ingeniería Civil', 'civil'),
      new Kv('Ingeniería Comercial', 'comercial'),
      new Kv('Ingeniería de Sistemas Computacionales', 'isc'),
      new Kv('Ingeniería Electromecánica', 'electro'),
      new Kv('Ingeniería en Sistemas Electrónicos y de Telecomunicaciones', 'telecom'),
      new Kv('Ingeniería Financiera', 'financiera'),
      new Kv('Ingeniería Industrial y de Sistemas', 'industrial'),
      new Kv('Ingeniería Petrolera y Gas Natural', 'petrolera'),
      new Kv('Ingeniería de Producción', 'produccion'),
      new Kv('Marketing y Logística', 'mkt'),
      new Kv('Psicología Organizacional', 'psi'),
    ];
    this.materias = [
      new Kv('', ''),
      new Kv('', '')
    ];
  }

  public getForms(): Kv<string, string>[] {
    return this.formularios;
  }

  public getCareers(): Kv<string, string>[] {
    return this.carreras;
  }

  public getMats(): Kv<string, string>[] {
    return this.materias;
  }

  /**
   * Save an item in local storage.
   * @param key key for the item.
   * @param item item to store.
   */
  public storeItem(key: string, item: string): void {
    // console.log('saving: ' + item + ', as: ' + key)
    localStorage.setItem(key, item);
  }

  /**
   * Recover an item from local storage.
   * @param key key of the item.
   */
  public getItem(key: string): string {
    return localStorage.getItem(key);
  }

  /**
   * Delete an item from local storage.
   * @param key key of the item.
   */
  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public upload(files: Set<File>): { [key: string]: Observable<number> } {
    const status = {};
    console.log(files)
    files.forEach(file => {
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      const req = new HttpRequest('POST', 'http://localhost:7890/upload', formData, {
        reportProgress: true
      });
      const progress = new Subject<number>();
      this.http.request(req).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          const percentDone = Math.round(100 * event.loaded / event.total);
          progress.next(percentDone);
        } else if (event instanceof HttpResponse) {
          progress.complete();
        }
      });
      status[file.name] = {
        progress: progress.asObservable()
      };
    });
    return status;
  }
}
