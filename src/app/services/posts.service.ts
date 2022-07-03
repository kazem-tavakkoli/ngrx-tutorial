import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Post } from "../models/posts.model";

@Injectable({
    providedIn: "root"
})
export class PostsService {
    constructor(private http:HttpClient) { }
    getPosts():Observable<Post[]> {
        return this.http.get<Post[]>("https://vue-completecourse.firebaseio.com/posts.json")
        .pipe(map((response:any) => {
            const posts :Post[] = [];
            for(const key in response) {
                if(response.hasOwnProperty(key)) {
                    posts.push({
                        ...response[key],
                        id: key
                    });
                }
            }
            return posts;
        }));
    }
}