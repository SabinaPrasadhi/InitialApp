import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule }          from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ViewPageComponent } from './view-page/view-page.component';

const appRoutes: Routes = [
  { path: 'login-page', component: LoginPageComponent },
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'details-page', component: DetailsPageComponent },
  { path: 'view-page', component: ViewPageComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    DetailsPageComponent,
    ViewPageComponent
  ],
  imports: [
  
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
