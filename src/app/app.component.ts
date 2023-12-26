import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="bg-color--primary">
          <app-header/>
      </div>


    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
