import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CountryData {
  name: Name;
  flags: Flags;
  region: string;
  population: number;
}

interface Name {
  common: string;
  official: string;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}


@Injectable({
  providedIn: 'root'
})
export class ShareCountryDataService {
  uniqueRegionsSubject: BehaviorSubject<String[]> = new BehaviorSubject<any>(null);
  uniqueRegions: Observable<any> = this.uniqueRegionsSubject.asObservable();
  countrySubject: BehaviorSubject<CountryData> = new BehaviorSubject<any>(null);
  country: Observable<any> = this.countrySubject.asObservable();



  constructor() { }

  passRegionsToNewCountry(uniqueRegions: any) {
    this.uniqueRegionsSubject.next(uniqueRegions);
  }

  passCountrytoGrid(country: any) {
    this.countrySubject.next(country);
  }
}
