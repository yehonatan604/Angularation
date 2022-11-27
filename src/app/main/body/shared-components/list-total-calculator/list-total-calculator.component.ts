import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/Interfaces/cart.interface';

@Component({
  selector: 'app-list-total-calculator',
  templateUrl: './list-total-calculator.component.html',
  styleUrls: ['./list-total-calculator.component.css']
})
export class ListTotalCalculatorComponent {
  constructor() { }
  @Input() currentCart! : Cart[];
}
