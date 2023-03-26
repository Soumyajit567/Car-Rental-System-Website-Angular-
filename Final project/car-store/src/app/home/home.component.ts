// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

// src/app/home/home.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Logout } from '../store/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private store: Store, private router: Router) {}

  onLogout() {
    this.store.dispatch(new Logout());
    this.router.navigate(['/login']);
  }
}
// src/app/home/home.component.ts

// import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngxs/store';
// import { AuthState } from '../store/auth.state';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css'],
// })
// export class HomeComponent implements OnInit {
//   showWelcomeMessage = false;
//   username = '';

//   constructor(private store: Store) {}

//   ngOnInit(): void {
//     this.store.selectOnce(AuthState.username).subscribe((username) => {
//       if (username) {
//         this.username = username;
//         this.showWelcomeMessage = true;
//         setTimeout(() => {
//           this.showWelcomeMessage = false;
//         }, 5000);
//       }
//     });
//   }
// }
