import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogInfoComponent } from './blog-info/blog-info.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';



@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogInfoComponent,
    SingleBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: BlogsComponent},
      {path: 'blogs/:blogId', component: BlogInfoComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
