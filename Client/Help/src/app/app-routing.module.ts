import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginScreenComponent} from './components/login-screen/login-screen.component';
import {SetupNameComponent} from './components/setup-name/setup-name.component';

const routes: Routes = [
  { path: 'login-screen', component: LoginScreenComponent },
  { path: 'setup-screen', component: SetupNameComponent },
  { path: '',   redirectTo: '/login-screen', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
