import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  onlyEven = false;
  onlyOdd2 = false;

  showAllNumbers() {
    this.onlyOdd = false;
    this.onlyEven = false;
  }

  showOnlyOdd() {
    this.onlyOdd = true;
    this.onlyEven = false;
  }

  showOnlyEven() {
    this.onlyOdd = false;
    this.onlyEven = true;
  }

  showOnlyOdd2() {
    this.onlyOdd2 = !this.onlyOdd2;
  }
}
