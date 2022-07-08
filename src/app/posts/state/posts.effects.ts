import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { RouterNavigatedAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { exhaustMap, filter, map, mergeMap, of, switchMap, withLatestFrom } from 'rxjs';
import { dummyAction } from 'src/app/auth/state/auth.actions';
import { Post } from 'src/app/models/posts.model';
import { PostsService } from 'src/app/services/posts.service';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/shared/shared.action';
import {
  addPost,
  addPostSuccsess,
  deletePost,
  deletePostSuccess,
  loadPosts,
  loadPostsSuccess,
  updatePost,
  updatePostSuccess,
} from './posts.actions';
import { getPosts } from './posts.selector';

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
      withLatestFrom(this.store.select(getPosts)), // اگر لیست از قبل وجود داشت به سرور درخواست مجدد ارسال نشود
      mergeMap(([action,posts]) => {      // mergeMap((action) => {  اگر قرار نبود لیست چک شود و درخواست حتما باید به سرور ارسال میشد
        if(!posts.length ||posts.length === 1) {
          return this.postsService.getPosts().pipe(
            map((posts) => {
              this.store.dispatch(setLoadingSpinner({ status: false }));
              return loadPostsSuccess({ posts });
            })
          );
        }
        return of(dummyAction()); // چون حتما باید یه اکشن برگشت داده شود یه اکشن الکی ساختیم که هیچ کارایی ندارد تا از خطا جلوگیری شود
       
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
            return addPostSuccsess({ post });
          })
        );
      })
    );
  });

  updatePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updatePost),
      exhaustMap((action) => {
        return this.postsService.updatePost(action.post).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const updatePost:Update<Post> ={
              id:action.post.id,
              changes:{
                ...action.post
              }
            }
            return updatePostSuccess({ post: updatePost });
          })
        );
      })
    );
  });

  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deletePost),
      exhaustMap((action) => {
        return this.postsService.deletePost(action.id).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return deletePostSuccess({ id: action.id });
          })
        );
      })
    );
  });

  getSingelPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/posts/detail');
      }),
      map((r: any) => {
        return r.payload.routerState['params']['id'];
      }),
      withLatestFrom(this.store.select(getPosts)),//برای اینکه چک کند اگر این آیتم در استیت وجود داشت به سرور درخواست ارسال نکند
      switchMap(([id,posts]) => {  //switchMap((id)=> {  اگر قرار نبود لیست چک شود و درخواست حتما باید به سرور ارسال میشد
        if(!posts.length){
          return this.postsService.getPostById(id).pipe(
            map((post) => {
              const postData = [{ ...post, id: id }];
              return loadPostsSuccess({ posts: postData });
            })
          );
        }
        return of(dummyAction()) // چون حتما باید یه اکشن برگشت داده شود یه اکشن الکی ساختیم که هیچ کارایی ندارد تا از خطا جلوگیری شود
      })
    );
  });
}
