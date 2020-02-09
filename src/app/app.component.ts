import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  isDisplay = false;

  getName() {
    return this.model.user;
  }

  getItems() {
    if (this.isDisplay == true) {
      return this.model.items;
    }
    return this.model.items.filter(x => !x.action);
  }

  addNewTask(val) {
    if (val == "") {
      return;
    }
    this.model.items.push(new TodoItem(val, false));
  }
}
