import { Component, OnInit, Input, HostListener } from '@angular/core';

import { IGallery } from '../../interfaces/gallery';

@Component({
  selector: 'ug-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() gallery: IGallery;

  constructor() {}

  ngOnInit() {}

}
