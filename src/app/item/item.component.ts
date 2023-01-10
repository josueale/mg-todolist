import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from 'src/types/todo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent {
  @Input() item!: TodoItem;

  @Output() onDeleteItem = new EventEmitter<TodoItem['id']>();

  @Output() onToggleItem = new EventEmitter<TodoItem['id']>();

  onDeleteClick(id: string) {
    this.onDeleteItem.emit(id);
  }

  onToggleClick(id: string) {
    this.onToggleItem.emit(id);
  }
}
