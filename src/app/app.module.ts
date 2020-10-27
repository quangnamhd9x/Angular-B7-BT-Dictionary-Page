import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { DictionaryService } from './dictionary.service';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
