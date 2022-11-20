import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.routing').then((m) => m.routes),
  },
];
