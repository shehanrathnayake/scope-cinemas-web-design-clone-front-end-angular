import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="bg-color--primary">
          <app-header (toggleAsideEvent)="toggleAside()" [isOpen]="asideOpen" class="fixed top-0 left-0 right-0 z-20 lg:hidden"/>
          <app-mobile-aside class="fixed {{asideOpen ? 'bottom-0 top-0' : '-top-[100vh]'}}  left-0 right-0 z-10" [isOpen]="asideOpen" />
          <app-header-desktop class="hidden lg:block"/>

<!--          hero section-->
<!--          <app-mobile-hero-section class="lg:hidden" />-->

          <app-mobile-hero-section class="lg:hidden"/>
          <app-desktop-hero-section class="hidden lg:block"/>

          <app-mobile-slider-section class="lg:hidden"/>
          <app-desktop-slider-section class="hidden lg:block" />

          <app-deals-section/>

          <app-footer/>
      </div>


    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  asideOpen: boolean = false;

  toggleAside() {
    this.asideOpen = !this.asideOpen;
  }
}
