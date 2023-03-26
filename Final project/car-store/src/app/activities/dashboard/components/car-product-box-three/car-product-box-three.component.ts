import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Cart_Product } from 'src/app/activities/cart_models/cart_product';
import { ThemeService } from 'src/app/services/theme.service';


@Component({
  selector: 'app-car-product-box-three',
  templateUrl: './car-product-box-three.component.html',
  styleUrls: ['./car-product-box-three.component.css']
})
export class CarProductBoxThreeComponent implements OnInit {

  @Input() fullWidthMode = false;
  // @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter();
  product: Cart_Product | undefined ={
    id:3,
    title:'Audi S8 Quattro',
    price: 80000,
    category: 'Rent',
    description : 'Audi',
    image:'https://th.bing.com/th/id/R.86f61db7b588595cc9c3d04b7458a472?rik=AjWUMrlm%2fa5CSw&riu=http%3a%2f%2fimages.gtcarlot.com%2fpictures%2f83876579.jpg&ehk=X0H9iXfT9ulcHkcjVFSXG%2bQ%2fws5LKDYjy0hbH0xhY%2b4%3d&risl=&pid=ImgRaw&r=0'
  };
  // @Output() addtoCart = new EventEmitter();

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }

  onAddToCart():void{
    this.addToCart.emit(this.product);
  }

}
