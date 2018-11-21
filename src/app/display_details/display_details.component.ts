import { Component } from '@angular/core';

@Component({
  selector: 'app-display_details',
  templateUrl: './display_details.component.html',
  styleUrls: ['./display_details.component.css']
})

export class DisplayDetailsComponent {
  secretParagraphIsVisible = false;
  buttonClickValues = [];

  toggleSecretParagraph() {
    this.secretParagraphIsVisible = !this.secretParagraphIsVisible;
    this.buttonClickValues.push(Math.random());
  }

  getColorForItem(item, index) {
    /*if (this.buttonClickValues.indexOf(item) >= 4) {
      return 'blue';
    }*/
    if (index >= 4) {
      return 'blue';
    }
  }

  toggleColoredItem(item, index) {
    /*if (this.buttonClickValues.indexOf(item) >= 4) {
      return true;
    }*/
    if (index >= 4) {
      return true;
    }
  }
}
