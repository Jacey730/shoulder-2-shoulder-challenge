import { Component, inject, OnInit, signal } from '@angular/core';
import { CountryDataService } from './services/country-data.service';
import { catchError } from 'rxjs';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { NgFor } from '@angular/common';
import { RegionFilterDropdownComponent } from "./components/region-filter-dropdown/region-filter-dropdown.component";

@Component({
  selector: 'app-country-cards',
  imports: [NgFor, CountryCardComponent, RegionFilterDropdownComponent],
  templateUrl: './country-grid.component.html',
  styleUrl: './country-grid.component.css'
})

export class CountryGridComponent implements OnInit {
  countryDataService = inject(CountryDataService);
  countries = signal!<any>([]);
  regions = signal<Array<string>>([]);

  ngOnInit(): void {
    this.countryDataService.getCountryData().pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe((countries) => {
      this.countries.set(countries);
      console.log(countries.keys());
    })
    console.log(this.countries());
    
    for (let country of this.countries()) {
      console.log(this.countries().region);
      this.regions.update(regions => [...regions, this.countries().region]);
    }
  }
}
