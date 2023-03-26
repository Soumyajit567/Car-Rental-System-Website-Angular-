// import { Component, OnInit } from '@angular/core';
// import { Cart } from './activities/cart_models/cart_models';
// import {CartService} from './car_services/cart.service';

// @Component({
//   selector: 'app-root',
//   template: `
//   <app-header></app-header>
//   <router-outlet></router-outlet>`,
//   // templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   // title = 'car-store';
//   cart: Cart = {items: [] };

//   constructor(private cartService: CartService){}

//   ngOnInit() {
//     this.cartService.cart.subscribe((_cart) =>{this.cart = _cart});
//   }
// }
// <app-header [cart]="cart"></app-header>

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';
import { Cart } from './activities/cart_models/cart_models';
import { CartService } from './car_services/cart.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-root',
  template: `
    <app-header *ngIf="showHeader" [cart]="cart"></app-header>
    <app-theme-toggler *ngIf="showHeader"></app-theme-toggler>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showHeader = false;
  cart: Cart = { items: [] };

  constructor(
    private cartService: CartService,
    private router: Router,
    private authService: AuthService,
    private themeService: ThemeService
  ) { themeService.isDarkTheme$.subscribe((isDark) => {
    isDark ? this.setDarkTheme() : this.setLightTheme();
  });}

  private setDarkTheme() {
    document.documentElement.classList.add('dark');
  }
  
  private setLightTheme() {
    document.documentElement.classList.remove('dark');
  }
  

  ngOnInit() {
    this.cartService.cart.subscribe(_cart => {
      this.cart = _cart;
    });

    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.showHeader = isAuthenticated;
    });

    this.router.events
      .pipe(
        filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        const hiddenRoutes = ['/login', '/register'];
        this.showHeader = !hiddenRoutes.includes(event.url);
      });
  }
}

// import { Component, OnInit } from '@angular/core';
// import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
// import { filter } from 'rxjs/operators';
// import { AuthService } from 'src/app/service/auth.service';
// import { Cart } from './activities/cart_models/cart_models';
// import { CartService } from './car_services/cart.service';

// @Component({
//   selector: 'app-root',
//   // template: `
//   //   <app-header [cart]="cart"></app-header>
//   //   <router-outlet></router-outlet>
//   // `,
//   template: `
//     <app-header ="showHeader" [cart]="cart"></app-header>
//     <router-outlet></router-outlet>
//   `,
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   showHeader = false;
//   isAuthenticated = false;
//   showCart = true;
//   cart: Cart = { items: [] };

//   constructor(
//     private cartService: CartService,
//     private router: Router,
//     private authService: AuthService
//   ) {}


//   ngOnInit() {
//     this.cartService.cart.subscribe(_cart => {
//       this.cart = _cart;
//     });

//     this.router.events
//       .pipe(filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd))
//       .subscribe((event: NavigationEnd) => {
//         const hiddenRoutes = ['/login', '/register'];
//         this.showHeader = !hiddenRoutes.includes(event.url);
//         this.showCart = this.showHeader;
//       });
//   }

//   ngOnInit() {
//     this.cartService.cart.subscribe(_cart => {
//       this.cart = _cart;
//     });

//     this.authService.isAuthenticated$.subscribe(isAuthenticated => {
//       this.isAuthenticated = isAuthenticated;
//       this.updateHeaderVisibility();
//     });

//     this.router.events
//       .pipe(
//         filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
//       )
//       .subscribe((event: NavigationEnd) => {
//         this.updateHeaderVisibility(event.url);
//       });
//   }

//   updateHeaderVisibility(url?: string) {
//     const hiddenRoutes = ['/login', '/register'];
//     const visibleRoutesWhenAuthenticated = ['/dashboard'];

//     if (url && visibleRoutesWhenAuthenticated.includes(url)) {
//       this.showHeader = true
//       this.showHeader = this.isAuthenticated;
//     } else {
//       this.showHeader = this.isAuthenticated && !(url && hiddenRoutes.includes(url));
//     }
//   }
// }

