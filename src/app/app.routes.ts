import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/page.route').then((m) => m.pageRoutes),
  },
];
