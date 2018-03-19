import { Component, OnInit } from '@angular/core';
import { AuthService } from "./core/auth.service";
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(public auth: AuthService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon('google-svg',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/google.svg'));
    iconRegistry.addSvgIcon('facebook-svg',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg'));
  }

  ngOnInit() {
  }

}

