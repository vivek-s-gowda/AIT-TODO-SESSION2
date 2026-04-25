import { Component } from '@angular/core';
import { Items } from '../items/items';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-item-container',
  imports: [Items, CommonModule],
  templateUrl: './item-container.html',
  styleUrl: './item-container.css',
})
export class ItemContainer {
  values = [
    { id: 1, name: 'Test1', checked: false },
    { id: 2, name: 'Test2', checked: true },
    { id: 3, name: 'Test3', checked: false },
    { id: 4, name: 'Test4', checked: false },
    { id: 4, name: 'Test4', checked: false },
  ];
}
