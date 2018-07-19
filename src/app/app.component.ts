import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  postTitle = '';
  constructor(private httpClient: HttpClient) {}

  getPost() {
    this.httpClient.get('/posts/1').subscribe(({title}: {title: string}) => {
      this.postTitle = title;
    });
  }
}
