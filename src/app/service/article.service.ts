import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticlesByAuthor() {
    return this.http.get(
      "http://localhost:3900/api/users/get_author?author=" + "Alex"
    );
  }
}
