import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {   //Importare le funzionalità nella nostra applicazione
 FormsModule,
 ReactiveFormsModule
} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RisComponent } from './ris/ris.component';

@NgModule({
  declarations: [
    AppComponent,
    RisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  //Anche qui
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
