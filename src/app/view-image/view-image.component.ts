import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestapiService } from '../services/restapi.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent implements OnInit {

  public id: string;
  public form: any;
  public imageString: string;

  constructor(
    private _route: ActivatedRoute,
    private _restapi: RestapiService,
    public _cleaner: DomSanitizer
  ) {
    this.id = this._route.snapshot.paramMap.get('id');
    this._restapi.getGlobal(['forms', 'get', this.id]).subscribe(data => {
      let mdata: any = data;
      let image = mdata.msg.digital.obg;
      this.imageString = 'data:image/' + image.ftype + ';base64,' + image.value;
    }, err => {
      console.log(err)
    });
  }

  ngOnInit() {
  }

}
