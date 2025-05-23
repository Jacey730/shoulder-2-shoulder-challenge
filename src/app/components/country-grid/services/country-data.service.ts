import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

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

export class CountryDataService {
  private apiUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) { }

  getCountryData(): Observable<CountryData[]> {
    return this.http.get<CountryData[]>(this.apiUrl);
  }
}