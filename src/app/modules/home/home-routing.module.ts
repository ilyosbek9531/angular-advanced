import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { SingleNewsComponent } from './pages/single-news/single-news.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'news', component: NewsComponent },
    { path: 'news/:id', component: SingleNewsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
