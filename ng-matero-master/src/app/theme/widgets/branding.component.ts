import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <a class="matero-branding" href="/">
      <img src="./assets/images/BHEL.bmp" class="matero-branding-logo-expanded" alt="logo" />
      <span class="matero-branding-name">BHEL SOLAR</span>
    </a>
  `,
})
export class BrandingComponent {}
