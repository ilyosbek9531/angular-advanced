import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.scss']
})
export class SingleNewsComponent {
  constructor(private router: Router) {
    console.log('this', this.router)
  }
}
