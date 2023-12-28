import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
      <div class="header flex justify-between items-center ps-4 pe-2.5">
          <div>
              <img class="header__img--logo" src="/assets/img/logo/scope-cinemas-logo-w.png" alt="">
          </div>
          <div class="flex items-center justify-end header__icons-container">
              <button class="btn--buy-tickets header__btn--buy-tickets-font me-2">BUY TICKETS</button>
              <img class="header__icons" src="/assets/img/icons/login.svg" alt="">
              <div [class.active]="isOpen" (click)="toggleAsideEvent.emit()">
                  <img class="header__icons--list {{isOpen? 'hidden':'block'}}" src="/assets/img/icons/list-svg.svg" alt="">
                  <img class="header__icons--close {{isOpen? 'block':'hidden'}}" src="/assets/img/icons/close-bot.svg" alt="">
              </div>

          </div>
      </div>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleAsideEvent = new EventEmitter<void>();
  @Input()
  isOpen: boolean = false;
}
