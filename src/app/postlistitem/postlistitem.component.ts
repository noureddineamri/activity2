import { Component,Input ,OnInit } from '@angular/core';
import {Post} from '../models/Post.model';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {
  @Input() post:Post ;

  constructor(private postservice:PostService) { }

  ngOnInit() {
  }
  onLike(){
    this.postservice.like(this.post);
  }
    onDislike(){
        this.postservice.unlike(this.post);
  }
    getColor(){
        if(this.post.loveIts<0){
            return 'red';}
        else if(this.post.loveIts>0){
            return'green';}
    }
    getDate(){
      const date=JSON.parse(this.post.created_at);
        return new Date(date);
    }

    onRemove(){
        this.postservice.removePost(this.post);
        this.postservice.emitPostSubject();
    }
}
