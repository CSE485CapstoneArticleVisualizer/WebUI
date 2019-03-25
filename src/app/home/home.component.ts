import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataModel } from '../data/data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: Observable<DataModel[]>;

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.data = data;
    });
  }

  ngOnInit() {

  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/data.json');
  }
}
