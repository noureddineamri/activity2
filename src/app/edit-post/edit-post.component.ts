import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PostService} from '../services/post.service';
import {Post} from '../models/Post.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  formPost:FormGroup;

  constructor(private formBuilder:FormBuilder ,private router:Router,private postService:PostService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.formPost=this.formBuilder.group({
        title:['',Validators.required],
        content:['',Validators.required]
    });
  }

  onSubmitForm(){
    const title=this.formPost.get('title').value;
    const content=this.formPost.get('content').value;
    const date = JSON.stringify( new Date );
    const post=new Post(title,content,0,date);
    console.log(post);
    this.postService.AddPost(post);
    this.router.navigate(['']);
  }

}
