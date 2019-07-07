import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../shared/classes';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {

  }

  /**
   * Returns articles that contains a specific name
   * @param name
   */
  getArticlesByAuthor(name: String): Observable<any> {
    return this.http.get('http://localhost:3900/api/data/get_author?author=' + name);
  }

  /**
   * Returns the information of an article by passing in its id
   * @param id 
   */
  getArticleInfoByID(id: number): Observable<any> {
    // return this.article;
    return this.http.get('http://localhost:3900/api/data/get_article_by_id?article_id=' + id);
  }
}
