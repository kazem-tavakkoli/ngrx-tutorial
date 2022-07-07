import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-singel-post',
  templateUrl: './singel-post.component.html',
  styleUrls: ['./singel-post.component.css']
})
export class SingelPostComponent implements OnInit {

  constructor(private store:Store) { }

  postItem$!:Observable<Post>

  ngOnInit(): void {
    this.postItem$ = this.store.select(getPostById);
  }

}
