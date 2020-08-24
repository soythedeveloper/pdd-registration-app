import { RouterModule, Routes,PreloadAllModules} from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginPage } from './login.page';

const routes: Routes = [
    {
        path: '',
        component: LoginPage,
        children: [
            {
                path: 'retreatant',
                loadChildren: () => import('../retreatant/retreatant.module').then( m => m.RetreatantPageModule)
            },
            {
                path: 'retreatant-checkin',
                loadChildren: () => import('../retreatant-checkin/retreatant-checkin.module').then( m => m.RetreatantCheckinPageModule)
            },
            {
                path: '',
                redirectTo: '/login/retreatant',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
imports: [
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }