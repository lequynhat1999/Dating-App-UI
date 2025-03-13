import { Routes } from "@angular/router";

export const pageRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./home-page/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
    data: {
      isHideNavbar: true
    }
  },
  {
    path: 'member',
    loadComponent: () => import('../components/member/member-list/member-list.component').then(m => m.MemberListComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('../components/list/list.component').then(m => m.ListComponent)
  },
  {
    path: 'message',
    loadComponent: () => import('../components/message/message.component').then(m => m.MessageComponent)
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];