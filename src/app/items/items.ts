import { Component, EventEmitter, Input, Output, output } from "@angular/core";

@Component({
  selector: "app-items",
  imports: [],
  templateUrl: "./items.html",
  styleUrl: "./items.css",
})
export class Items {
  @Input() value: { id: number; name: string; checked: boolean } = {
    id: 0,
    name: "",
    checked: false,
  };
  @Output() onChecked = new EventEmitter<number>();
  remove() {
    this.onChecked.emit(this.value.id);
  }
}
