import { Component, Input, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import { IGallery } from '../../interfaces/gallery';
import { UnsplashService } from '../../services/unsplash.service';

@Component({
    selector: 'ug-gallery-container',
    templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
    pageNum:number = 1;
    query:string = '';
    show:boolean = false;

    @Input() searchTerm: Subject<string>;
    gallery: IGallery = null;

  constructor(private _unsplashService: UnsplashService) {}

  ngOnInit() {
      if (this.searchTerm){
        this.searchTerm.subscribe( query => {
          this.searchGallery(query);
        });
      } else {
        this.getRandoms(this.pageNum);
      }
  }

  getGallery(query:string, pages:number = 1){
    if (query){
      return this._unsplashService.getGallery(query,pages)
      .subscribe( data => {
        if (pages == 1) {
          this.gallery = data;
        } else {
          this.gallery.results = (this.gallery.results as Array<any>).concat(data.results);
        }
        this.show = ( data.total ) ? true : false;
      });
    }
    return this.getRandoms(1);
  }

  searchGallery(query:string) {
    this.query = query;
    this.pageNum = 1;
    return this.getGallery(this.query,1);
  }

  getPages(pages:number = 2){
    return (this.query) ? this.getGallery(this.query, pages) :
    this.getRandoms(pages);
  }

  getRandoms(pages:number = 1){
    return this._unsplashService.getRandoms(pages,30)
      .subscribe( data => {
        if (pages == 1){
          this.gallery = {
            total:30,
            total_pages:pages,
            results:data
          };
        } else {
          this.gallery = {
            total:30*pages,
            total_pages:pages,
            results: (this.gallery.results as Array<any>).concat(data)
          };
        }
        this.show = true;
      });
  }

  onScrollDown(){
    this.pageNum++;
    this.getPages(this.pageNum);
  }
}
