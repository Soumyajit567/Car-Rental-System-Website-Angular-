import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './activities/dashboard/dashboard.component';
import { CarProductsHeaderComponent } from './activities/dashboard/components/car-products-header/car-products-header.component';
import { FiltersComponent } from './activities/dashboard/components/filters/filters.component';
import { CarProductBoxComponent } from './activities/dashboard/components/car-product-box/car-product-box.component';
import { CarCartComponent } from './activities/car-cart/car-cart.component';
import {CartService} from './car_services/cart.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AuthState } from './store/auth.state';
import { ThemeTogglerComponent } from './theme-toggler/theme-toggler.component';
import { ThemeService } from './services/theme.service';
import { CarProductBoxTwoComponent } from './activities/dashboard/components/car-product-box-two/car-product-box-two.component';
import { CarProductBoxThreeComponent } from './activities/dashboard/components/car-product-box-three/car-product-box-three.component';
import { CarProductBoxFourComponent } from './activities/dashboard/components/car-product-box-four/car-product-box-four.component';
import { CarProductBoxFiveComponent } from './activities/dashboard/components/car-product-box-five/car-product-box-five.component';
import { CarProductBoxSixComponent } from './activities/dashboard/components/car-product-box-six/car-product-box-six.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    CarProductsHeaderComponent,
    FiltersComponent,
    CarProductBoxComponent,
    CarCartComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ThemeTogglerComponent,
    CarProductBoxTwoComponent,
    CarProductBoxThreeComponent,
    CarProductBoxFourComponent,
    CarProductBoxFiveComponent,
    CarProductBoxSixComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    FormsModule,
    NgxsModule.forRoot([AuthState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    BrowserAnimationsModule,
    MatSidenavModule,
  ],
  providers: [CartService, ThemeService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
