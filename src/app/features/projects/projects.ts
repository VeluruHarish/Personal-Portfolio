import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  url = 'https://github.com/VeluruHarish/Bookmyshow-app';

  constructor() { }

  ngOnInit() {
    // Initialization logic can go here
  }

  sourceLink() {
    window.open(this.url, '_blank');
  }

}
