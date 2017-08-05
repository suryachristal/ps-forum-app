import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent }   from './add.component';

const routes: Routes = [
  { path: '', redirectTo: '/view', pathMatch: 'full' },
  { path: 'add',  component: AddComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}