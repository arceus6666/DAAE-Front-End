import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { RestapiService } from './services/restapi.service';
import { LoggerService } from './services/logger.service';
import { appRoutingProviders, routing } from './app.routing';
import { ProfileComponent } from './profile/profile.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { AddFormComponent } from './add-form/add-form.component';
import { ViewFormComponent } from './view-form/view-form.component';
import { AdminConfigComponent } from './admin-config/admin-config.component';
import { InsertFormComponent } from './insert-form/insert-form.component';
import { InsertStudentComponent } from './insert-student/insert-student.component';
import { RegistryComponent } from './registry/registry.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { GuardianGuard } from './guards/guardian.guard';
import { InitPageComponent } from './init-page/init-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    ProfileComponent,
    SearchFormComponent,
    SearchStudentComponent,
    AddFormComponent,
    ViewFormComponent,
    AdminConfigComponent,
    InsertFormComponent,
    InsertStudentComponent,
    RegistryComponent,
    ForbiddenComponent,
    InitPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    RestapiService,
    LoggerService,
    GuardianGuard,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

