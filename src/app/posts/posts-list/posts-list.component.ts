import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { deletePost, loadPosts } from '../state/posts.actions';
import { getCount, getPosts } from '../state/posts.selector';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts$! : Observable<Post[]>;
  count$! : Observable<number>;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
    this.count$ = this.store.select(getCount);
    this.store.dispatch(loadPosts());
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
