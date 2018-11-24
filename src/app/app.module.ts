import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { RestapiService } from './services/restapi.service';
import { LoggerService } from './services/logger.service';
import { appRoutingProviders, routing } from './app.routing';
import { ProfileComponent } from './profile/profile.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchStudentComponent } from './search-student/search-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    LogoutComponent,
    ProfileComponent,
    SearchFormComponent,
    SearchStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    RestapiService,
    LoggerService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
