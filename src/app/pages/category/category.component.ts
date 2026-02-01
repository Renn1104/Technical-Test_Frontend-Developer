import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { NewsService } from '../../core/services/news.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {

  category!: string;
  newsList: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = params['slug'];
      this.fetchNews();
    });
  }

  fetchNews() {
    this.newsService.getByCategory(this.category).subscribe(res => {
      this.newsList = res.data.posts;
    });
  }
}
