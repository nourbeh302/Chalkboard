import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'feed',
    loadChildren: () =>
      import('./modules/feed/feed.module').then((m) => m.FeedModule),
    canActivate: [AuthGuard],
  },
];
