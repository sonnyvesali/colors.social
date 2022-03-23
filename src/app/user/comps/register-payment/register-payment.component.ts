import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { loadStripe } from '@stripe/stripe-js';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { take } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

var Stripe: any;

@Component({
  selector: 'app-register-payment',
  templateUrl: './register-payment.component.html',
  styleUrls: ['./register-payment.component.scss'],
})
export class RegisterPaymentComponent implements OnInit {
  constructor(
    private afAuth: AngularFireAuth,
    private af: AngularFirestore,
    private afFunc: AngularFireFunctions
  ) {}

  stripe!: any;
  card!: any;
  cardErrors!: any;

  @Input() amount: any = 100;
  @Input() description: any;
  @ViewChild('cardElement') cardElement!: ElementRef;

  ngOnInit(): void {}
}
