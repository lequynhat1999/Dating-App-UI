import { Routes } from '@angular/router';
import { CanDeactivateGuard } from '../guards/can-deactivate.guard';
import { AuthGuard } from '../guard/auth.guard';
import { MemberDetailComponent } from '../components/member/member-detail/member-detail.component';
import { MemberEditComponent } from '../components/member/member-edit/member-edit.component';

export const pageRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    runGuardsAndResolvers: 'always',
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
        path: 'member-detail/:id',
        component: MemberDetailComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'member/edit',
        component: MemberEditComponent,
        canActivate: [AuthGuard],
        canDeactivate: [CanDeactivateGuard]
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
