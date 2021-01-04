import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginScreenComponent} from './components/login-screen/login-screen.component';
import {SetupNameComponent} from './components/setup-name/setup-name.component';
import {FeedContentComponent} from './components/feed-content/feed-content.component';
import {MessagesContentComponent} from './components/messages-content/messages-content.component';
import {ConnectionsContentComponent} from './components/connections-content/connections-content.component';

const routes: Routes = [
  { path: 'login', component: LoginScreenComponent },
  { path: 'setup', component: SetupNameComponent },
  { path: 'feed', component: FeedContentComponent},
  { path: 'message', component: MessagesContentComponent},
  {path: 'connections', component: ConnectionsContentComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
