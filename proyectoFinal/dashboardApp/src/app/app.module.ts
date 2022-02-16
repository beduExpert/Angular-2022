import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import { ToLowerCaseDirective } from './core/directives/to-lower-case/to-lower-case.directive';
import { DateCustomPipe } from './core/pipes/date-custom/date-custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ToLowerCaseDirective,
    DateCustomPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
