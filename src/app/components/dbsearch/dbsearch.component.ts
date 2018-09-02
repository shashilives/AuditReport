import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-dbsearch',
  templateUrl: './dbsearch.component.html',
  styleUrls: ['./dbsearch.component.css']
})
export class DbsearchComponent {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}