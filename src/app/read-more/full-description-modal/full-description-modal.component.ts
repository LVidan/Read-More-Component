import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-full-description-modal',
  templateUrl: './full-description-modal.component.html'
})
export class FullDescriptionModalComponent implements OnInit {
  @Input() fullContent: string;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void { }

}
