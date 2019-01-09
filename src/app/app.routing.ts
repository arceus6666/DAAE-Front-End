import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { ViewFormComponent } from './view-form/view-form.component';
import { AdminConfigComponent } from './admin-config/admin-config.component';
import { InsertFormComponent } from './insert-form/insert-form.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'search-form', component: SearchFormComponent },
  { path: 'search-student', component: SearchStudentComponent },
  { path: 'view-form', component: ViewFormComponent },
  { path: 'insert-form', component: InsertFormComponent },
  { path: 'admin-config', component: AdminConfigComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: ErrorComponent }
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
