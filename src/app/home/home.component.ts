import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from './../service/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private articleService: ArticleService) {

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
