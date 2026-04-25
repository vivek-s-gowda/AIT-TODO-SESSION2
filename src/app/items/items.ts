import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  imports: [],
  templateUrl: './items.html',
  styleUrl: './items.css',
})
export class Items {
  @Input() value: { id: number; name: string; checked: boolean } = {
    id: 0,
    name: '',
    checked: false,
  };
}
