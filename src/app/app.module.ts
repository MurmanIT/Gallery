import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent as GalleryContainer } from './containers/gallery/gallery.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SearchComponent } from './components/search/search.component';
import { UnsplashService } from './services/unsplash.service';
import { PhotoComponent } from './components/photo/photo.component';



@NgModule({
  declarations: [
    AppComponent,
    GalleryContainer,
    GalleryComponent,
    SearchComponent,
    PhotoComponent,
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    AppRoutingModule
  ],
  providers: [
    UnsplashService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
