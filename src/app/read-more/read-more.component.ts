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
    console.log(`Limit: ${this.limit}, Content: ${this.content}`);

  }

}
