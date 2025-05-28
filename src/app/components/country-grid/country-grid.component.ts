import { Component, OnInit } from '@angular/core';
import { CountryDataService, CountryData } from './services/country-data.service';
import { ShareCountryDataService } from '../../shared/services/share-country-data.service';
import { catchError, Subject, takeUntil } from 'rxjs';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { RegionFilterDropdownComponent } from "./components/region-filter-dropdown/region-filter-dropdown.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-cards',
  imports: [CountryCardComponent, RegionFilterDropdownComponent, RouterLink],
  templateUrl: './country-grid.component.html',
  styleUrl: './country-grid.component.css'
})

export class CountryGridComponent implements OnInit {

  countryData: CountryData[] = [];
  uniqueRegions: String[] = [];
  selectedRegions: String[] = [];
  destroyed$ = new Subject<void>();
  countriesFetched = false;

  constructor(
    private countryDataService: CountryDataService,
    private shareCountryDataService: ShareCountryDataService
  ) {}

  ngOnInit(): void {
    if (!this.countriesFetched) {
      this.fetchCountries();
      this.countriesFetched = true;
    }
  }

  fetchCountries(): void {
    this.countryDataService.getCountryData().pipe(takeUntil(this.destroyed$),
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

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  updateSelectedRegions(newSelectedRegions: String[]) {
    this.selectedRegions = newSelectedRegions;
  }

  sendUniqueRegions(uniqueRegions: any) {
    this.shareCountryDataService.passRegionsToNewCountry(uniqueRegions);
  }
}
