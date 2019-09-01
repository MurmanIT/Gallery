import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ug-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  @Output() queryDone: EventEmitter<string> = new EventEmitter();

  constructor() {}
}
