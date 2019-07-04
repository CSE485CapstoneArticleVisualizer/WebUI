import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  @Input('article') articleData;
  @Output() closeDetailEvent = new EventEmitter<boolean>();

  public article: any;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.article = this.articleData;
  }

  closeDetailDiv() {
    this.closeDetailEvent.emit(false);
  }
}
