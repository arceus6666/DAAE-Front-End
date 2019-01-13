import { Component, OnInit, ViewChild } from '@angular/core';
import { RestapiService } from '../services/restapi.service';
import { LoggerService } from '../services/logger.service';
import { Router } from '@angular/router';
import { StuffManagerService } from '../services/stuff-manager.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.css']
})
export class InsertFormComponent implements OnInit {

  public form: any;
  public err1: boolean;
  public err2: boolean;
  public f: FormGroup;
  public ftype;
  public imageString: string;
  public image: boolean;

  constructor(
    private _restapi: RestapiService,
    public _logger: LoggerService,
    public _stuffManager: StuffManagerService,
    private _router: Router,
    public _builder: FormBuilder,
    public _cleaner: DomSanitizer
  ) {
    this.form = { examen_de_suficiencia: false, materia_incompleta: false };
    this.err1 = false;
    this.err2 = false;
    this.f = this._builder.group({
      name: ['image', Validators.required],
      file: null
    });
    this.image = false;
  }

  ngOnInit() {
  }

  onFileChange(event) {
    this.image = true;
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.ftype = file.type;
        this.f.get('file').setValue({
          filename: 'image',
          filetype: file.type,
          value: (reader.result).toString().split(',')[1]
        })
      };
    }
  }

  register() {
    if (this.form.category === 'materiaIncompleta') {
      this.form.materia_incompleta.is = true;
    }
    if (this.form.category === 'examenSuficiencia') {
      this.form.examen_de_suficiencia.is = true;
    }
    if (this.image) {
      this.form.digital = {
        obj: { value: this.f.value, ftype: this.ftype },
        is: true
      };
    }

    this._restapi.getGlobal(['forms', 'student-code', this.form.student_code]).subscribe(data => {
      let mdata: any = data;
      let q = 0;
      if (this.form.category === 'materiaIncompleta') {
        for (let i in mdata) {
          if (mdata[i].materia_incompleta) {
            q++;
          }
        }
        if (q < 3) {
          this._restapi.postGlobal(['forms', 'register'], this.form).subscribe(data => {
            this._router.navigate(['search-form']);
          }, err => {
            console.log(err)
          });
        }
      }
      if (this.form.category === 'examenSuficiencia') {
        for (let i in mdata) {
          if (mdata[i].examen_de_suficiencia) {
            q++;
          }
        }
        if (q < 11) {
          this._restapi.postGlobal(['forms', 'register'], this.form).subscribe(data => {
            this._router.navigate(['search-form']);
          }, err => {
            console.log(err)
          });
        }
      }
    }, err => {
      console.log(err)
    })
  }

}
