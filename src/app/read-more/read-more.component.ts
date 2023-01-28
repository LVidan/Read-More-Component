import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html'
})
export class ReadMoreComponent implements OnInit {
  @Input() content: string;
  @Input() limit: number;
  @Output() newItemEvent = new EventEmitter;
  shortDescription: string;

  constructor() { }

  ngOnInit(): void {
    this.shortDescription = this.formatContent(this.content);
  }

  formatContent(content: string) {
    this.limit = content.substring(0, this.limit).lastIndexOf('');
    return `${content.substring(0, this.limit)}...`;
  }

  // change naming here and implement logic
  onClickAction(): void {
    this.newItemEvent.emit(this.content);
  }
}
