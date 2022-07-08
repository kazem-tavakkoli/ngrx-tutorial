import { createEntityAdapter, EntityState } from "@ngrx/entity"
import { Post } from "src/app/models/posts.model"

export interface PostsState extends EntityState<Post> {
    count:number, // میتوان یه سری آیتم های لازم را اضافه کرد
} 
export const postsAdapter = createEntityAdapter<Post>({
    //selectId: (post: Post) => post.id, در اینجا اگر کلید چیزی به غیر از ای دی بود را میتوان اینجا مشخص کرد
    sortComparer:sortByName // در اینجا اگر میخوایم بر اساس یکی از کلید های موجود در مدل برای مرتب سازی بر اساس آن کلید استفاده کنیم
});
export const initialState: PostsState = postsAdapter.getInitialState({
    count:0,
});


export function sortByName(a: Post, b: Post): number {
    //return a.title.localeCompare(b.title);  مرتب سازی سعودی
    // کد زیر مرتب سازی نزولی
    const compare = a.title.localeCompare(b.title);
    if(compare>0){
        return -1;
    }
    if(compare<0){
        return 1;
    }
    return compare
  }
