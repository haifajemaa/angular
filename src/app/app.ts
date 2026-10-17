import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PizzaList } from './pizza-list/pizza-list';

@Component({
  imports: [RouterOutlet,PizzaList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('revtp5');
}
