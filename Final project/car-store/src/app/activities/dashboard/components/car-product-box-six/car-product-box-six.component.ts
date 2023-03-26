import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Cart_Product } from 'src/app/activities/cart_models/cart_product';
import { ThemeService } from 'src/app/services/theme.service';


@Component({
  selector: 'app-car-product-box-six',
  templateUrl: './car-product-box-six.component.html',
  styleUrls: ['./car-product-box-six.component.css']
})
export class CarProductBoxSixComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  @Input() fullWidthMode = false;
  // @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter();
  product: Cart_Product | undefined ={
    id:6,
    title:'Lamborghini Aventador',
    price: 100000,
    category: 'Rent',
    description : 'Lamborghini Car',
    image:'https://th.bing.com/th/id/OIP.bBoVp6H1G3mbItT4UWDa8AHaFj?pid=ImgDet&rs=1'
  };
  // @Output() addtoCart = new EventEmitter();

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }

  onAddToCart():void{
    this.addToCart.emit(this.product);
  }

}
