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
import { InsertStudentComponent } from './insert-student/insert-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ViewImageComponent } from './view-image/view-image.component';
import { InsertRegistryComponent } from './insert-registry/insert-registry.component';
import { ManageAccountsComponent } from './manage-accounts/manage-accounts.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdminGuardGuard } from './guards/admin-guard.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {
    path: '', component: InitPageComponent, canActivateChild: [GuardianGuard], children: [
      //{ path: '', component: HomeComponent },
      { path: 'daae', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'search-form', component: SearchFormComponent },
      { path: 'search-student', component: SearchStudentComponent },
      { path: 'view-form/:id', component: ViewFormComponent },
      { path: 'view-image/:id', component: ViewImageComponent },
      { path: 'insert-form', component: InsertFormComponent },
      { path: 'insert-student', component: InsertStudentComponent },
      { path: 'insert-registry', component: InsertRegistryComponent },
      { path: 'edit-student/:id', component: EditStudentComponent },
    ]
  },
  {
    path: '', component: InitPageComponent, canActivateChild: [AdminGuardGuard], children: [
      { path: 'manage-accounts', component: ManageAccountsComponent },
      { path: 'edit-user/:id', component: EditUserComponent },
    ]
  },
  { path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
