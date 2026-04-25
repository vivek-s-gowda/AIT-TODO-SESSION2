import { Component } from "@angular/core";
import { Items } from "../items/items";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "app-item-container",
  imports: [Items, CommonModule, FormsModule],
  templateUrl: "./item-container.html",
  styleUrl: "./item-container.css",
})
export class ItemContainer {
  todo: string = "";
  values: { id: number; name: string; checked: boolean }[] = [];

  addTodo() {
    if (this.todo) {
      this.values.push({
        id: this.values.length + 1,
        name: this.todo,
        checked: false,
      });
      this.todo = "";
    }
  }
  removeItem(id: number) {
    this.values = this.values.filter((item) => item.id !== id);
  }
}
