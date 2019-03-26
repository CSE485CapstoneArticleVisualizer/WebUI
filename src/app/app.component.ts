import { Component, ViewChild, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import APP_CONFIG from "./app.config";
import { Node, Link } from "./d3";

import { ArticleService } from "./service/article.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  @ViewChild("sidenav") sidenav;

  nodes = {};
  links: Link[] = [];

  data: any;

  constructor(
    private http: HttpClient,
    private articleService: ArticleService
  ) {
    const N = APP_CONFIG.N,
      getIndex = number => number - 1;
    /** constructing the nodes array */
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

    this.getJSON().subscribe(data => {
      // this.data = data;
      // console.log(this.data);
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

    this.articleService.getArticlesByAuthor().subscribe(data => {
      this.data = data;
      const articles = data["articles"];
      const links = data["links"];

      console.log("Articles: ", articles);
      console.log("Links: ", links);

      for (let i = 0; i < articles.length; i++) {
        this.nodes[`${articles[i]}`] = new Node(articles[i]);
      }
      console.log("Nodes:", this.nodes);

      for (let j = 0; j < links.length; j++) {
        console.log(links[j]["source"]);
        console.log(links[j]["target"]);

        let sourceNode = this.nodes[links[j]["source"]];
        let targetNode = this.nodes[links[j]["target"]];
        sourceNode.linkCount++;
        targetNode.linkCount++;
        console.log(sourceNode);
        console.log(targetNode);
        this.links.push(new Link(sourceNode, targetNode));
      }

      console.log("Links:", this.links);
    });
  }

  private getJSON(): Observable<any> {
    return this.http.get("./assets/miserables.json");
  }
}
