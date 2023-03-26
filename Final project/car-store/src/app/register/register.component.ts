// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }



// src/app/register/register.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Register } from '../store/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private store: Store, private router: Router) {}

  // onSubmit() {
  //   this.store.dispatch(new Register({ username: this.username, password: this.password }));
  //   this.router.navigate(['/login']);
  // }

  onSubmit() {
    this.store.dispatch(new Register({ username: this.username, password: this.password })).subscribe(() => {
      alert('User registered successfully');
      this.router.navigate(['/login']);
    });
  }
}
