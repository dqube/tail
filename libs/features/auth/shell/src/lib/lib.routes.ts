import { Route } from '@angular/router';

export const shellRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    pathMatch: 'full',
    loadChildren: () => import('@app/auth/list').then((a) => a.listRoutes),
  },
  {
    path: 'detail',
    pathMatch: 'full',
    loadChildren: () => import('@app/auth/detail').then((a) => a.detailRoutes),
  },
];
