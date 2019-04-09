import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { Article } from '../shared/classes';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  @Input('articleID') articleID;
  @Output() closeDetailEvent = new EventEmitter<boolean>();

  public article: Article;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    console.log(this.articleID);
    this.article = this.articleService.getArticleInfoByID(this.articleID);
    // this.articleService.getArticleInfoByID(this.articleID).subscribe(data => {
    //   console.log(data);
    // });
  }

  closeDetailDiv() {
    this.closeDetailEvent.emit(false);
  }
}
