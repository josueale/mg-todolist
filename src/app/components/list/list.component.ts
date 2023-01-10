import { Component, Input } from '@angular/core';
import { TodoItem } from 'src/types/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() items: TodoItem[] = [];

}
