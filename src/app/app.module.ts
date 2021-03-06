import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule }          from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { DoctorViewPageComponent } from './doctor-view-page/doctor-view-page.component';
import { NurseViewPageComponent } from './nurse-view-page/nurse-view-page.component';
import { UpdatePageComponent } from './update-page/update-page.component';
import { ViewSubPageComponent } from './view-sub-page/view-sub-page.component';
import { ViewdocSubPageComponent } from './viewdoc-sub-page/viewdoc-sub-page.component';


const appRoutes: Routes = [
  { path: 'login-page', component: LoginPageComponent },
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'details-page', component: DetailsPageComponent },
  { path: 'view-page', component: ViewPageComponent },
  { path: 'doctor-view-page', component: DoctorViewPageComponent },
  { path: 'nurse-view-page', component: NurseViewPageComponent },
  { path: 'update-page', component: UpdatePageComponent },
  { path: 'view-sub-page', component: ViewSubPageComponent },
  { path: 'viewdoc-sub-page', component: ViewdocSubPageComponent}
];
;

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    DetailsPageComponent,
    ViewPageComponent,
    DoctorViewPageComponent,
    NurseViewPageComponent,
    UpdatePageComponent,
    ViewSubPageComponent,
    ViewdocSubPageComponent
   
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
