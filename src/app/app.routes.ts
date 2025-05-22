import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./components/landing/landing.component').then((m) => m.LandingComponent)
        }
    },
    {
        path: 'country-grid',
        loadComponent: () => {
            return import('./components/country-grid/country-grid.component').then((m) => m.CountryGridComponent)
        }
    },
    {
        path: 'new-country',
        loadComponent: () => {
            return import('./components/new-country/new-country.component').then((m) => m.NewCountryComponent)
        }
    }
];
