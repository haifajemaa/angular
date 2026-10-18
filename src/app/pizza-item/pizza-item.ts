import { Component, input, output, signal } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaComment } from '../pizza-comment/pizza-comment';

@Component({
  imports: [PizzaComment],
  selector: 'hai-pizza-item',
  styleUrl: './pizza-item.css',
  templateUrl: './pizza-item.html',
})
export class PizzaItem {
  display = signal<boolean>(false);

  pizza = input.required<Pizza>();

  deletepizza = output<number>();

  deletecomment = output<{ pizzaId: number; commentId: number }>();

  supprimer(id: number) {
    this.deletepizza.emit(id);
  }

  ondisplay() {
    this.display.update(d => !d);
  }

  ondeleteliste(commentId: number) {
    this.deletecomment.emit({
      pizzaId: this.pizza().id,
      commentId: commentId
    });
  }
}