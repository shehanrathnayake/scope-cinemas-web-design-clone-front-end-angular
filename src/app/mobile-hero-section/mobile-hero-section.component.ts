import { Component } from '@angular/core';
import Swiper from "swiper";

@Component({
  selector: 'app-mobile-hero-section',
  template: `

<!--      Mobile hero section-->

      <swiper-container class="mySwiper lg:hidden" pagination="true" pagination-clickable="true" space-between="30" loop="true"
                        centered-slides="true" autoplay-delay="2500" effect="fade">
          <swiper-slide>
              <div class="hero--mobile-wrapper">
                  <div class="hero__div--status">NOW SHOWING AT SCOPE CINEMAS</div>
                  <h2 class="text-xl mt-1.5">FLASH (3D)</h2>
                  <div class="flex gap-2">
                      <button class="hero__btn hero__btn--buy-tickets btn--buy-tickets">
                          <div>
                              <img src="/assets/img/icons/menu-white.svg" alt="">
                          </div>
                          <div><span>BUY</span> TICKETS</div>
                      </button>
                      <button class="hero__btn">
                          <div>
                              <img src="/assets/img/icons/trailor-white.svg" alt="">
                          </div>
                          WATCH <span>TRAILER</span>
                      </button>
                  </div>
              </div>
              <img src="/assets/img/movie-images/43f23679-99b1-4669-9299-2288471e6621.jpg" alt="">

          </swiper-slide>
          <swiper-slide>
              <div class="hero--mobile-wrapper">
                  <div class="hero__div--status">NOW SHOWING AT SCOPE CINEMAS</div>
                  <h2 class="text-xl mt-1.5">TRANSFORMERS (3D)</h2>
                  <div class="flex gap-2">
                      <button class="hero__btn hero__btn--buy-tickets btn--buy-tickets">
                          <div>
                              <img src="/assets/img/icons/menu-white.svg" alt="">
                          </div>
                          <div><span>BUY</span> TICKETS</div>
                      </button>
                      <button class="hero__btn">
                          <div>
                              <img src="/assets/img/icons/trailor-white.svg" alt="">
                          </div>
                          WATCH <span>TRAILER</span>
                      </button>
                  </div>
              </div>
              <img src="/assets/img/movie-images/256c6ac6-8563-4b10-a499-d4bc13ec3826.jpg" alt="">

          </swiper-slide>
          <swiper-slide>
              <div class="hero--mobile-wrapper">
                  <div class="hero__div--status">NOW SHOWING AT SCOPE CINEMAS</div>
                  <h2 class="text-xl mt-1.5">FAST AND FURIOUS (3D)</h2>
                  <div class="flex gap-2">
                      <button class="hero__btn hero__btn--buy-tickets btn--buy-tickets">
                          <div>
                              <img src="/assets/img/icons/menu-white.svg" alt="">
                          </div>
                          <div><span>BUY</span> TICKETS</div>
                      </button>
                      <button class="hero__btn">
                          <div>
                              <img src="/assets/img/icons/trailor-white.svg" alt="">
                          </div>
                          WATCH <span>TRAILER</span>
                      </button>
                  </div>
              </div>
              <img src="/assets/img/movie-images/af27acdd-c55a-464c-be6e-d34a6e24cc07.png" alt="">
          </swiper-slide>
          <swiper-slide>
              <div class="hero--mobile-wrapper">
                  <div class="hero__div--status">NOW SHOWING AT SCOPE CINEMAS</div>
                  <h2 class="text-xl mt-1.5">SPIDER MAN: ACROSS THE SPIDER VERSE</h2>
                  <div class="flex gap-2">
                      <button class="hero__btn hero__btn--buy-tickets btn--buy-tickets">
                          <div>
                              <img src="/assets/img/icons/menu-white.svg" alt="">
                          </div>
                          <div><span>BUY</span> TICKETS</div>
                      </button>
                      <button class="hero__btn">
                          <div>
                              <img src="/assets/img/icons/trailor-white.svg" alt="">
                          </div>
                          WATCH <span>TRAILER</span>
                      </button>
                  </div>
              </div>
              <img src="/assets/img/movie-images/d36c99a4-2622-4aed-bacd-721594a94201.jpg" alt="">

          </swiper-slide>
          <swiper-slide>
              <div class="hero--mobile-wrapper">
                  <div class="hero__div--status">NOW SHOWING AT SCOPE CINEMAS</div>
                  <h2 class="text-xl mt-1.5">LITTLE MERMAID</h2>
                  <div class="flex gap-2">
                      <button class="hero__btn hero__btn--buy-tickets btn--buy-tickets">
                          <div>
                              <img src="/assets/img/icons/menu-white.svg" alt="">
                          </div>
                          <div><span>BUY</span> TICKETS</div>
                      </button>
                      <button class="hero__btn">
                          <div>
                              <img src="/assets/img/icons/trailor-white.svg" alt="">
                          </div>
                          WATCH <span>TRAILER</span>
                      </button>
                  </div>
              </div>
              <img src="/assets/img/movie-images/fbebbef6-3b0d-4c06-b862-cbe7bc2e7142.jpg" alt="">

          </swiper-slide>
      </swiper-container>


  `,
  styleUrl: './mobile-hero-section.component.scss'
})
export class MobileHeroSectionComponent {

}
