import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from './../service/article.service';
import APP_CONFIG from './../app.config';
import { Node, Link } from './../d3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nodes: Node[] = [];
  links: Link[] = [];

  data: any;

  constructor(private http: HttpClient, private articleService: ArticleService) {
    // const N = APP_CONFIG.N,
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
  }

  ngOnInit() {

    this.articleService.getArticlesByAuthor().subscribe(data => {
      this.data = data;
      console.log(data.articles);
      console.log(data.links);
      // this.nodes = data.nodes;
      this.links = data.links;

      /** constructing the nodes array */
      for (let i = 0; i < data.articles.length; i++) {
        const n = new Node(data.articles[i]);
        n.linkCount = data.articles.length - i;
        this.nodes.push(n);
      }
      this.links = data.links;
    });
  }
}
