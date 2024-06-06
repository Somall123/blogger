import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../blog.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './listofposts.component.html',
  styleUrls: ['./listofposts.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ListofpostsComponent implements OnInit {
  postCollection: Post[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postCollection = this.blogService.fetchPosts();
  }

  deletePost(postId: number): void {
    this.blogService.removePost(postId);
    this.loadPosts();
  }
}
