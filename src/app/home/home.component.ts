import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from './../service/article.service';
import APP_CONFIG from './../app.config';
import { Node, Link } from './../d3';
import { SUB_OPTIONS } from '../shared/data';
import { Subject } from '../shared/classes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  areaNodes: Node[] = [];
  categoryNodes: Node[] = [];
  journalNodes: Node[] = [];
  articleNodes: Node[] = [];

  areaLinks: Link[] = [];
  categoryLinks: Link[] = [];
  journalLinks: Link[] = [];
  articleLinks: Link[] = [];

  sub = SUB_OPTIONS.slice(1);

  selected_area: Subject;
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
      this.areaNodes.push(newNode);
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.areaNodes[getIndex(i)].linkCount++;
        this.areaNodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.areaLinks.push(new Link(i, i * m));
      }
    }
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

  getAreaEvent($event) {
    this.selected_area = this.sub.find(s => s.area === $event);
    this.selected_area.category = this.selected_area.category.slice(1);
    APP_CONFIG.N = this.selected_area.category.length;
    const N = APP_CONFIG.N,
      getIndex = number => number - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      const newNode = new Node(i);
      newNode.name = this.selected_area.category[i - 1];
      this.categoryNodes.push(newNode);
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.categoryNodes[getIndex(i)].linkCount++;
        this.categoryNodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.categoryLinks.push(new Link(i, i * m));
      }
    }
  }
}
