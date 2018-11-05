import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VersionsComponent } from './versions/versions.component';
import { AppVersionsService } from './appVersions.service';

@NgModule({
  declarations: [
    AppComponent,
    VersionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    AppVersionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
