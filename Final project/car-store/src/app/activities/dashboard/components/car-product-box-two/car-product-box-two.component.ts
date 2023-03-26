import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Cart_Product } from 'src/app/activities/cart_models/cart_product';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-car-product-box-two',
  templateUrl: './car-product-box-two.component.html',
  styleUrls: ['./car-product-box-two.component.css']
})
export class CarProductBoxTwoComponent implements OnInit {

  @Input() fullWidthMode = false;
  // @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter();
  product: Cart_Product | undefined ={
    id:2,
    title:'Mercedes-Benz Vision EQS',
    price: 500000,
    category: 'Rent',
    description : 'Mercedes',
    image:'https://th.bing.com/th/id/R.d799d0d25c87e18a04bd0600f4528b08?rik=AkXXz3hUSW1Zhg&riu=http%3a%2f%2fwww.hdcarwallpapers.com%2fdownload%2fmercedes_benz_vision_eqs_2019_4k_2-5120x2880.jpg&ehk=kM3MEZ5v8ZysKcaWiUkVNCdE%2f363XdNUI5sZGz2ZEkE%3d&risl=&pid=ImgRaw&r=0'
  };
  // @Output() addtoCart = new EventEmitter();

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }

  onAddToCart():void{
    this.addToCart.emit(this.product);
  }


}
