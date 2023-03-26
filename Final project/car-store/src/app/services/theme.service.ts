// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ThemeService {

//   constructor() { }
// }
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ThemeService {
//   private readonly darkModeClass = 'dark-mode';

//   constructor() {
//     this.initTheme();
//   }

//   initTheme(): void {
//     if (this.isDarkMode()) {
//       document.body.classList.add(this.darkModeClass);
//     } else {
//       document.body.classList.remove(this.darkModeClass);
//     }
//   }

//   toggleTheme(): void {
//     if (this.isDarkMode()) {
//       document.body.classList.remove(this.darkModeClass);
//       localStorage.setItem('theme', 'light');
//     } else {
//       document.body.classList.add(this.darkModeClass);
//       localStorage.setItem('theme', 'dark');
//     }
//   }

//   isDarkMode(): boolean {
//     const theme = localStorage.getItem('theme');
//     return theme === 'dark';
//   }
// }
// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ThemeService {
//   public darkMode = new BehaviorSubject<boolean>(false);

//   constructor() {}

//   toggleDarkMode(): void {
//     this.darkMode.next(!this.darkMode.value);
//   }
// }
// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable()
// export class ThemeService {
//   private readonly darkThemeClass = 'dark-theme';
//   private readonly themeKey = 'theme';
//   darkMode = new BehaviorSubject<boolean>(false);

//   constructor() {
//     this.initTheme();
//   }

//   initTheme() {
//     const storedTheme = localStorage.getItem(this.themeKey);
//     if (storedTheme) {
//       const isDarkMode = storedTheme === this.darkThemeClass;
//       this.darkMode.next(isDarkMode);
//       this.applyTheme(isDarkMode);
//     } else {
//       // Default theme on the first run
//       this.darkMode.next(false);
//       this.applyTheme(false);
//     }
//   }

//   toggleTheme() {
//     const isDarkMode = !this.darkMode.value;
//     this.darkMode.next(isDarkMode);
//     this.applyTheme(isDarkMode);
//     localStorage.setItem(this.themeKey, isDarkMode ? this.darkThemeClass : '');
//   }

//   private applyTheme(isDarkMode: boolean) {
//     if (isDarkMode) {
//       document.body.classList.add(this.darkThemeClass);
//     } else {
//       document.body.classList.remove(this.darkThemeClass);
//     }
//   }
// }
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkTheme = new BehaviorSubject<boolean>(false);

  constructor() {
    const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    this.darkTheme.next(isDarkTheme);
  }

  isDarkTheme$ = this.darkTheme.asObservable();

  toggleTheme() {
    const newValue = !this.darkTheme.value;
    this.darkTheme.next(newValue);
    localStorage.setItem('darkTheme', String(newValue));
  }
}
