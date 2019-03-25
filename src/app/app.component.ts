import { Component, ViewChild, OnInit } from '@angular/core';
import APP_CONFIG from './app.config';
import { Node, Link } from './d3';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') sidenav;

  nodes: Node[] = [];
  links: Link[] = [];

  data: any;

  constructor(private http: HttpClient) {
    const N = APP_CONFIG.N,
      getIndex = number => number - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i));
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new Link(i, i * m));
      }
    }

    this.getJSON().subscribe(data => {
      this.data = data;
      console.log(this.data);
      // const N = data.nodes.length,
      //   getIndex = number => number - 1;

      // /** constructing the nodes array */
      // for (let i = 1; i <= N; i++) {
      //   this.nodes.push(new Node(i));
      // }

      // for (let i = 1; i <= N; i++) {
      //   for (let m = 2; i * m <= N; m++) {
      //     /** increasing connections toll on connecting nodes */
      //     this.nodes[getIndex(i)].linkCount++;
      //     this.nodes[getIndex(i * m)].linkCount++;

      //     /** connecting the nodes before starting the simulation */
      //     this.links.push(new Link(i, i * m));
      //   }
      // }
    });
  }

  ngOnInit() {
    this.sidenav.opened = true;
  }

  private getJSON(): Observable<any> {
    return this.http.get('./assets/miserables.json');
  }
}
