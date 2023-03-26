import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Cart_Product } from 'src/app/activities/cart_models/cart_product';
import { ThemeService } from 'src/app/services/theme.service';


@Component({
  selector: 'app-car-product-box-four',
  templateUrl: './car-product-box-four.component.html',
  styleUrls: ['./car-product-box-four.component.css']
})
export class CarProductBoxFourComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  @Input() fullWidthMode = false;
  // @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter();
  product: Cart_Product | undefined ={
    id:4,
    title:'Buggati Chiron',
    price: 100000,
    category: 'Rent',
    description : 'One of the fastest cars in the world',
    image:'https://th.bing.com/th/id/R.58844260e631c8a4c2de0bc9de69b8fe?rik=aWjZQ7UYjnHXUQ&riu=http%3a%2f%2fautonxt.net%2fwp-content%2fuploads%2f2016%2f02%2fautocontentexp.comwp-contentuploads201602Bugatti-Chiron12-bbe253df67666d89f540d5bc1d1afdb6234b1ce2.jpg&ehk=VMDiQqyuJHTpQ70WUEDkKm8H3bO7CJ70qUSW9hU1cnM%3d&risl=&pid=ImgRaw&r=0'
  };
  // @Output() addtoCart = new EventEmitter();

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }

  onAddToCart():void{
    this.addToCart.emit(this.product);
  }

}
