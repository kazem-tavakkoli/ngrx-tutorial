import { createAction, props } from "@ngrx/store"
import { Post } from "src/app/models/posts.model"

export const ADD_POST_SCTION = '[posts page] add post'
export const EDIT_POST_SCTION = '[posts page] edit post'
export const DELETE_POST_SCTION = '[posts page] delete post'

export const addPost = createAction(ADD_POST_SCTION,props<{post:Post}>())

export const updatePost = createAction(EDIT_POST_SCTION,props<{post:Post}>())

export const deletePost = createAction(DELETE_POST_SCTION,props<{id:string}>())