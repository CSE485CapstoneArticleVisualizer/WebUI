import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticlesByAuthor(): Observable<any> {
    return this.http.get('http://localhost:3900/api/users/get_author?author=' + 'Alex');
  }
}
