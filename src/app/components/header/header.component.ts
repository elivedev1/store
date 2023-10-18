import { Component, Input } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.module';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  private _cart : Cart = {items: []};
  itemsquatity = 0;
  @Input() 
  get cart(): Cart {
    return this._cart;
  }
  constructor (private cartService : CartService) {

  }
  set cart(cart: Cart) {
    this._cart = cart;
    this.itemsquatity = cart.items.map(item => item.quantity).reduce((prev, current) => prev + current, 0)
  }
  getTotal(items: Array<CartItem>) : number{ 
    return this.cartService.getTotal(items)
  }
  onClearCart() {
    this.cartService.clearCart()
  }
}
