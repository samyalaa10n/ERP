import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'sales',
        pathMatch: 'full'
    },
    {
        path: 'sales',
        loadComponent: () =>
            import('./features/sales/sales')
                .then(m => m.Sales)
    }
];
