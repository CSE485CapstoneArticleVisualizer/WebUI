import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') sidenav;

  data: any;

  constructor() {

  }

  ngOnInit() {
    this.sidenav.opened = true;
  }
}
