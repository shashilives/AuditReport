import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { ChartsComponent } from './components/charts/charts.component';
import { MatTableModule, MatSortModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [
    MatTableModule,
    MatSortModule
  ]
})
export class DemoMaterialModule { }

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatatableComponent,
    ChartsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DemoMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
