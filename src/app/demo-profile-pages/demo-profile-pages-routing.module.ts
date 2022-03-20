import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoProfilePageComponent } from './demo-profile-page/demo-profile-page.component';

const routes: Routes = [
  {
    path: ':specific-demo',
    component: DemoProfilePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoProfilePagesRoutingModule {}
