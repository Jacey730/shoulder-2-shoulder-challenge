import { Component, OnInit } from '@angular/core';
import { CountryDataService, CountryData } from './services/country-data.service';
import { catchError } from 'rxjs';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { RegionFilterDropdownComponent } from "./components/region-filter-dropdown/region-filter-dropdown.component";

@Component({
  selector: 'app-country-cards',
  imports: [CountryCardComponent, RegionFilterDropdownComponent],
  templateUrl: './country-grid.component.html',
  styleUrl: './country-grid.component.css'
})

export class CountryGridComponent implements OnInit {

  countryData: CountryData[] = [];
  uniqueRegions: String[] = [];
  selectedRegions: String[] = [];

  constructor(private countryDataService: CountryDataService) {}

  ngOnInit(): void {
    this.countryDataService.getCountryData().pipe(
      catchError((err) => {
        console.log(err); 
        throw err;
      })
    ).subscribe(countryData => {
      this.countryData = countryData;
      this.uniqueRegions = this.countryData
        .map(country => country.region)
        .filter((value, index, self) => self.indexOf(value) === index);
    });
  }

  updateSelectedRegions(newSelectedRegions: String[]) {
    this.selectedRegions = newSelectedRegions;
  }
}
