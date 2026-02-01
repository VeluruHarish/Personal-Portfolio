import { Component, OnInit, Inject, PLATFORM_ID, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  isDarkMode: boolean = true;
  @Input() activeSection!: string;
  @Output() navigate = new EventEmitter<string>();
  isMenuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    // Only run on browser, not on server
    if (isPlatformBrowser(this.platformId)) {
      // Load saved theme preference from localStorage
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.isDarkMode = true;
        this.applyTheme('dark');
      } else {
        this.isDarkMode = false;
        this.applyTheme('light');
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';

    // Only access localStorage on browser
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', theme);
    }

    this.applyTheme(theme);
  }

  private applyTheme(theme: string) {
    if (isPlatformBrowser(this.platformId)) {
      const htmlElement = document.documentElement;
      if (theme === 'dark') {
        htmlElement.classList.add('dark-mode');
        htmlElement.classList.remove('light-mode');
      } else {
        htmlElement.classList.add('light-mode');
        htmlElement.classList.remove('dark-mode');
      }
    }
  }

  onNavClick(section: string) {
    this.scrollTo(section);
    this.isMenuOpen = false; // close after click
  }

  scrollTo(section: string) {
    this.navigate.emit(section);
  }

}
