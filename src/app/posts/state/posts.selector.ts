import { createFeatureSelector, createSelector } from "@ngrx/store";
import {PostsState} from '../state/posts.state'

export const POSTS_STSTE_NAME = 'posts'

const getPostsState = createFeatureSelector<PostsState>(POSTS_STSTE_NAME);

export const getPosts = createSelector(getPostsState,starte=>{
    return starte.posts;
})

export const getPostById = createSelector(getPostsState,(starte:any,props:any)=>{
    return starte.posts.find((post:any)=> post.id === props.id);
})