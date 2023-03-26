// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {

//   cols = 3;

//   constructor() { }

//   ngOnInit(): void {
//   }
  
//   onColumnsCountChange(colsNum:number):void{
//     // this.cols = colsNum;
//   }

// }

// import { Component, OnInit } from '@angular/core';
// import {CartService} from 'src/app/car_services/cart.service';
// import {Product} from '../cart_models/cart_product';

// const ROWS_HEIGHT : { [id:number]: number}={1:400, 3:355, 4:350};


// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   // styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {

//   cols = 3;
//   rowHeight = ROWS_HEIGHT[this.cols];
//   category: string | undefined;
  
//   constructor(private cartService: CartService) { }

//   ngOnInit(): void {
//   }
  
//   onColumnsCountChange(colsNum: number): void {
//     this.cols = colsNum;
//     this.rowHeight = ROWS_HEIGHT[this.cols];
//   }
//   onShowCategory(newCategory:string):void{
//     this.category = newCategory;
//   }
//   onAddToCart(product: Product): void {
//     this.cartService.addToCart({
//       product: product.image,
//       name: product.title,
//       price: product.price,
//       quantity: 1,
//       id: product.id
//     });
//   }
  
  // onAddToCart(product:Product):void{
  //   this.cartService.addToCart({
  //     product: product.image,
  //     name : product.title,
  //     price: product.price,
  //     quantity : 1,
  //     id: product.id
  //   });
  // }

  // import { Component, OnInit } from '@angular/core';
  // import {CartService} from 'src/app/car_services/cart.service';
  // import {Product} from '../cart_models/cart_product';
  
  // const ROWS_HEIGHT : { [id:number]: number}={1:400, 3:355, 4:350};
  
  
  // @Component({
  //   selector: 'app-dashboard',
  //   templateUrl: './dashboard.component.html',
  //   // styleUrls: ['./dashboard.component.css']
  // })
  // export class DashboardComponent implements OnInit {
  
  //   cols = 3;
  //   rowHeight = ROWS_HEIGHT[this.cols];
  //   category: string | undefined;
    
  //   constructor(private cartService: CartService) { }
  
  //   ngOnInit(): void {
  //   }
    
  //   onColumnsCountChange(colsNum: number): void {
  //     this.cols = colsNum;
  //     this.rowHeight = ROWS_HEIGHT[this.cols];
  //   }
  //   onShowCategory(newCategory:string):void{
  //     this.category = newCategory;
  //   }
  //   onAddToCart(product: Product): void {
  //     this.cartService.addToCart({
  //       product: product.image,
  //       name: product.title,
  //       price: product.price,
  //       quantity: 1,
  //       id: product.id
  //     });
  //   }
  // }
  
  import { Component, OnInit } from '@angular/core';
  import { CartService } from 'src/app/car_services/cart.service';
  import { Cart_Product } from '../cart_models/cart_product';
  import { ThemeService } from 'src/app/services/theme.service';
  
  const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 355, 4: 350 };
  
  @Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
  //   template: `<app-header [cart]="cart"></app-header>
  // <router-outlet></router-outlet>`,
    styleUrls: ['./dashboard.component.css']
  })
  export class DashboardComponent implements OnInit {
    cols = 3;
    rowHeight = ROWS_HEIGHT[this.cols];
    category: string | undefined;
  
    constructor(private cartService: CartService, public themeService: ThemeService) { }
  
    ngOnInit(): void {
    }
  
    onColumnsCountChange(colsNum: number): void {
      this.cols = colsNum;
      this.rowHeight = ROWS_HEIGHT[this.cols];
    }
  
    onShowCategory(newCategory: string): void {
      this.category = newCategory;
    }
  
    onAddToCart(product: Cart_Product): void {
      this.cartService.addToCart({
        product: product.image,
        name: product.title,
        price: product.price,
        quantity: 1,
        month:48,
        id: product.id
      });
    }
  }
  
 