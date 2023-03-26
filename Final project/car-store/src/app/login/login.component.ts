// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Login } from '../store/auth.actions';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private store: Store, private router: Router, private snackBar: MatSnackBar) {}

  onSubmit() {
    this.store.dispatch(
      new Login(
        { username: this.username, password: this.password },
        () => {
          // this.router.navigate(['/dashboard']).then(() => {
          //   this.snackBar.open(`Welcome ${this.username}!`, '', {
          //     duration: 3000,
          
         //   });
         // });
         this.router.navigate(['/dashboard'])
        },
        () => alert('Invalid username or password')
      )
    );
  }
}

// onSubmit() {
//   this.store.dispatch(
//     new Login(
//       { username: this.username, password: this.password },
//       () => this.router.navigate(['/home']),
//       () => alert('Invalid username or password')
//     )
//   );
// }
//   }


//     const loggedIn = this.store.dispatch(new Login({ username: this.username, password: this.password }));
//     if (loggedIn) {
//       this.router.navigate(['/home']);
//     } else {
//       alert('Invalid username or password');
//     }
//   }
// }
