import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getCurrentRoute } from 'src/app/store/router/router.selector';
import { PostsState } from '../state/posts.state';

export const POSTS_STSTE_NAME = 'posts';

const getPostsState = createFeatureSelector<PostsState>(POSTS_STSTE_NAME);

export const getPosts = createSelector(getPostsState, (starte) => {
  return starte.posts;
});

export const getPostById = createSelector(
  getPosts,
  getCurrentRoute,
  (posts: any, route: any) => {
    return posts ? posts.find((post: any) => post.id === route.params['id']) : null;
  }
);
