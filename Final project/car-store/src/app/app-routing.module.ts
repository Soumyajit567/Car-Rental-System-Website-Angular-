import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarCartComponent} from './activities/car-cart/car-cart.component';
import {DashboardComponent} from './activities/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path:'dashboard',
  component: DashboardComponent
},
{
  path: 'car-cart',
  component: CarCartComponent
},
// {
//   path : '', redirectTo: 'dashboard', pathMatch: 'full'
// },
{ path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },];
  // { path: 'home', component: HomeComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
