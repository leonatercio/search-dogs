import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { DetailComponent } from './detail/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detail/:name', component: DetailComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
