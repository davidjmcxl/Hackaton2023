import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {   HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { DescriptionComponent } from './description/description.component';
import { EntriesPrizesComponent } from './entries-prizes/entries-prizes.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    DescriptionComponent,
    EntriesPrizesComponent,
    SponsorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
