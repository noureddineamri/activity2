import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostlistitemComponent } from './postlistitem/postlistitem.component';
import { HeaderComponent } from './header/header.component';
import {PostService} from './services/post.service';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { EditPostComponent } from './edit-post/edit-post.component';

const routes=[{path:'',component:PostlistComponent},{path:'edit',component:EditPostComponent}];
@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostlistitemComponent,
    HeaderComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
      ReactiveFormsModule,
      RouterModule.forRoot(routes)

  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
