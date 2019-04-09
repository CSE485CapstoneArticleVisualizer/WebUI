import { Component, Input, ChangeDetectorRef, HostListener, ChangeDetectionStrategy, OnInit, AfterViewInit } from '@angular/core';
import { D3Service, ForceDirectedGraph } from '../../../d3';
import { ArticleService } from './../../../service/article.service';
import APP_CONFIG from './../../../app.config';
import { Node, Link } from './../../../d3';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-article-graph',
  templateUrl: './article-graph.component.html',
  styleUrls: ['./article-graph.component.css']
})
export class ArticleGraphComponent implements OnInit, AfterViewInit {
  nodes: Node[] = [];
  links: Link[] = [];
  graph: ForceDirectedGraph;
  private _options: { width, height } = { width: 800, height: 600 };
  public articleID: number;
  public showDetail = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.graph.initSimulation(this.options);
  }


  constructor(
    private d3Service: D3Service,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private location: Location,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    const journal = this.route.snapshot.paramMap.get('journal');
    console.log(journal);
    this.articleService.getArticlesByAuthor().subscribe(data => {
      APP_CONFIG.N = data.articles.length;
      console.log(data.articles);
      console.log(data.links);
      // this.nodes = data.nodes;
      this.links = data.links;

      /** constructing the nodes array */
      for (let i = 0; i < data.articles.length; i++) {
        const n = new Node(data.articles[i]);
        // n.linkCount = data.articles.length - i;
        this.nodes.push(n);
      }

      console.log(this.nodes);

      for (let j = 0; j < data.links.length; j++) {
        // console.log(data.links[j].source);
        // console.log(data.links[j].target);

        const sourceNode = this.nodes.find(n => n.id === data.links[j].source);
        const targetNode = this.nodes.find(n => n.id === data.links[j].target);
        sourceNode.linkCount++;
        targetNode.linkCount++;
        // console.log(sourceNode);
        // console.log(targetNode);
        // this.links.push(new Link(sourceNode, targetNode));
      }

      this.links = data.links;

      /** Receiving an initialized simulated graph from our custom d3 service */
      this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);

      /** Binding change detection check on each tick
       * This along with an onPush change detection strategy should enforce checking only when relevant!
       * This improves scripting computation duration in a couple of tests I've made, consistently.
       * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
       */
      this.graph.ticker.subscribe((d) => {
        this.ref.markForCheck();
      });

      this.graph.initSimulation(this.options);
    });
  }

  ngAfterViewInit() {
    // this.graph.initSimulation(this.options);
  }

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  getArticleInfoByID(id: number) {
    this.articleID = id;
    this.showDetail = true;
  }

  closeDetailDiv($event) {
    this.showDetail = $event;
  }
}
