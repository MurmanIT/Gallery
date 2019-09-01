import { Component, Input, OnInit } from '@angular/core';
import { UnsplashService } from '../../services/unsplash.service';
import { IPhoto } from '../../interfaces/photo';

@Component({
  selector: 'ug-photo',
  templateUrl: './photo.component.html'
})

export class PhotoComponent implements OnInit {

  @Input() url: string;
  width: number = 400;
  height: number = 400;

  photo: IPhoto;
  show: boolean = false;

  constructor() { }

  ngOnInit() {
    this.photo = {src:this.url || ''};
    this.show = true;
  }
}
