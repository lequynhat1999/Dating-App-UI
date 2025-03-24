import { Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';

export const pageRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    runGuardsAndResolvers: 'always', // ensure guard and resolver are run on every navigation to this route
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./home-page/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'member',
        loadComponent: () =>
          import('../components/member/member-list/member-list.component').then(
            (m) => m.MemberListComponent
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'list',
        loadComponent: () =>
          import('../components/list/list.component').then(
            (m) => m.ListComponent
          ),
      },
      {
        path: 'message',
        loadComponent: () =>
          import('../components/message/message.component').then(
            (m) => m.MessageComponent
          ),
      },
    ],
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
    data: {
      isHideNavbar: true,
    },
  },

  {
    path: 'not-found',
    loadComponent: () =>
      import('./not-found/not-found.component').then((m) => m.NotFoundComponent),
  },

  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
