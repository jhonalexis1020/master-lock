import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'Inbox',
        pathMatch: 'full'
    },
    {
        path: ':id',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    }
];