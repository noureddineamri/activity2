import { Injectable } from '@angular/core';
import {Post} from '../models/Post.model';
import {Subject} from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    private posts:Post[]=[];
    postSubject=new Subject<Post[]>();

  constructor() {
  }
  emitPostSubject(){
      this.postSubject.next(this.posts);
  }
  savePosts(){
      firebase.database().ref('/posts').set(this.posts);
  }

  like(post:Post){
      const indexOfPostToLike=this.posts.findIndex((postel)=>{
          if(post==postel){
              return true;
          }
      });
      this.posts[+indexOfPostToLike].loveIts++;
      this.savePosts();
      this.emitPostSubject();
  }
  unlike(post:Post){
      const indexOfPostToUnLike=this.posts.findIndex((postel)=>{
          if(post==postel){
              return true;
          }
      });
      this.posts[+indexOfPostToUnLike].loveIts--;
      this.savePosts();
      this.emitPostSubject();
  }
  removePost(post:Post){
      const indexOfPostToRemove=this.posts.findIndex((postel)=>{
          if(post==postel){
              return true;
          }
      });
      this.posts.splice(indexOfPostToRemove,1);
      this.savePosts();
      this.emitPostSubject();
  }
  AddPost(post:Post){
      this.posts.push(post);
      this.savePosts();
      this.emitPostSubject();
  }

  getPosts(){
      firebase.database().ref('/posts').on('value',(data)=>{
          this.posts = data.val() ? data.val() : [];
          this.emitPostSubject();
      });
  }


}
