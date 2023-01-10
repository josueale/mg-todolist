import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { generateId } from 'src/app/helpers/uid';
import { TodoItem } from 'src/types/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() items: TodoItem[] = [];

  @Output() onDeleteItem = new EventEmitter<TodoItem['id']>();
  @Output() onToggleItem = new EventEmitter<TodoItem['id']>();
  @Output() onAddItem = new EventEmitter<TodoItem>();

  model = {
    text: '',
  };

  // emit event to app component
  onDelete(any: any) {
    this.onDeleteItem.emit(any);
  }

  onToggle(any: any) {
    this.onToggleItem.emit(any);
  }

  saveItemOnClick({ value: formData }: NgForm) {
    this.onAddItem.emit({
      id: generateId(),
      name: formData.text,
      isComplete: false,
    });
    // resets form
    this.model.text = '';
  }
}
