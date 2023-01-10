import { Component } from '@angular/core';
import { TodoItem } from '../types/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  items: TodoItem[] = [
    {
      id: '1212',
      isComplete: false,
      name: 'example',
    },
  ];

  handleDeleteItem(idToDelete: TodoItem['id']) {
    const newItems = this.items.filter((item) => item.id !== idToDelete);
    this.items = newItems;
  }

  handleAddItem(newItem: TodoItem) {
    this.items.push(newItem);
  }

  handleToogleItemStatus(itemId: string) {
    const index = this.items.findIndex((item) => item.id === itemId);

    if (index !== -1) {
      // not recomended to modify directly the array
      const itemsCopy = [...this.items];

      itemsCopy[index] = {
        ...this.items[index],
        isComplete: !this.items[index].isComplete,
      };

      this.items = itemsCopy;
    }
  }
}
