import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VisComponent } from './vis/vis.component';
import { AreaGraphComponent } from './d3/force-directed-graph/area-graph/area-graph.component';
import { CategoryGraphComponent } from './d3/force-directed-graph/category-graph/category-graph.component';
import { JournalGraphComponent } from './d3/force-directed-graph/journal-graph/journal-graph.component';
import { ArticleGraphComponent } from './d3/force-directed-graph/article-graph/article-graph.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'area', component: AreaGraphComponent },
  { path: ':area/category', component: CategoryGraphComponent },
  { path: ':category/journal', component: JournalGraphComponent },
  { path: ':journal/article', component: ArticleGraphComponent },
  // { path: 'vis', component: VisComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
