import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ItemContainer } from './item-container/item-container';

@Component({
  selector: 'app-root',
  imports: [ItemContainer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Vivek');
}
