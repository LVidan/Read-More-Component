import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html'
})
export class ReadMoreComponent implements OnInit {
  @Input() content: string;
  @Input() limit: number;

  constructor() { }

  ngOnInit(): void {
    this.content = this.formatContent(this.content);
  }

  formatContent(content: string) {
    this.limit = content.substring(0, this.limit).lastIndexOf('');
    return `${content.substring(0, this.limit)}...`;
  }

  // change naming here and implement logic
  test(): void {
    console.log('test');
  }
}
