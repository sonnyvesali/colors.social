import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { Router } from '@angular/router';
import { loadStripe } from '@stripe/stripe-js';
import { MixpanelService } from 'src/app/services/analytics/mixpanel.service';
import { UserAndProjectInfoService } from 'src/app/services/user-info/user-and-project-info.service';
@Component({
  selector: 'app-register-flow',
  templateUrl: './register-flow.component.html',
  styleUrls: ['./register-flow.component.scss'],
})
export class RegisterFlowComponent implements OnInit {
  constructor(
    public afAuth: AngularFireAuth,
    private functions: AngularFireFunctions,
    private af: AngularFirestore,
    public userAndProjectInfo: UserAndProjectInfoService,
    private router: Router,
    private mixPanel: MixpanelService // public StepperService: StepperService
  ) {}

  loading = false;

  ngOnInit(): void {
    this.mixPanel.track('Register Page View');
    this.userAndProjectInfo.hasUserPaid();
    if (this.userAndProjectInfo.userHasPaid === true) {
      this.router.navigate(['/']);
    }
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.mixPanel.identifyUser(user.uid);
      }
    });
  }

  async sendToCheckout() {
    this.mixPanel.track('User Attempts to Pay');
    this.loading = true;
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.af
          .doc(`users/${user.uid}`)
          .collection('checkout_sessions')
          .add({
            price: 'price_1KgApNCGxOmPSXOj5xNebYD3',
            mode: 'payment',
            success_url: window.location.origin,
            cancel_url: window.location.href,
          })
          .then((docref: any) => {
            this.functions.httpsCallable(
              'ext-firestore-stripe-payments-createCheckoutSession'
            );
            docref.onSnapshot(async (snap: any) => {
              const { error, sessionId } = snap.data();
              if (error) {
                console.log(error);
              }

              if (sessionId) {
                const stripe = await loadStripe(
                  'pk_live_51Ia5M2CGxOmPSXOjd6e9PswBFuklNNHG1YI2WbhjbtAipY0ZHl0gU2y6RywfEJXHZZkUkREPNcxLTu9WeYH2Bp1l00jKzeXbSo'
                );
                console.log('working on it');
                await stripe?.redirectToCheckout({ sessionId });
                this.loading = false;
              }
            });
          });
      }
    });
  }
}
