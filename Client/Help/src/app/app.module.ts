import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { LoginInputsComponent } from './components/login-inputs/login-inputs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SetupNameComponent } from './components/setup-name/setup-name.component';
import { FeedContentComponent } from './components/feed-content/feed-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    LoginInputsComponent,
    SetupNameComponent,
    FeedContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
