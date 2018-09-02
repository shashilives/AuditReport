import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { ChartsComponent } from './components/charts/charts.component';
// import { MatTableModule, MatSortModule, MatAutocompleteModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DbsearchComponent } from './components/dbsearch/dbsearch.component';

import {
  MatAutocompleteModule,
  MatInputModule,
  MatSortModule,
  MatTableModule,
} from '@angular/material';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatTableModule,
    MatInputModule,
    MatSortModule

  ],
  declarations: []
})
export class DemoMaterialModule { }


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatatableComponent,
    ChartsComponent,
    DbsearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DemoMaterialModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
