import { Post } from "src/app/models/posts.model"

export interface PostsState {
    posts:Post[]
} 

export const initialState:PostsState = {
    posts:[
        {id:'1',title:'sampel title 1',description:'Sampel description 1'},
        {id:'2',title:'sampel title 2',description:'Sampel description 2'}
    ]
}