import { Injectable } from '@angular/core';

export interface blogInterface {
  title: string,
  content: string
}

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  blogs: blogInterface[] = [
    {title: 'Blog1', content: 'The first blog content'},
    {title: 'Blog2', content: 'The second blog content'},
    {title: 'Blog3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, quas.'},
    {title: 'Blog4', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {title: 'Blog', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
  ];

  getBlogs() {
    return this.blogs;
  }

  getBlogById(id: number) {
    return this.blogs[id];
  }

  removeBlogById(blogId:number) {
    return this.blogs = this.blogs.filter((blog, id) => id !== blogId);
  }

  updateBlog(blogId: number, newBlog: blogInterface) {
    this.blogs[blogId] = newBlog;
    return this.blogs;
  }

  addBlog(blog: blogInterface) {
    return this.blogs.push(blog);
  }

  constructor() { }

}
