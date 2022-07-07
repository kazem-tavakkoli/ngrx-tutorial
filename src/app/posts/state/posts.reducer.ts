import { createReducer, on } from '@ngrx/store';
import {
  addPostSuccsess,
  deletePostSuccess,
  loadPostsSuccess,
  updatePostSuccess,
} from './posts.actions';
import { initialState, postsAdapter } from './posts.state';

const _postReduser = createReducer(
  initialState,
  on(addPostSuccsess, (state: any, action: any) => {
    return postsAdapter.addOne(action.post, state);
  }),
  on(updatePostSuccess, (state: any, action: any) => {
    return postsAdapter.updateOne(action.post, state);
  }),
  on(deletePostSuccess, (state: any, { id }) => {
    return postsAdapter.removeOne(id, state);
  }),
  on(loadPostsSuccess, (state: any, action: any) => {
    return postsAdapter.setAll(action.posts, state);
  })
);

export function postsReducer(state: any, action: any) {
  return _postReduser(state, action);
}

// const _postReduser = createReducer(
//   initialState,
//   on(addPostSuccsess, (state: any, action: any) => {
//     let post = { ...action.post };
//     return {
//       ...state,
//       posts: [...state.posts, post],
//     };
//   }),
//   on(updatePostSuccess, (state: any, action: any) => {
//     let updatePost = state.posts.map((post: Post) => {
//       return action.post.id === post.id ? action.post : post;
//     });
//     return {
//       ...state,
//       posts: updatePost,
//     };
//   }),
//   on(deletePostSuccess, (state: any, {id}) => {
//     let updatePost = state.posts.filter((post: Post) => {
//       return post.id != id ;
//     });
//     return {
//       ...state,
//       posts: updatePost,
//     };
//   }),
// on(loadPostsSuccess,(state:any,action:any)=>{
//   return {
//     ...state,
//     posts:action.posts
//   }

// })
// );
