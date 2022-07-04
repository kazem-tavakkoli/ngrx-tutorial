import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { addPostSuccsess,deletePostSuccess,loadPostsSuccess, updatePost, updatePostSuccess } from './posts.actions';
import { initialState } from './posts.state';

const _postReduser = createReducer(
  initialState,
  on(addPostSuccsess, (state: any, action: any) => {
    let post = { ...action.post };
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePostSuccess, (state: any, action: any) => {
    let updatePost = state.posts.map((post: Post) => {
      return action.post.id === post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatePost,
    };
  }),
  on(deletePostSuccess, (state: any, {id}) => {
    let updatePost = state.posts.filter((post: Post) => {
      return post.id != id ;
    });
    return {
      ...state,
      posts: updatePost,
    };
  }),
on(loadPostsSuccess,(state:any,action:any)=>{
  return {
    ...state,
    posts:action.posts
  }

})
);

export function postsReducer(state: any, action: any) {
  return _postReduser(state, action);
}
