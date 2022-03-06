import { NgModule } from '@angular/core';
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

const components = [
  ShellComponent,
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
  RouterModule,
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...modules, ...components],
})
export class SharedModule {}

//ok so now let's C && P
