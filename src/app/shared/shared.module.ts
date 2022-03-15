import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ErrorComponent } from '../error/error.component';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ShellComponent } from './shell/shell.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { NicheChipsListComponent } from './niche-chips-list/niche-chips-list.component';
import { SkillsChipsListComponent } from './skills-chips-list/skills-chips-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrontFacingNicheChipsComponent } from './front-facing-niche-chips/front-facing-niche-chips.component';
import { FrontFacingSkillChipsComponent } from './front-facing-skill-chips/front-facing-skill-chips.component';

const components = [
  FrontFacingNicheChipsComponent,
  FrontFacingSkillChipsComponent,
  ShellComponent,
  ErrorComponent,
  NicheChipsListComponent,
  SkillsChipsListComponent,
];

const modules = [
  CommonModule,
  MatCheckboxModule,
  FormsModule,
  ReactiveFormsModule,
  MatDialogModule,
  MatSelectModule,
  MatChipsModule,
  MatButtonModule,
  MatToolbarModule,
  AngularFireModule,
  AngularFireStorageModule,
  MatIconModule,
  TextFieldModule,
  LayoutModule,
  MatStepperModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatExpansionModule,
  RouterModule,
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...modules, ...components],
})
export class SharedModule {}

//ok so now let's C && P
