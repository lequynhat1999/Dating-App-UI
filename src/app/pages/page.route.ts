import { Routes } from "@angular/router";

export const pageRoutes: Routes = [
  { path: '', redirectTo: 'component', pathMatch: 'full' },
  {
    path: 'component',
    loadComponent: () => import('./component/component.component').then(m => m.ComponentComponent)
  },
  {
    path: 'directive',
    loadComponent: () => import('./directive/directive.component').then(m => m.DirectiveComponent)
  },
  {
    path: 'service',
    loadComponent: () => import('./service/service.component').then(m => m.ServiceComponent)
  },
  {
    path: 'pipe',
    loadComponent: () => import('./pipe/pipe.component').then(m => m.PipeComponent)
  },
  {
    path: 'rxjs',
    loadComponent: () => import('./rxjs/rxjs.component').then(m => m.RxjsComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  }
];