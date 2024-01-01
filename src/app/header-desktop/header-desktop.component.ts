import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-header-desktop',
  template: `
      <div class="header-desktop items-center" [ngClass]="{'initial-header':!isScrolled, 'scrolled-header':isScrolled}">
          <div class="flex items-center gap-5">
              <img class="header__img cursor-pointer" [ngClass]="{'initial-width':!isScrolled, 'scrolled-width': isScrolled}" src="/assets/img/logo/scope-cinemas-logo-w.png" alt="">
              <a class="border-l ps-4 text-[13px]" href="#">Sign in<br>SCOPE PRIVILEGE</a>
          </div>
          <div>
              <ul class="flex gap-4 tracking-widest">
                  <li><a class="active" href="#">HOME</a></li>
                  <li><a href="#">MOVIES</a></li>
                  <li><a href="#">LOCATIONS</a></li>
                  <li><a href="#">DEALS AND EXCLUSIVES</a></li>
                  <li><a href="#">ADVERTISE</a></li>
              </ul>
          </div>
          <div class="flex gap-4">
              <button class="btn--buy-tickets tracking-widest">
                  <div>BUY TICKETS</div>
              </button>
              <button class="btn-login tracking-widest">LOGIN</button>
          </div>
      </div>
  `,
  styleUrl: './header-desktop.component.scss'
})
export class HeaderDesktopComponent {
  isScrolled: boolean = false;
  @HostListener('window:scroll',[])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
