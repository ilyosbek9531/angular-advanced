import { NgModule } from '@angular/core';


import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { TopProductsComponent } from './components/top-products/top-products.component';
import { NewsComponent } from './pages/news/news.component';
import { SingleNewsComponent } from './pages/single-news/single-news.component';



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    TopProductsComponent,
    NewsComponent,
    SingleNewsComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
