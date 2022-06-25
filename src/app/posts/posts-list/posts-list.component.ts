import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/state/app.state';
import { deletePost } from '../state/posts.actions';
import { getPosts } from '../state/posts.selector';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts! : Observable<Post[]>;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts)
  }

  delete(id:string) {
    if(id) {
      if(confirm('آیا مایل به حذف می باشید')) {
        console.log('جذف شود');
        
      }
      this.store.dispatch(deletePost({id}))
    }
  }
}
