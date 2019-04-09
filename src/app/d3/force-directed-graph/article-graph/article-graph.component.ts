import { Component, Input, ChangeDetectorRef, HostListener, ChangeDetectionStrategy, OnInit, AfterViewInit } from '@angular/core';
import { D3Service, ForceDirectedGraph } from '../../../d3';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-article-graph',
  templateUrl: './article-graph.component.html',
  styleUrls: ['./article-graph.component.css']
})
export class ArticleGraphComponent implements OnInit, AfterViewInit {
  @Input('nodes') nodes;
  @Input('links') links;
  graph: ForceDirectedGraph;
  private _options: { width, height } = { width: 800, height: 600 };
  public articleID: number;
  public showDetail = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.graph.initSimulation(this.options);
  }


  constructor(private d3Service: D3Service, private ref: ChangeDetectorRef) { }

  ngOnInit() {
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
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
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
