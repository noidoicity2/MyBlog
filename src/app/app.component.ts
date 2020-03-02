import { Component } from '@angular/core';
import {PostService} from './services/post.service';
import {Post} from './services/Post';
@Component({
  selector: 'app-root',
  template: `<h1>Welcome</h1>
  <div class='container'>
  <ul>
    <li *ngFor="let post of posts">
      <h3>{{post.title}}</h3>
      <p>{{post.body}}</p>
    </li>
  </ul>
  </div>
  <hr>
`,

  providers:[PostService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[];
  constructor(private _postService:PostService){
     _postService.getPosts().then(
        ps => {this.posts = ps}
     );
  }
}

