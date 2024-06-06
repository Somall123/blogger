import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListofpostsComponent } from './listofposts/listofposts.component';
import { CreatePostComponent } from "./addpost/addpost.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, AppComponent, ListofpostsComponent, CreatePostComponent]
})
export class AppComponent {
  title = 'quiz6';
}
