import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getCurrentRoute } from 'src/app/store/router/router.selector';
import { postsAdapter, PostsState } from '../state/posts.state';

export const POSTS_STATE_NAME = 'posts';

const getPostsState = createFeatureSelector<PostsState>(POSTS_STATE_NAME);
export const postsSelectors = postsAdapter.getSelectors();

export const getPosts = createSelector(getPostsState, postsSelectors.selectAll);
export const getPostEntities = createSelector(getPostsState, postsSelectors.selectEntities);

export const getPostById = createSelector(
  getPostEntities,
  getCurrentRoute,
  (posts: any, route: any) => {
    return posts ? posts[route.params['id']] : null;
  }
);





// export const POSTS_STATE_NAME = 'posts';

// const getPostsState = createFeatureSelector<PostsState>(POSTS_STATE_NAME);

// export const getPosts = createSelector(getPostsState, (state) => {
//   return state.posts;
// });

// export const getPostById = createSelector(
//   getPosts,
//   getCurrentRoute,
//   (posts: any, route: any) => {
//     return posts ? posts.find((post: any) => post.id === route.params['id']) : null;
//   }
// );

