import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd_number',
  templateUrl: './odd_number.component.html',
  styleUrls: ['./odd_number.component.css']
})

export class OddNumberComponent {
  @Input() oddNumber: number;
}
