import { Component } from '@angular/core';

@Component({
  selector: 'app-desktop-slider-section',
  template: `
      <swiper-container class="mySwiper" effect="coverflow" grab-cursor="true" centered-slides="true" loop="true"
                        slides-per-view="2" coverflow-effect-rotate="50" coverflow-effect-stretch="0" coverflow-effect-depth="100"
                        coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true" autoplay-delay="5000">
          <swiper-slide>
              <img class="hidden lg:block" src="/assets/img/movie-images/f7839864-8ca7-4c65-9eb0-b078a14b46bd.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
              <img class="hidden lg:block" src="/assets/img/movie-images/ccf17b34-8d7c-4eb7-9a7e-99c91bb62d1b.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
              <img class="hidden lg:block" src="/assets/img/movie-images/d460ee4a-d2c4-4890-90a5-a3655c68e699.png" alt="">
          </swiper-slide>
          <swiper-slide>
              <img class="hidden lg:block" src="/assets/img/movie-images/39e99da4-6a02-40fd-888c-6839fdc00408.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
              <img class="hidden lg:block" src="/assets/img/movie-images/f7839864-8ca7-4c65-9eb0-b078a14b46bd.jpg" alt="">
          </swiper-slide>
      </swiper-container>

      <swiper-container class="mySwiper" loop="true" slides-per-view="5"
                        centered-slides="true" autoplay-delay="10000" autoplay-disable-on-interaction="true"
                        freemode="true">
          <swiper-slide>
              <img src="/assets/img/movie-images/43f23679-99b1-4669-9299-2288471e6621.jpg" alt="">
              <div class="slider-details">
                  <h3 class="font-light mt-3">FLASH (3D)</h3>
                  <div class="text-xs tracking-wide">Now Showing</div>
                  <button class="mobile-slider__btn--buy-tickets btn--buy-tickets">
                      <img src="/assets/img/icons/menu-white.svg" alt="">
                      <span>BUY TICKETS</span>
                  </button>
              </div>
          </swiper-slide>
          <swiper-slide>
              <img src="/assets/img/movie-images/256c6ac6-8563-4b10-a499-d4bc13ec3826.jpg" alt="">
              <div class="slider-details">
                  <h3 class="font-light mt-3">TRANSFORMERS: RISE OF THE BEATS</h3>
                  <div class="text-xs tracking-wide">Now Showing</div>
                  <button class="mobile-slider__btn--buy-tickets btn--buy-tickets">
                      <img src="/assets/img/icons/menu-white.svg" alt="">
                      <span>BUY TICKETS</span>
                  </button>
              </div>
          </swiper-slide>
          <swiper-slide>
              <img src="/assets/img/movie-images/af27acdd-c55a-464c-be6e-d34a6e24cc07.png" alt="">
              <div class="slider-details">
                  <h3 class="font-light mt-3">FAST AND FURIOUS (3D)</h3>
                  <div class="text-xs tracking-wide">Now Showing</div>
                  <button class="mobile-slider__btn--buy-tickets btn--buy-tickets">
                      <img src="/assets/img/icons/menu-white.svg" alt="">
                      <span>BUY TICKETS</span>
                  </button>
              </div>
          </swiper-slide>
          <swiper-slide>
              <img src="/assets/img/movie-images/d36c99a4-2622-4aed-bacd-721594a94201.jpg" alt="">
              <div class="slider-details">
                  <h3 class="font-light mt-3">SPIDER MAN (3D)</h3>
                  <div class="text-xs tracking-wide">Now Showing</div>
                  <button class="mobile-slider__btn--buy-tickets btn--buy-tickets">
                      <img src="/assets/img/icons/menu-white.svg" alt="">
                      <span>BUY TICKETS</span>
                  </button>
              </div>
          </swiper-slide>
          <swiper-slide>
              <img src="/assets/img/movie-images/fbebbef6-3b0d-4c06-b862-cbe7bc2e7142.jpg" alt="">
              <div class="slider-details">
                  <h3 class="font-light mt-3">LITTLE MERMAID</h3>
                  <div class="text-xs tracking-wide">Now Showing</div>
                  <button class="mobile-slider__btn--buy-tickets btn--buy-tickets">
                      <img src="/assets/img/icons/menu-white.svg" alt="">
                      <span>BUY TICKETS</span>
                  </button>
              </div>
          </swiper-slide>
      </swiper-container>

  `,
  styleUrl: './desktop-slider-section.component.scss'
})
export class DesktopSliderSectionComponent {

}
