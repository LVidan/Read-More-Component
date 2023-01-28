import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { FullDescriptionModalComponent } from './read-more/full-description-modal/full-description-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ReadMoreComponent,
    FullDescriptionModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
