import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cart_Product } from 'src/app/activities/cart_models/cart_product';
import { ThemeService } from 'src/app/services/theme.service';
@Component({
  selector: 'app-car-product-box-five',
  templateUrl: './car-product-box-five.component.html',
  styleUrls: ['./car-product-box-five.component.css']
})
export class CarProductBoxFiveComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  @Input() fullWidthMode = false;
  // @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter();
  product: Cart_Product | undefined ={
    id:5,
    title:'BMW Hybrid',
    price: 95000,
    category: 'Rent',
    description : 'BMW',
    image:'https://www.dailymaverick.co.za/wp-content/uploads/Deon_BMW-Z4-and-M850i_21-MAIN-option-2.jpg'
  };
  // @Output() addtoCart = new EventEmitter();

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }

  onAddToCart():void{
    this.addToCart.emit(this.product);
  }

}



