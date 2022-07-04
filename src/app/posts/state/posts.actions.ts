import { createAction, props } from "@ngrx/store"
import { Post } from "src/app/models/posts.model"

export const ADD_POST_ACTION = '[posts page] add post'
export const ADD_POST_SUCCESS = '[posts page] add post success'
export const EDIT_POST_ACTION = '[posts page] edit post'
export const EDIT_POST_SUCCESS= '[posts psge] edit post success'
export const DELETE_POST_ACTION = '[posts page] delete post'
export const DELETE_POST_SUCCSESS = '[posts page] delete post success'
export const LOAD_POSTS= '[posts page] load posts'
export const LOAD_POSTS_SUCCESS = '[posts page] load posts success'

export const addPost = createAction(ADD_POST_ACTION,props<{post:Post}>())

export const addPostSuccsess = createAction(ADD_POST_SUCCESS,props<{post:Post}>())

export const updatePost = createAction(EDIT_POST_ACTION,props<{post:Post}>())
export const updatePostSuccess = createAction(EDIT_POST_SUCCESS,props<{post:Post}>())

export const deletePost = createAction(DELETE_POST_ACTION,props<{id:string}>())

export const deletePostSuccess = createAction(DELETE_POST_SUCCSESS,props<{id:string}>())

export const loadPosts = createAction(LOAD_POSTS)

export const loadPostsSuccess = createAction(LOAD_POSTS_SUCCESS,props<{posts:Post[]}>())