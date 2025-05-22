import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-country-card',
  imports: [CardModule, DecimalPipe],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.css'
})
export class CountryCardComponent{ 
  @Input() country: any;

}
