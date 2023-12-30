import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
      <div class="footer">
          <div class="footer__sides"></div>
          <div class="footer__section1">
              <h2 class="px-4 pt-8 pb-4 text-white font-light text-sm">FIND US ON APP STORE AND GOOGLE PLAY</h2>
              <div class="footer__img--download">
                  <img src="/assets/img/icons/apple-store.png" alt="">
                  <img src="/assets/img/icons/playstore.png" alt="">
              </div>
          </div>

          <div class="footer__section2">
              <div class="footer__img--social">
                  <img src="/assets/img/icons/facebook-gray.svg" alt="">
                  <img src="/assets/img/icons/instagram-gray.svg" alt="">
              </div>
              <div>
                  <div class="footer__menu">
                      <ul>
                          <li><a href="#">HOME</a></li>
                          <li><a href="#">MOVIES</a></li>
                          <li><a href="#">LOCATIONS</a></li>
                          <li><a href="#">DEALS AND EXCLUSIVE</a></li>
                          <li><a href="#">ADVERTISE</a></li>
                          <li><a href="#">ABOUT US</a></li>
                      </ul>
                      <ul>
                          <li><a href="#">CAREERS</a></li>
                          <li><a href="#">CONTACT US</a></li>
                          <li><a href="#">EVENTS</a></li>
                          <li><a href="#">DISCLAIMER</a></li>
                          <li><a href="#">TERMS AND CONDITIONS</a></li>
                      </ul>
                  </div>
                  <div class="footer__form--wrapper">
                      <h2 class="footer__form--heading">SUBSCRIBE FOR NEWSLETTER</h2>
                      <form class="mt-1 lg:w-full">
                          <input class="footer__form__input" type="email" placeholder="ENTER EMAIL">
                          <div class="footer__form--submit">
                              <div class="indicator"></div>
                              <button class="text-xs" type="submit">SUBSCRIBE</button>
                          </div>
                      </form>
                  </div>

                  <div class="px-4 lg:ps-0 mt-12 pb-7">
              <span class="text-xs text-slate-500 leading-none">
                  ©2022 Scope Cinemas All Right Reserved. Originally developed by <a href="https://archmage.lk" target="_blank">Archmage Solutions</a> for <a href="http://scopecinemas.com" target="_blank">Scope Cinemas</a>
              </span>
                  </div>
              </div>
          </div>
          <div class="footer__sides bg-[#131334]"></div>
      </div>

  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
