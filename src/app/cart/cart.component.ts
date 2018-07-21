import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../shared/pizza';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() pizzas: Pizza[]
  constructor(private orderService: OrdersService) { }

  ngOnInit() {
  }

  confirmOrder(){
    this.orderService.order(this.pizzas).subscribe();
  }

}
