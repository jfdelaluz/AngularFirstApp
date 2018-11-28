import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even_number',
  templateUrl: './even_number.component.html',
  styleUrls: ['./even_number.component.css']
})

export class EvenNumberComponent {
  @Input() evenNumber: number;
}
