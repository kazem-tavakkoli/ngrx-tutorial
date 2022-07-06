import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { updatePost } from '../state/posts.actions';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit,OnDestroy {
  post!:Post;
  postForm! :FormGroup;
  postSubescription!:Subscription
  

  constructor(private store:Store<AppState>,private router:Router) { }

  ngOnInit(): void {
    this.createForm();
    this.postSubescription = this.store.select(getPostById).subscribe(post => {
      this.post = post;
      if(post){
        this.postForm.patchValue({
          title: post.title,
          description: post.description
        })
      }
    });

  }

createForm(){
  this.postForm = new FormGroup({
    title: new FormControl(null,[Validators.required,Validators.minLength(1)]),
    description: new FormControl(null,[Validators.required,Validators.minLength(2)]),
  })
}

onSubmit(){
  if (this.postForm.invalid) {
    this.postForm.markAllAsTouched();
    return;
  }
  const title = this.postForm.value.title;
  const description = this.postForm.value.description;
  const post:Post = {
    id:this.post.id,
    title,
    description
  }
   this.store.dispatch(updatePost({post}));
   this.router.navigate(['posts']);
}

ngOnDestroy(){
  if(this.postSubescription){
  this.postSubescription.unsubscribe();
  }
}




showDescriptionErrors(){
  const descriptionForm = this.postForm.get('description');
  if((descriptionForm?.touched) && (!descriptionForm?.valid)) {
    if(descriptionForm?.errors?.hasOwnProperty('required')){
     return 'Description is required'
    }
    else if (descriptionForm?.errors?.hasOwnProperty('minlength')){
      return 'Description should be of minimum 10 characters length'
     }  
  }
  return null
}
}
