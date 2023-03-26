import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';


@Component({
  selector: 'app-car-products-header',
  templateUrl: './car-products-header.component.html',
  styleUrls: ['./car-products-header.component.css']
})
export class CarProductsHeaderComponent implements OnInit {
  sort = 'desc';
  carCountForShow = 12;
  @Output() columnsCountChange= new EventEmitter<number>();
  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }
  onSortUpdated(newSort: string):void{
    this.sort = newSort;
  }
  onItemsUpdated(c:number):void{
    this.carCountForShow = c;
  }
  onColumnsUpdated(colsNum: number): void{
    this.columnsCountChange.emit(colsNum);
  }
}
