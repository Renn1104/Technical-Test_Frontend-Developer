import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { DetailComponent } from './pages/detail/detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kategori/:slug', component: CategoryComponent },
  { path: 'berita/:id', component: DetailComponent },
  { path: '**', redirectTo: '' }
];




