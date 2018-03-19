import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router'
import { log } from 'util';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   

  constructor(private router: Router, public auth: AuthService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon('google',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/google.svg'));
    iconRegistry.addSvgIcon('facebook',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg'));
  }

  ngOnInit() {
    setInterval(a => {
      const isOnline: boolean = navigator.onLine;
      console.log(isOnline);
    }, 3000)
  }

  showProfile(uid) {
    this.router.navigateByUrl(`user/${uid}`);
  }

  

}
