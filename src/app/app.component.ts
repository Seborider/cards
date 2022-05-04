import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageurl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'Saw this awesome tree during my hike today'
    },
    {
      title: 'Snowy Mountain',
      imageurl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy moutain'
    },
    {
      title: 'Mountain Biking',
      imageurl: 'assets/biking.jpeg',
      username: 'biking12222',
      content: 'I did some biking today'
    }
  ]
}
