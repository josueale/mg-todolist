import { Component, Input } from '@angular/core';
import { TodoItem } from 'src/types/todo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent {
  @Input() item!: TodoItem;
}
