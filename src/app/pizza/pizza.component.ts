import { Component, OnInit } from '@angular/core';
import { Pizza } from '../shared/pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  cart: Pizza[]=[];
  pizzas: Pizza[];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe(pizzas => this.pizzas = pizzas)
  }
  add_to_cart(selected){
    this.cart.push(selected);
  }
}
