import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./components/country-grid/country-grid.component').then((m) => m.CountryGridComponent)
        }
    }
];
