import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private postCollection: Post[] = [];

  constructor() { }

  fetchPosts(): Post[] {
    return this.postCollection;
  }

  insertPost(newPost: Post): void {
    this.postCollection.push(newPost);
  }

  removePost(postId: number): void {
    this.postCollection = this.postCollection.filter(post => post.id !== postId);
  }
}
