import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../services/restapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  private id: string;
  public us: User;
  public email_var: string;
  public code_var: number;
  public fn_var: string;
  public sn_var: string;
  public fs_var: string;
  public ss_var: string;
  public role_var: string;
  public p1: string;
  public p2: string;

  constructor(
    private _restapi: RestapiService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.us = new User(0, '', { firstName: '', firstSurname: '', secondSurname: '' }, '', '');
    this.id = this._route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.us.code = this.code_var;
    this.us.email = this.email_var;
    this.us.name.firstName = this.fn_var;
    this.us.name.firstSurname = this.fs_var;
    this.us.name.secondSurname = this.ss_var;
    if (this.sn_var) this.us.name.secondName = this.sn_var;
    this.us.password = this.p1;
    this.us.role = this.role_var;
    //console.log(this.us)
    this._restapi.putGlobal(['users', 'update', this.id], this.us, null).subscribe(data => {
      this.us = new User(0, '', { firstName: '', firstSurname: '', secondSurname: '' }, '', '');
      alert('Usuario editado');
      this._router.navigate(['manage-accounts']);
    }, err => {
      console.log(err)
    });
  }

}
