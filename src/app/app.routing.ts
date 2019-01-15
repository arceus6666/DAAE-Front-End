import { RouterModule, Routes, CanActivate, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { ViewFormComponent } from './view-form/view-form.component';
import { AdminConfigComponent } from './admin-config/admin-config.component';
import { InsertFormComponent } from './insert-form/insert-form.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { GuardianGuard } from './guards/guardian.guard';
import { InitPageComponent } from './init-page/init-page.component';
import {InsertStudentComponent} from './insert-student/insert-student.component';
import {EditStudentComponent} from './edit-student/edit-student.component';

const appRoutes: Routes = [
  {
    path: '', component: InitPageComponent, canActivateChild: [GuardianGuard], children: [
      //{ path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '', component: HomeComponent },
      { path: 'daae', component: HomeComponent },
      { path: 'profile', component: ProfileComponent, canActivate: [GuardianGuard] },
      { path: 'search-form', component: SearchFormComponent },
      { path: 'search-student', component: SearchStudentComponent },
      { path: 'view-form/:id', component: ViewFormComponent },
      { path: 'insert-form', component: InsertFormComponent },
      { path: 'admin-config', component: AdminConfigComponent }
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'insert-student', component: InsertStudentComponent },
  { path: 'edit-student', component: EditStudentComponent },
  { path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
