import {Component, Input, OnInit} from '@angular/core';
import {blogInterface} from "../blogs.service";

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {
  @Input() blog?: blogInterface;
  @Input() blogId?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
