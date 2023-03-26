import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Store } from '@ngxs/store';
import { Logout } from 'src/app/store/auth.actions';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();
  // categories = ['Logout']

  constructor(private store: Store, private router: Router, public themeService: ThemeService) { }

  ngOnInit(): void {
  }

  // onShowCategory(category: string):void{
  //   this.showCategory.emit(category);
  // }
  onLogout() {
    this.store.dispatch(new Logout());
    this.router.navigate(['/login']);
  }

}
