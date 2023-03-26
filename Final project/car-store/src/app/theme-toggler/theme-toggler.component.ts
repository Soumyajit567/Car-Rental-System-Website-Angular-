// import { Component, OnInit } from '@angular/core';
// import { ThemeService } from 'src/app/services/theme.service';

// @Component({
//   selector: 'app-theme-toggler',
//   templateUrl: './theme-toggler.component.html',
//   styleUrls: ['./theme-toggler.component.css']
// })
// export class ThemeTogglerComponent implements OnInit {
//   isDarkMode = false;
//   constructor(private themeService: ThemeService) { }

//   ngOnInit(): void {
//     this.isDarkMode = this.themeService.isDarkMode();
//   }

//   toggleTheme(): void {
//     this.isDarkMode = !this.isDarkMode;
//     this.themeService.toggleTheme();
//   }

// }
// import { Component, OnInit } from '@angular/core';
// import { ThemeService } from 'src/app/services/theme.service';

// @Component({
//   selector: 'app-theme-toggler',
//   templateUrl: './theme-toggler.component.html',
//   styleUrls: ['./theme-toggler.component.css']
// })
// export class ThemeTogglerComponent implements OnInit {
//   constructor(public themeService: ThemeService) {}

//   ngOnInit(): void {}

//   toggleDarkMode(): void {
//     this.themeService.toggleDarkMode();
//   }
// }
import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.css'],
})
export class ThemeTogglerComponent {
  constructor(public themeService: ThemeService) {}

  toggleDarkMode() {
    this.themeService.toggleTheme();
  }
}
