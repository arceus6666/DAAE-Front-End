import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  n =  new Date();
  y = this.n.getFullYear();
  m = this.n.getMonth() + 1;
  d = this.n.getDate();
  mydate = this.d + '/' + this.m + '/' + this.y;

  constructor() { }

  ngOnInit() {
  }

}
