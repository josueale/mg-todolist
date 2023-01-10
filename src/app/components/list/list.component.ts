import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from 'src/types/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input() items: TodoItem[] = [];

  @Output() onDeleteItem = new EventEmitter()

  // emit event to app component
  onDelete(any:any){
    this.onDeleteItem.emit(any)
  }
}
