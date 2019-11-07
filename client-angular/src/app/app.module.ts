import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { ProdottiComponent } from './prodotti/prodotti.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdottiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
