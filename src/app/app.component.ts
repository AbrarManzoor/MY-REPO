import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabs = ['Individual', 'Company'];
  selected = new FormControl(0);
  panelOpenState=false;

  addTab(selectAfterAdding: boolean) {
    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  
}
