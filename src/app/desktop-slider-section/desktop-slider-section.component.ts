import { Component } from '@angular/core';

@Component({
  selector: 'app-desktop-slider-section',
  template: `

      <div class="w-full flex justify-center items-center">
          <h2 class="text-end text-white text-[28px] font-light tracking-widest w-[1024px] me-6">NOW SHOWING</h2>
          <div class="flex gap-2">
              <img class="cursor-pointer w-6" src="/assets/img/icons/back-white.svg" alt="">
              <img class="cursor-pointer w-6" src="/assets/img/icons/next-white.svg" alt="">
          </div>
      </div>

      <swiper-container class="mySwiper" effect="coverflow" grab-cursor="true" centered-slides="true" loop="true"
                        slides-per-view="2" coverflow-effect-rotate="50" coverflow-effect-stretch="0" coverflow-effect-depth="100"
                        coverflow-effect-modifier="1" coverflow-effect-slide-shadows="false" autoplay-delay="5000" initialSlide="1" removeClippedSubviews=false>
          <swiper-slide>
              <div class="now-showing--desktop-wrapper">
                  <h2>FLASH (3D)</h2>
                  <div class="flex gap-12">
                      <button class="now-showing__btn">
                          <div>
                              <img class="now-showing__icon--white" src="/assets/img/icons/menu-white.svg" alt="">
                              <img class="now-showing__icon--pink" src="/assets/img/icons/menu-pink.svg" alt="">
                          </div>
                          <div>
                              <div class="text-start pb-1"><span>BUY</span> TICKETS <br><span>ONLINE</span></div>
                              <div class="indicator-now-showing"></div>
                          </div>
                      </button>
                      <button class="now-showing__btn">
                          <div>
                              <img class="now-showing__icon--white" src="/assets/img/icons/trailor-white.svg" alt="">
                              <img class="now-showing__icon--pink" src="/assets/img/icons/trailor-pink.svg" alt="">
                          </div>
                          <div>
                              <div class="text-start pb-1">
                                  WATCH<br>
                                  <span>TRAILER</span>
                              </div>
                              <div class="indicator-now-showing"></div>
                          </div>
                      </button>
                  </div>
              </div>
              <img src="/assets/img/movie-images/f7839864-8ca7-4c65-9eb0-b078a14b46bd.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
              <div class="now-showing--desktop-wrapper">
                  <h2>TRANSFORMERS (3D)</h2>
                  <div class="flex gap-12">
                      <button class="now-showing__btn">
                          <div>
                              <img class="now-showing__icon--white" src="/assets/img/icons/menu-white.svg" alt="">
                              <img class="now-showing__icon--pink" src="/assets/img/icons/menu-pink.svg" alt="">
                          </div>
                          <div>
                              <div class="text-start pb-1"><span>BUY</span> TICKETS <br><span>ONLINE</span></div>
                              <div class="indicator-now-showing"></div>
                          </div>
                      </button>
                      <button class="now-showing__btn">
                          <div>
                              <img class="now-showing__icon--white" src="/assets/img/icons/trailor-white.svg" alt="">
                              <img class="now-showing__icon--pink" src="/assets/img/icons/trailor-pink.svg" alt="">
                          </div>
                          <div>
                              <div class="text-start pb-1">
                                  WATCH<br>
                                  <span>TRAILER</span>
                              </div>
                              <div class="indicator-now-showing"></div>
                          </div>
                      </button>
                  </div>
              </div>
              <img src="/assets/img/movie-images/ccf17b34-8d7c-4eb7-9a7e-99c91bb62d1b.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
              <div class="now-showing--desktop-wrapper">
                  <h2>FAST AND FURIOUS (3D)</h2>
                  <div class="flex gap-12">
                      <button class="now-showing__btn">
                          <div>
                              <img class="now-showing__icon--white" src="/assets/img/icons/menu-white.svg" alt="">
                              <img class="now-showing__icon--pink" src="/assets/img/icons/menu-pink.svg" alt="">
                          </div>
                          <div>
                              <div class="text-start pb-1"><span>BUY</span> TICKETS <br><span>ONLINE</span></div>
                              <div class="indicator-now-showing"></div>
                          </div>
                      </button>
                      <button class="now-showing__btn">
                          <div>
                              <img class="now-showing__icon--white" src="/assets/img/icons/trailor-white.svg" alt="">
                              <img class="now-showing__icon--pink" src="/assets/img/icons/trailor-pink.svg" alt="">
                          </div>
                          <div>
                              <div class="text-start pb-1">
                                  WATCH<br>
                                  <span>TRAILER</span>
                              </div>
                              <div class="indicator-now-showing"></div>
                          </div>
                      </button>
                  </div>
              </div>
              <img src="/assets/img/movie-images/d460ee4a-d2c4-4890-90a5-a3655c68e699.png" alt="">
          </swiper-slide>
          <swiper-slide>
              <div class="now-showing--desktop-wrapper">
                  <h2>SPIDER MAN: ACROSS THE SPIDER VERSE (3D)</h2>
                  <div class="flex gap-12">
                      <button class="now-showing__btn">
                          <div>
                              <img class="now-showing__icon--white" src="/assets/img/icons/menu-white.svg" alt="">
                              <img class="now-showing__icon--pink" src="/assets/img/icons/menu-pink.svg" alt="">
                          </div>
                          <div>
                              <div class="text-start pb-1"><span>BUY</span> TICKETS <br><span>ONLINE</span></div>
                              <div class="indicator-now-showing"></div>
                          </div>
                      </button>
                      <button class="now-showing__btn">
                          <div>
                              <img class="now-showing__icon--white" src="/assets/img/icons/trailor-white.svg" alt="">
                              <img class="now-showing__icon--pink" src="/assets/img/icons/trailor-pink.svg" alt="">
                          </div>
                          <div>
                              <div class="text-start pb-1">
                                  WATCH<br>
                                  <span>TRAILER</span>
                              </div>
                              <div class="indicator-now-showing"></div>
                          </div>
                      </button>
                  </div>
              </div>
              <img src="/assets/img/movie-images/39e99da4-6a02-40fd-888c-6839fdc00408.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
              <div class="now-showing--desktop-wrapper">
                  <h2>LITTLE MERMAID (3D)</h2>
                  <div class="flex gap-12">
                      <button class="now-showing__btn">
                          <div>
                              <img class="now-showing__icon--white" src="/assets/img/icons/menu-white.svg" alt="">
                              <img class="now-showing__icon--pink" src="/assets/img/icons/menu-pink.svg" alt="">
                          </div>
                          <div>
                              <div class="text-start pb-1"><span>BUY</span> TICKETS <br><span>ONLINE</span></div>
                              <div class="indicator-now-showing"></div>
                          </div>
                      </button>
                      <button class="now-showing__btn">
                          <div>
                              <img class="now-showing__icon--white" src="/assets/img/icons/trailor-white.svg" alt="">
                              <img class="now-showing__icon--pink" src="/assets/img/icons/trailor-pink.svg" alt="">
                          </div>
                          <div>
                              <div class="text-start pb-1">
                                  WATCH<br>
                                  <span>TRAILER</span>
                              </div>
                              <div class="indicator-now-showing"></div>
                          </div>
                      </button>
                  </div>
              </div>
              <img src="/assets/img/movie-images/368d7394-74d4-4bb7-a1ef-c9ba8ca0c3a9.jpg" alt="">
          </swiper-slide>
      </swiper-container>

      <div class="w-[1024px] mx-auto flex justify-start items-center">
          <h2 class="text-start text-white text-[28px] font-light tracking-widest me-6">COMING SOON</h2>
          <div class="flex gap-2">
              <img class="cursor-pointer w-6" src="/assets/img/icons/back-white.svg" alt="">
              <img class="cursor-pointer w-6" src="/assets/img/icons/next-white.svg" alt="">
          </div>
      </div>

      <swiper-container class="mySwiper text-white" loop="true" slides-per-view="5.5"
                        centered-slides="true" autoplay-delay="10000" autoplay-disable-on-interaction="true"
                        freemode="true">
          <swiper-slide>
              <div class="swiper-slide__image-wrapper">
                  <img src="/assets/img/movie-images/43f23679-99b1-4669-9299-2288471e6621.jpg" alt="">
              </div>
              <div class="ps-4 z-10">
                  <h3 class="font-light mt-2.5">FLASH (3D)</h3>
                  <div class="text-xs tracking-wide">IN CINEMAS 14TH FEBRUARY</div>
                  <button class="slider__btn mt-6">
                      <div>
                          <img class="slider__icon--white" src="/assets/img/icons/trailor-white.svg" alt="">
                          <img class="slider__icon--pink" src="/assets/img/icons/trailor-pink.svg" alt="">
                      </div>
                      <div class="flex items-start gap-20">
                          <div class="w-[60px] text-start pb-1">
                              WATCH<br>
                              <span>TRAILER</span>
                          </div>
                          <div class="indicator"></div>
                      </div>
                  </button>
                  <button class="slider__btn mt-2">
                      <div>
                          <img class="slider__icon--white" src="/assets/img/icons/more-info-white.svg" alt="">
                          <img class="slider__icon--pink" src="/assets/img/icons/more-info-pink.svg" alt="">
                      </div>
                      <div class="flex items-start gap-20">
                          <div class="w-[60px] text-start pb-1">
                              MORE<br>
                              <span>INFO</span>
                          </div>
                          <div class="indicator"></div>
                      </div>
                  </button>
              </div>
          </swiper-slide>
          <swiper-slide class="bg-blue-900">
              <div class="swiper-slide__image-wrapper">
                  <img src="/assets/img/movie-images/256c6ac6-8563-4b10-a499-d4bc13ec3826.jpg" alt="">
              </div>
              <div class="ps-4 h-full">
                  <h3 class="font-light mt-2.5">TRANSFORMERS (3D)</h3>
                  <div class="text-xs tracking-wide">IN CINEMAS 14TH FEBRUARY</div>
                  <button class="slider__btn mt-6">
                      <div>
                          <img class="slider__icon--white" src="/assets/img/icons/trailor-white.svg" alt="">
                          <img class="slider__icon--pink" src="/assets/img/icons/trailor-pink.svg" alt="">
                      </div>
                      <div class="flex items-start gap-20">
                          <div class="w-[60px] text-start pb-1">
                              WATCH<br>
                              <span>TRAILER</span>
                          </div>
                          <div class="indicator"></div>
                      </div>
                  </button>
                  <button class="slider__btn mt-2">
                      <div>
                          <img class="slider__icon--white" src="/assets/img/icons/more-info-white.svg" alt="">
                          <img class="slider__icon--pink" src="/assets/img/icons/more-info-pink.svg" alt="">
                      </div>
                      <div class="flex items-start gap-20">
                          <div class="w-[60px] text-start pb-1">
                              MORE<br>
                              <span>INFO</span>
                          </div>
                          <div class="indicator"></div>
                      </div>
                  </button>
              </div>
          </swiper-slide>
          <swiper-slide>
              <div class="swiper-slide__image-wrapper">
                  <img src="/assets/img/movie-images/af27acdd-c55a-464c-be6e-d34a6e24cc07.png" alt="">
              </div>
              <div class="ps-4">
                  <h3 class="font-light mt-2.5">FAST AND FURIOUS (3D)</h3>
                  <div class="text-xs tracking-wide">IN CINEMAS 14TH FEBRUARY</div>
                  <button class="slider__btn mt-6">
                      <div>
                          <img class="slider__icon--white" src="/assets/img/icons/trailor-white.svg" alt="">
                          <img class="slider__icon--pink" src="/assets/img/icons/trailor-pink.svg" alt="">
                      </div>
                      <div class="flex items-start gap-20">
                          <div class="w-[60px] text-start pb-1">
                              WATCH<br>
                              <span>TRAILER</span>
                          </div>
                          <div class="indicator"></div>
                      </div>
                  </button>
                  <button class="slider__btn mt-2">
                      <div>
                          <img class="slider__icon--white" src="/assets/img/icons/more-info-white.svg" alt="">
                          <img class="slider__icon--pink" src="/assets/img/icons/more-info-pink.svg" alt="">
                      </div>
                      <div class="flex items-start gap-20">
                          <div class="w-[60px] text-start pb-1">
                              MORE<br>
                              <span>INFO</span>
                          </div>
                          <div class="indicator"></div>
                      </div>
                  </button>
              </div>
          </swiper-slide>
          <swiper-slide class="bg-blue-900">
              <div class="swiper-slide__image-wrapper">
                  <img src="/assets/img/movie-images/d36c99a4-2622-4aed-bacd-721594a94201.jpg" alt="">
              </div>
              <div class="ps-4">
                  <h3 class="font-light mt-2.5">SPIDER MAN: ACROSS THE SPIDER VERSE</h3>
                  <div class="text-xs tracking-wide">IN CINEMAS 14TH FEBRUARY</div>
                  <button class="slider__btn mt-6">
                      <div>
                          <img class="slider__icon--white" src="/assets/img/icons/trailor-white.svg" alt="">
                          <img class="slider__icon--pink" src="/assets/img/icons/trailor-pink.svg" alt="">
                      </div>
                      <div class="flex items-start gap-20">
                          <div class="w-[60px] text-start pb-1">
                              WATCH<br>
                              <span>TRAILER</span>
                          </div>
                          <div class="indicator"></div>
                      </div>
                  </button>
                  <button class="slider__btn mt-2">
                      <div>
                          <img class="slider__icon--white" src="/assets/img/icons/more-info-white.svg" alt="">
                          <img class="slider__icon--pink" src="/assets/img/icons/more-info-pink.svg" alt="">
                      </div>
                      <div class="flex items-start gap-20">
                          <div class="w-[60px] text-start pb-1">
                              MORE<br>
                              <span>INFO</span>
                          </div>
                          <div class="indicator"></div>
                      </div>
                  </button>
              </div>
          </swiper-slide>
          <swiper-slide>
              <div class="swiper-slide__image-wrapper">
                  <img src="/assets/img/movie-images/fbebbef6-3b0d-4c06-b862-cbe7bc2e7142.jpg" alt="">
              </div>
              <div class="ps-4">
                  <h3 class="font-light mt-2.5">LITTLE MERMAID (3D)</h3>
                  <div class="text-xs tracking-wide">IN CINEMAS 14TH FEBRUARY</div>
                  <button class="slider__btn mt-6">
                      <div>
                          <img class="slider__icon--white" src="/assets/img/icons/trailor-white.svg" alt="">
                          <img class="slider__icon--pink" src="/assets/img/icons/trailor-pink.svg" alt="">
                      </div>
                      <div class="flex items-start gap-20">
                          <div class="w-[60px] text-start pb-1">
                              WATCH<br>
                              <span>TRAILER</span>
                          </div>
                          <div class="indicator"></div>
                      </div>
                  </button>
                  <button class="slider__btn mt-2">
                      <div>
                          <img class="slider__icon--white" src="/assets/img/icons/more-info-white.svg" alt="">
                          <img class="slider__icon--pink" src="/assets/img/icons/more-info-pink.svg" alt="">
                      </div>
                      <div class="flex items-start gap-20">
                          <div class="w-[60px] text-start pb-1">
                              MORE<br>
                              <span>INFO</span>
                          </div>
                          <div class="indicator"></div>
                      </div>
                  </button>
              </div>
          </swiper-slide>
      </swiper-container>

  `,
  styleUrl: './desktop-slider-section.component.scss'
})
export class DesktopSliderSectionComponent {

}
