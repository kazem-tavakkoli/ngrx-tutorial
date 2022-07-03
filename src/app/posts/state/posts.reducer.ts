import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { addPost, deletePost,loadPostsSuccess, updatePost } from './posts.actions';
import { initialState } from './posts.state';

const _postReduser = createReducer(
  initialState,
  on(addPost, (state: any, action: any) => {
    let post = { ...action.post };
    post.id = (state.posts.length + 1).toString();
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePost, (state: any, action: any) => {
    let updatePost = state.posts.map((post: Post) => {
      return action.post.id === post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatePost,
    };
  }),
  on(deletePost, (state: any, {id}) => {
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
