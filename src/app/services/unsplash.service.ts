import { Injectable } from '@angular/core';
import { IGallery } from '../interfaces/gallery';
import Unsplash, {toJson} from 'unsplash-js';
import { Observable, from, throwError } from "rxjs";


@Injectable()
export class UnsplashService {

  private unsplash;

  constructor() {
    this.unsplash = new Unsplash({
      applicationId: "0a79547583d865bfae1ca71593b7bc67ed93da82ebbea36133ba36f1b9834b52",
      secret: "99aee83ff404b56afb883a790931968da91fd9adde30462da06dab8bd6c069fb",
      callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
    });
  }

  getGallery( term:string, pages:number = 1, perPages:number = 10 ): Observable<IGallery> {
    return from(this.unsplash.search.collections(term,pages,perPages).then(toJson));
  }

  getRandoms(pages:number = 1, perPages:number = 10):Observable<IGallery> {
    return from(this.unsplash.collections.listCollections(pages,perPages,'popular').then(toJson));
  }
}
