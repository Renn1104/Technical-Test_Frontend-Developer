import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsService } from '../../core/services/news.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  headline: any;
  popularNews: any[] = [];
  recommendations: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadHeadline();
    this.loadPopular();
  }

  loadHeadline() {
    this.newsService.getLatest().subscribe(res => {
      this.headline = res.data.posts[0];
      this.recommendations = res.data.posts.slice(1, 9);
    });
  }

  loadPopular() {
    this.newsService.getPopular().subscribe(res => {
      this.popularNews = res.data.posts.slice(0, 3);
    });
  }
}
