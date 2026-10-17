import { Component } from '@angular/core';
import { PizzaItem } from '../pizza-item/pizza-item';
import { signal } from '@angular/core';
import { Pizza } from '../pizza';
import { DecimalPipe } from '@angular/common';
@Component({
  imports: [PizzaItem,DecimalPipe],
  selector: 'hai-pizza-list',
  styleUrl: './pizza-list.css',
  templateUrl: './pizza-list.html',
})
export class PizzaList {
  pizzasList = signal<Pizza[]>([ 
{ id: 1, name: "Neptune", image: "neptune (1).jpg", price: 11.3, vegetarian: 
false }, 
{ id: 2, name: "4 Saisons", image: "saisons (1).jpg", price: 12.5, vegetarian: 
true }, 
{ id: 3, name: "Fruits de Mer", image: "mer (1).jpg", price: 18.4, vegetarian: 
false }, 
{ id: 4, name: "Marguerite", image: "marguerite (1).jpg", price: 9.8, 
vegetarian: true } ]); 
supprimer(pizza:any){
  this.pizzasList.update(pizzasList =>
    pizzasList.filter(x=>x.id!=pizza.id)
  )

}
}
