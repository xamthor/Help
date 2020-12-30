import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginScreenComponent} from './components/login-screen/login-screen.component';
import {SetupNameComponent} from './components/setup-name/setup-name.component';
import {FeedContentComponent} from './components/feed-content/feed-content.component';
import {MessagesContentComponent} from './components/messages-content/messages-content.component';
import {ConnectionsContentComponent} from './components/connections-content/connections-content.component';

const routes: Routes = [
  { path: 'login-screen', component: LoginScreenComponent },
  { path: 'setup-screen', component: SetupNameComponent },
  { path: 'feed-content', component: FeedContentComponent},
  { path: 'message-content', component: MessagesContentComponent},
  {path: 'connections-content', component: ConnectionsContentComponent},
  { path: '',   redirectTo: '/login-screen', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
