import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthService } from './auth.service';
import { AuthGaurd } from "./auth.guard";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService, AuthGaurd],
  declarations: []
})
export class CoreModule { }
