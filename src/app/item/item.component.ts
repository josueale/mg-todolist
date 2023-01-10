import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from 'src/types/todo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent {
  @Input() item!: TodoItem;

  @Output() onDeleteItem = new EventEmitter<TodoItem['id']>();

  onClick(id: string) {
    this.onDeleteItem.emit(id);
  }
}
