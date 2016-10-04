import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'demo', component: MainComponent, data: {demo: true} },
  { path: '', component: MainComponent, data: {demo: false} },
];

export const routing = RouterModule.forRoot(routes);
