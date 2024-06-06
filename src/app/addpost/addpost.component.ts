import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['addpost.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class CreatePostComponent {
  postTitle: string = '';
  postContent: string = '';

  constructor(private blogService: BlogService) {}

  addNewPost() {
    const newPost = {
      id: Math.random(),
      title: this.postTitle,
      content: this.postContent
    };
    this.blogService.insertPost(newPost);
    this.postTitle = '';
    this.postContent = '';
  }
}
