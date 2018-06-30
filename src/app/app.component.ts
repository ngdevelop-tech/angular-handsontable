import { Component } from '@angular/core';
import {CARS } from './cardata';
import { HotTableRegisterer } from '@handsontable/angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dataset = CARS;

  options = {
    rowHeaders : true,
    columnHeaders : true,
    fixedRowsTop : 0,
    fixedColumnsLeft : 0,
    contextMenu : false,
    manualColumnFreeze : false,
    columnSorting : false
  }

  constructor(private _hotRegisterer: HotTableRegisterer) { }
  
  searchValue($event){
    const instance = this._hotRegisterer.getInstance('car_table');
    instance.getPlugin('Search').query($event.target.value);
    instance.render();
  }

 
  
}
