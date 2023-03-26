import { Component, OnInit } from '@angular/core';
import {Cart, CartItem} from 'src/app/activities/cart_models/cart_models';
import { CartService } from 'src/app/car_services/cart.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-car-cart',
  templateUrl: './car-cart.component.html',
  styleUrls: ['./car-cart.component.css']
})
export class CarCartComponent implements OnInit {

  cart: Cart = {items: [{
    product: 'https://4.bp.blogspot.com/_nhlqtamD6bk/TCZsNlwpPyI/AAAAAAAAAYw/DPSmWz2heQM/s1600/sport+car.jpg',
    name: 'car',
    price: 1000,
    quantity : 1,
    month:48,
    id: 1,
  },
  {
    product: 'https://4.bp.blogspot.com/_nhlqtamD6bk/TCZsNlwpPyI/AAAAAAAAAYw/DPSmWz2heQM/s1600/sport+car.jpg',
    name: 'Formula 1 Racing Car New Generation Ultra Z Classy 47867789',
    price: 1000,
    quantity : 1,
    month:48,
    id: 1,
    
  }]};

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'month',
    'total',
    'action'
  ];

  constructor( private cartService: CartService, public themeService: ThemeService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart:Cart) => {
      this.cart= _cart;
      this.dataSource = this.cart.items;
    });
  }
  getTotal(items: Array<CartItem>):number{
   return this.cartService.getTotal(items);
    // let total = items.map(item => {
    //   if (item.months < 48) {
    //     return item.price *  item.months;
    //   } else {
    //     return item.price * 48; // limit the maximum months to 48
    //   }
    // }).reduce((prev, current) => prev + current, 0);
  
    // return total;
  }

  onClearStore(): void{
    this.cartService.ClearCart();
  }
  RemoveFromStore(element: CartItem):void{
    this.cartService.RemoveFromStore(element);
  }
  Add(item:CartItem):number{
    return item.quantity += 1;
  }
  Subtract(item:CartItem):void{
    // return item.quantity -= 1;
    this.cartService.Subtract(item)
    
}
AddMonth(item:CartItem):number{
  if (item.month < 48){
  return item.month += 1;
  }
  item.month=0;
  return item.month;
}
SubtractMonth(item:CartItem):number{
  if (item.month > 0){
    return item.month -= 1;
  }
  return 0;
  
  // this.cartService.Subtract(item)
  
}
}