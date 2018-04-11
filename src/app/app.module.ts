import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*
  This block of code is for import material modules
*/
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatFormFieldModule } from '@angular/material';
const modules = [MatButtonModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatFormFieldModule];
@NgModule({
  imports: [modules],
  exports: [modules],
})
export class MaterialModule { }

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
