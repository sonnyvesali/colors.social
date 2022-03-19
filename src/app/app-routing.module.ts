import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./the-home-page/the-home-page.module').then(
        (m) => m.TheHomePageModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile-pages/profile-pages.module').then(
        (m) => m.ProfilePagesModule
      ),
  },
  {
    path: 'edit-profile',
    loadChildren: () =>
      import('./edit-profile/edit-profile.module').then(
        (m) => m.EditProfileModule
      ),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
