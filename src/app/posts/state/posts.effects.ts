import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {  exhaustMap, map, mergeMap } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/shared/shared.action';
import { addPost, addPostSuccsess, deletePost, deletePostSuccess, loadPosts, loadPostsSuccess, updatePost, updatePostSuccess } from './posts.actions';

@Injectable()
export class PostsEffect {
  constructor(
    private actions$: Actions,
    private postsService: PostsService,
    private store: Store<AppState>
  ) {}
  loadposts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts),
      mergeMap((action) => {
        return this.postsService.getPosts().pipe(
          map((posts) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return loadPostsSuccess({ posts });
          }),
        );
      })
    );
  });

  addPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addPost),
      exhaustMap((action) => {
        return this.postsService.addPost(action.post).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const post = { ...action.post, id: data.name };
            return addPostSuccsess({post});
          }),
        );
      }),
    );
  })

  updatePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updatePost),
      exhaustMap((action) => {
        return this.postsService.updatePost(action.post).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return updatePostSuccess({post:action.post});
          }),
        );
      }),
    );
  })

  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deletePost),
      exhaustMap((action) => {
        return this.postsService.deletePost(action.id).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return deletePostSuccess({id:action.id});
          }),
        );
      }),
    );
  })
}
