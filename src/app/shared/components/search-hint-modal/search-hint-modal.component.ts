import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-hint-modal',
  templateUrl: './search-hint-modal.component.html',
  styleUrls: ['./search-hint-modal.component.scss']
})
export class SearchHintModalComponent implements OnInit {

  constructor() { }

  @ViewChild('searchHintTemplate')
  searchHintTemplate: ElementRef<any>

  @Output('modalCloseEvent')
  modalCloseEvent = new EventEmitter()

  ngOnInit(): void {
  }

  handleCloseEvent() {
    this.modalCloseEvent.emit(1)
  }

}
