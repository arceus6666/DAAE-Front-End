import { RouterModule, Routes, CanActivate } from '@angular/router';
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
import { AddFormComponent } from './add-form/add-form.component';

const appRoutes: Routes = [
  {
    path: '', component: InitPageComponent, canActivateChild: [GuardianGuard], children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'daae', component: HomeComponent },
      { path: 'profile', component: ProfileComponent, canActivate: [GuardianGuard] },
      { path: 'search-form', component: SearchFormComponent },
      { path: 'search-student', component: SearchStudentComponent },
      { path: 'view-form/:id', component: ViewFormComponent },
      { path: 'insert-form', component: InsertFormComponent },
      { path: 'admin-config', component: AdminConfigComponent },
      { path: 'add-form', component: AddFormComponent }
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
