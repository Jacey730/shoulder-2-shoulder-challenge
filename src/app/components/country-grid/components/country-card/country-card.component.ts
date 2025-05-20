import { Component, Input, Signal, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CountryGridComponent } from '../../country-grid.component';

@Component({
  selector: 'app-country-card',
  imports: [CardModule],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.css'
})
export class CountryCardComponent { 
  @Input() country: any;
}
