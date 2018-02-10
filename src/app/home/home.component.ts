import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router'
import { log } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   

  constructor(private router: Router, public auth: AuthService) { }

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
