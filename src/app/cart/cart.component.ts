import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../shared/pizza';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() pizzas: Pizza[]
  constructor() { }

  ngOnInit() {
  }

}
