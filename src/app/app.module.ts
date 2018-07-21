import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { CartComponent } from './cart/cart.component';

import { PizzaService } from './services/pizza.service';
import { OrdersService } from './services/orders.service';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatBadgeModule,
    MatSidenavModule,
    HttpClientModule 
  ],
  providers: [ 
    PizzaService,
    OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
