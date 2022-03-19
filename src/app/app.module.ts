import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { SharedModule } from './shared/shared.module';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
// import { USE_EMULATOR } from '@angular/fire/compat/storage';
// import { SETTINGS } from '@angular/fire/compat/auth';
// import { USE_EMULATOR as FIRESTORE_EMULATOR } from '@angular/fire/compat/firestore';
// import { USE_EMULATOR as AUTH_EMULATOR } from '@angular/fire/compat/auth';
import { ProjectCardsModule } from './project-cards/project-cards.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ProjectCardsModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
  ],
  providers: [
    // {
    //   provide: AUTH_EMULATOR,
    //   useValue: environment.production ? undefined : ['http://localhost/9099'],
    // },
    // {
    //   provide: FIRESTORE_EMULATOR,
    //   useValue: environment.production ? undefined : ['http://localhost/8080'],
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
