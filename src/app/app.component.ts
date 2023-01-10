import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../types/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  items: TodoItem[] = [
    {
      id: '1212',
      isComplete: false,
      name: 'example',
    },
  ];

  saveItemsInLocalStorage() {
    globalThis.localStorage.setItem('items', JSON.stringify(this.items));
  }

  handleDeleteItem(idToDelete: TodoItem['id']) {
    const newItems = this.items.filter((item) => item.id !== idToDelete);
    this.items = newItems;
  }

  handleAddItem(newItem: TodoItem) {
    this.items.push(newItem);

    this.saveItemsInLocalStorage();
  }

  handleToggleItemStatus(itemId: TodoItem['id']) {
    const index = this.items.findIndex((item) => item.id === itemId);

    if (index !== -1) {
      // not recomended to modify directly the array
      const itemsCopy = [...this.items];

      itemsCopy[index] = {
        ...this.items[index],
        isComplete: !this.items[index].isComplete,
      };

      this.items = itemsCopy;
      this.saveItemsInLocalStorage();
    }
  }

  ngOnInit() {
    const rawItems = globalThis.localStorage.getItem('items') ?? '[]';
    const newItems = JSON.parse(rawItems);

    this.items = newItems;
  }
}
