import { Component } from '@angular/core';
import Swiper from "swiper";

@Component({
  selector: 'app-mobile-hero-section',
  template: `
      <div class="hero-container ">
          <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" space-between="0" loop="true"
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
                  <img class="lg:hidden" src="/assets/img/movie-images/43f23679-99b1-4669-9299-2288471e6621.jpg" alt="">
                  <img class="hidden lg:block" src="/assets/img/movie-images/f7839864-8ca7-4c65-9eb0-b078a14b46bd.jpg" alt="">
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
                  <img class="lg:hidden" src="/assets/img/movie-images/256c6ac6-8563-4b10-a499-d4bc13ec3826.jpg" alt="">
                  <img class="hidden lg:block" src="/assets/img/movie-images/ccf17b34-8d7c-4eb7-9a7e-99c91bb62d1b.jpg" alt="">
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
                  <img class="lg:hidden" src="/assets/img/movie-images/af27acdd-c55a-464c-be6e-d34a6e24cc07.png" alt="">
                  <img class="hidden lg:block" src="/assets/img/movie-images/d460ee4a-d2c4-4890-90a5-a3655c68e699.png" alt="">
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
                  <img class="lg:hidden" src="/assets/img/movie-images/d36c99a4-2622-4aed-bacd-721594a94201.jpg" alt="">
                  <img class="hidden lg:block" src="/assets/img/movie-images/39e99da4-6a02-40fd-888c-6839fdc00408.jpg" alt="">
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
                  <img class="lg:hidden" src="/assets/img/movie-images/fbebbef6-3b0d-4c06-b862-cbe7bc2e7142.jpg" alt="">
                  <img class="hidden lg:block" src="/assets/img/movie-images/f7839864-8ca7-4c65-9eb0-b078a14b46bd.jpg" alt="">
              </swiper-slide>
          </swiper-container>

          <div class="hero__side-bar cursor-pointer">
              <div class="text-4xl font-bold leading-none hover:text-pink-600">BUY</div>
              <div class="text-lg tracking-wider font-light leading-none">TICKETS</div>
              <div class="text-xl font-bold tracking-wide leading-none pb-14">ONLINE</div>
          </div>
      </div>


  `,
  styleUrl: './mobile-hero-section.component.scss'
})
export class MobileHeroSectionComponent {

}
