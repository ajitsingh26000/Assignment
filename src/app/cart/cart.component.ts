import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../shared/pizza';
import { OrdersService } from '../services/orders.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() pizzas: Pizza[]
  constructor(private orderService: OrdersService,private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  confirmOrder(){
    this.orderService.order(this.pizzas).subscribe();
    this.snackBar.open("Your Order will arrive in 30 minutes", "", {
      duration: 2000,
    });
  }

}
