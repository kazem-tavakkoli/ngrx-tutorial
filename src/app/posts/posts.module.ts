import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { PostsEffect } from "./state/posts.effects";
import { postsReducer } from "./state/posts.reducer";
import { POSTS_STSTE_NAME } from "./state/posts.selector";

const routes:Routes =[ 
    {
        path:'',
        component:PostsListComponent,
        children:[
          {path:'add',component:AddPostComponent},
          {path:'edit/:id',component:EditPostComponent}, 
        ]
      }
]

@NgModule({
    declarations:[
        PostsListComponent,
        AddPostComponent,
        EditPostComponent
    ],
    imports:[
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      StoreModule.forFeature(POSTS_STSTE_NAME,postsReducer),
      RouterModule.forChild(routes),
      EffectsModule.forFeature([PostsEffect])
    ]

})
export class PostsModule{

}