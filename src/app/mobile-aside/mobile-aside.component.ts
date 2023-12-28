import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-mobile-aside',
  template: `
    <div class="aside" [class.active]="isOpen">
      <ul class="mt-[35px] px-4">
      <li><a href="#">HOME</a></li>
      <li><a href="#">MOVIES</a></li>
      <li><a href="#">LOCATIONS</a></li>
      <li><a href="#">DEALS AND EXCLUSIVES</a></li>
      <li><a href="#">SCOPE PRIVILEGE</a></li>
      <li><a href="#">ADVERTISE</a></li>
      </ul>
    </div>
  `,
  styleUrl: './mobile-aside.component.scss'
})
export class MobileAsideComponent {
  @Input()
  isOpen:boolean = false;
}
