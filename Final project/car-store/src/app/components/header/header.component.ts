import { Component, OnInit,Input } from '@angular/core';
import {Cart, CartItem} from 'src/app/activities/cart_models/cart_models';
import {CartService} from 'src/app/car_services/cart.service';
import { ThemeService } from 'src/app/services/theme.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _cart: Cart = {items:[]};
  itemsQuantity = 0;
  
  @Input()
  get cart(): Cart{
    return this._cart;
  }

  set cart(cart:Cart){
    this._cart=cart;

    this.itemsQuantity = cart.items.map((item) => item.quantity).reduce((prev, current) => prev + current,0);
  }

  constructor(private cartService: CartService, public themeService: ThemeService) { }

  ngOnInit(): void {
  }

  getTotal(items:Array<CartItem>):number{
    //return items.map((item)=> item.price * item.quantity).reduce((prev,current) => prev + current, 0)
    return this.cartService.getTotal(items);
  }

  onClearCart(){
    this.cartService.ClearCart();
  }

}
// import { Component, OnInit, Input } from '@angular/core';
// import { Cart, CartItem } from 'src/app/activities/cart_models/cart_models';
// import { CartService } from 'src/app/car_services/cart.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css'],
// })
// export class HeaderComponent implements OnInit {
//   private _cart: Cart = { items: [] };
//   itemsQuantity = 0;


//   @Input() showCart = true;

//   @Input()
//   get cart(): Cart {
//     return this._cart;
//   }

//   set cart(cart: Cart) {
//     this._cart = cart;

//     this.itemsQuantity = cart.items
//       .map((item) => item.quantity)
//       .reduce((prev, current) => prev + current, 0);
//   }

//   constructor(private cartService: CartService) {}

//   ngOnInit(): void {}

//   getTotal(items: Array<CartItem>): number {
//     return this.cartService.getTotal(items);
//   }

//   onClearCart() {
//     this.cartService.ClearCart();
//   }
// }
