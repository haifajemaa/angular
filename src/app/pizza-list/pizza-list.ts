import { Component } from '@angular/core';
import { PizzaItem } from '../pizza-item/pizza-item';
import { signal } from '@angular/core';
import { Pizza } from '../pizza';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [PizzaItem,JsonPipe],
  selector: 'hai-pizza-list',
  styleUrl: './pizza-list.css',
  templateUrl: './pizza-list.html',
})
export class PizzaList {
   pizzasList = signal<Pizza[]>([ 
    {  
      id: 1, name: "Neptune", image: "neptune (1).jpg", price: 11.3, vegetarian: 
false, 
      comments: [ 
        { id: 101, name: 'Youssef', date: new Date(2026, 9, 12), message: "Délicieuse Pizza" }, 
        { id: 102, name: "Cyrine", date: new Date(2026, 9, 13), message: "Excellente pizza" } 
      ] 
    }, 
    {  
      id: 2, name: "4 Saisons", image: "saisons (1).jpg", price: 12.5, vegetarian: 
true, 
      comments: [ 
        { id: 201, name: "Aziz", date: new Date(2026, 9, 12), message: "Je recommande vivement" } 
      ] 
    }, 
    { id: 3, name: "Fruits de Mer", image: "mer (1).jpg", price: 18.4, vegetarian: false }, 
    {  
      id: 4, name: "Marguerite", image: "marguerite (1).jpg", price: 9.8, 
vegetarian: true, 
      comments: [ 
        { id: 401, name: "Ghada", date: new Date(2026, 8, 12), message: "Très moyen" 
} 
      ] 
    } 
  ]);
 supprimerPizza(id: number) {
  this.pizzasList.update(pizza =>
    pizza.filter(p => p.id !== id)
  );
}
supprimercomment(event: { pizzaId: number; commentId: number }) {
  this.pizzasList.update(pizzas => {
    const pizza = pizzas.find(p => p.id === event.pizzaId);

    if (pizza && pizza.comments) {
      pizza.comments = pizza.comments.filter(
        c => c.id !== event.commentId
      );
    }

    return [...pizzas];
  });
}
}
