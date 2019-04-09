import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from './../service/article.service';
import APP_CONFIG from './../app.config';
import { Node, Link } from './../d3';
import { SUB_OPTIONS } from '../shared/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nodes: Node[] = [];
  links: Link[] = [];

  data: any;
  sub = SUB_OPTIONS.slice(1);

  selected_area: string;
  selected_category: string;
  selected_journal: string;

  constructor(private http: HttpClient, private articleService: ArticleService) {
    console.log(this.sub);
    APP_CONFIG.N = this.sub.length;
    const N = APP_CONFIG.N,
      getIndex = number => number - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      const newNode = new Node(i);
      newNode.name = this.sub[i - 1].area;
      this.nodes.push(newNode);
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

    this.data = this.nodes;
  }

  ngOnInit() {

    // this.articleService.getArticlesByAuthor().subscribe(data => {
    //   this.data = data;
    //   APP_CONFIG.N = data.articles.length;
    //   console.log(data.articles);
    //   console.log(data.links);
    //   // this.nodes = data.nodes;
    //   this.links = data.links;

    //   /** constructing the nodes array */
    //   for (let i = 0; i < data.articles.length; i++) {
    //     const n = new Node(data.articles[i]);
    //     // n.linkCount = data.articles.length - i;
    //     this.nodes.push(n);
    //   }

    //   console.log(this.nodes);

    //   for (let j = 0; j < data.links.length; j++) {
    //     // console.log(data.links[j].source);
    //     // console.log(data.links[j].target);

    //     const sourceNode = this.nodes.find(n => n.id === data.links[j].source);
    //     const targetNode = this.nodes.find(n => n.id === data.links[j].target);
    //     sourceNode.linkCount++;
    //     targetNode.linkCount++;
    //     // console.log(sourceNode);
    //     // console.log(targetNode);
    //     // this.links.push(new Link(sourceNode, targetNode));
    //   }

    //   this.links = data.links;
    // });
  }
}
