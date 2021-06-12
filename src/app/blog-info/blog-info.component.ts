import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {BlogsService} from "../blogs.service";
import {blogInterface} from "../blogs.service";

@Component({
  selector: 'app-blog-info',
  templateUrl: './blog-info.component.html',
  styleUrls: ['./blog-info.component.css']
})
export class BlogInfoComponent implements OnInit {
  blog: blogInterface | null = null;
  title: string = '';
  content: string = '';
  blogId: number = 0;
  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.blogId = Number(params.get('blogId'));
      this.blog = this.blogsService.getBlogById(this.blogId);
      this.title = this.blog.title;
      this.content = this.blog.content;
    });
  }

  updateBlog(blogId: number, newBlog: blogInterface) {
    this.blogsService.updateBlog(blogId, newBlog);
  }

  removeBlog(id:number) {
    if (confirm('Удалить блог?')) {
      this.blogsService.removeBlogById(id);
    }
  }
}
