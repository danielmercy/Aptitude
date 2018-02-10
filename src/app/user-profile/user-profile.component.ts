import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { ActivatedRoute, Route } from "@angular/router";
import { User } from '../core/user.model'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userUID: string;
  userData: AngularFirestoreDocument<User>;
  userObj: Observable<User>;
  user: any;

  constructor(private afs: AngularFirestore, private route: ActivatedRoute, public auth: AuthService) { 
    this.route.params.subscribe(res => {
      // console.log(res.uid)
      this.userUID = res.uid;
    });
   }

  ngOnInit() {
    this.userData = this.afs.doc(`users/${this.userUID}`);
    this.userObj = this.userData.valueChanges();

    this.userObj.subscribe(res => {
      this.user = res;
    })
    
  }

}
