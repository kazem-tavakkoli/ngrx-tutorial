import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { updatePost } from '../state/posts.actions';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post!:Post;
  postForm! :FormGroup;

  constructor(private route:ActivatedRoute,private store:Store<AppState>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      const id = params.get('id');
      this.store.select(getPostById,{id}).subscribe(data=>{
        this.post = data;
        this.createForm()
      })

      console.log(this.post);
      
    })
  }

createForm(){
  this.postForm = new FormGroup({
    title: new FormControl(this.post.title,[Validators.required,Validators.minLength(6)]),
    description: new FormControl(this.post.description,[Validators.required,Validators.minLength(6)]),
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
