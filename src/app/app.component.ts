import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="bg-color--primary">
          <app-header (toggleAsideEvent)="toggleAside()" [isOpen]="asideOpen" class="fixed top-0 left-0 right-0 z-20"/>
          <app-mobile-aside class="fixed {{asideOpen ? 'bottom-0 top-0' : '-top-[100vh]'}}  left-0 right-0 z-10" [isOpen]="asideOpen" />
          <app-mobile-hero-section/>
          <app-mobile-slider-section/>

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
