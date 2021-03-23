import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  data = { title: "Title", content: "Content", image_path: "Path" };
  id = "null";

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() { }

  ngDoCheck() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id != this.id) {
      this.id = id;
      this.http.get<{title: string, content: string, image_path: string}>(`./../../assets/articles/${id}.txt`).subscribe((data) => {
        this.data = data;
      })
    }
  } 
}
