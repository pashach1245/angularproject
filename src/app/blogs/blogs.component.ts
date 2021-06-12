import { Component, OnInit } from '@angular/core';
import {blogInterface, BlogsService} from "../blogs.service";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogsList: blogInterface[] = [];
  newTitle:string = '';
  newContent:string = '';
  showModal:boolean = false;

  constructor(
    private blogsService: BlogsService
  ) { }

  ngOnInit(): void {
    this.blogsList = this.blogsService.getBlogs();
  }

  toogleShowModal() {
    this.showModal = !this.showModal;
  }

  addNewBlog(blog: blogInterface) {
    this.blogsService.addBlog(blog);
    this.showModal = !this.showModal;
    this.newTitle = '';
    this.newContent = '';
  }
}
