import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BehaviorSubject} from 'rxjs';
import {Cart, CartItem} from 'src/app/activities/cart_models/cart_models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({items: []});

  constructor(private _snackBar:MatSnackBar) { }

  addToCart(item: CartItem):void{
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart){
      itemInCart.quantity += 1;
    } else{
      items.push(item);
    }
    this.cart.next({ items });
    this._snackBar.open('1 item has been added.', 'Ok', {duration: 3000});
    console.log(this.cart.value);
  }

  getTotal(items:Array<CartItem>):number{
    // return items.map((item)=> item.price * item.quantity).reduce((prev,current) => prev + current, 0)
    let total = items.map(item => {
      if (item.month < 48) {
        return item.price *  item.month * item.quantity;
      } else {
        return item.price * 48; // limit the maximum months to 48
      }
    }).reduce((prev, current) => prev + current, 0);
  
    return total;
  }
  Subtract(item:CartItem):void{
    let item_r : CartItem | undefined;
    let fil_items = this.cart.value.items.map((_item) => {
      if(_item.id === item.id){
        _item.quantity--;
        this._snackBar.open('1 car has been removed from store.', 'OK', {duration: 3000});
        if (_item.quantity === 0){
          item_r = _item;
        }
      }
      return _item;
    });
    if(item_r){
      this.RemoveFromStore(item_r);
      this._snackBar.open('Cart has been cleared.', 'Ok', {duration: 3000});
    }
  }

  ClearCart(){
    this.cart.next({items: []});
    this._snackBar.open('Cart has been cleared.', 'Ok', {duration: 3000});
  }
  RemoveFromStore(item: CartItem): void {
    const sorted_items = this.cart.value.items.filter((_item) => _item.id !== item.id);
    this.cart.next({ items: sorted_items });
    this._snackBar.open('1 car has been removed from store.', 'OK', { duration: 3000 });
  }

}
