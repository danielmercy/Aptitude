import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

export class SvgIconRegister {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('google-svg',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/google.svg'));
    iconRegistry.addSvgIcon('facebook-svg',sanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg'));
  }
}
