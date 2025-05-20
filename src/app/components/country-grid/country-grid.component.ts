import { Component, inject, OnInit, signal } from '@angular/core';
import { CountryDataService } from '../../services/country-data.service';
import { catchError } from 'rxjs';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-country-cards',
  imports: [NgFor, CountryCardComponent],
  templateUrl: './country-grid.component.html',
  styleUrl: './country-grid.component.css'
})

export class CountryGridComponent implements OnInit {
  countryDataService = inject(CountryDataService);
  countries = signal([]);

  ngOnInit(): void {
    this.countryDataService.getCountryData().pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe((countries) => {
      this.countries.set(countries);
    })
  }
}
