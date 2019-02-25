import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {PostService} from '../services/post.service';
import {Post} from '../models/Post.model';


@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit,OnDestroy {

    posts:Post[];
    postSubscription:Subscription;

    constructor(private postservice:PostService){}


  ngOnInit() {
      this.postSubscription=this.postservice.postSubject.subscribe((postsel)=>{
          this.posts=postsel;
      });
      this.posts=this.postservice.getPosts();
      this.postservice.emitPostSubject();


  }
  ngOnDestroy(){
        this.postSubscription.unsubscribe();
  }

}
