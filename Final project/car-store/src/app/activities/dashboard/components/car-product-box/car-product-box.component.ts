import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Cart_Product } from 'src/app/activities/cart_models/cart_product';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-car-product-box',
  templateUrl: './car-product-box.component.html',
  styleUrls: ['./car-product-box.component.css']
})
export class CarProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  // @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter();
  product: Cart_Product | undefined ={
    id:1,
    title:'Car',
    price: 100000,
    category: 'Rent',
    description : 'Description',
    image:'https://4.bp.blogspot.com/_nhlqtamD6bk/TCZsNlwpPyI/AAAAAAAAAYw/DPSmWz2heQM/s1600/sport+car.jpg'
  };
  // @Output() addtoCart = new EventEmitter();

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }

  onAddToCart():void{
    this.addToCart.emit(this.product);
  }

}
