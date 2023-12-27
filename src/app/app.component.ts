import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="bg-color--primary">
          <app-header/>
          <app-mobile-hero-section/>
          <app-mobile-slider-section/>
      </div>


    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
