import { Component } from '@angular/core';

@Component({
  selector: 'app-desktop-hero-section',
  template: `
      <!--        Desktop hero section-->
      <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" space-between="0" effect="fade"
                        loop="true" centered-slides="true" autoplay-delay="2500">

          <swiper-slide>
              <div class="hero--desktop-wrapper-wrapper">
                  <div class="hero--desktop-wrapper">
                      <div class="hero__div--status">NOW SHOWING AT SCOPE CINEMAS</div>
                      <h2 class="text-xl mt-1.5">FLASH (3D)</h2>
                      <div class="hero__div--status">BUY TICKETS ONLINE</div>
                      <div class="flex gap-12">
                          <button class="hero__btn">
                              <div>
                                  <img class="hero__icon--white" src="/assets/img/icons/menu-white.svg" alt="">
                                  <img class="hero__icon--pink" src="/assets/img/icons/menu-pink.svg" alt="">
                              </div>
                              <div>
                                  <div class="text-start pb-1"><span>BUY</span> TICKETS <br><span>ONLINE</span></div>
                                  <div class="indicator"></div>
                              </div>
                          </button>
                          <button class="hero__btn">
                              <div>
                                  <img class="hero__icon--white" src="/assets/img/icons/trailor-white.svg" alt="">
                                  <img class="hero__icon--pink" src="/assets/img/icons/trailor-pink.svg" alt="">
                              </div>
                              <div>
                                  <div class="text-start pb-1">
                                      WATCH<br>
                                      <span>TRAILER</span>
                                  </div>
                                  <div class="indicator"></div>
                              </div>
                          </button>
                      </div>
                  </div>
              </div>

              <img src="/assets/img/movie-images/f7839864-8ca7-4c65-9eb0-b078a14b46bd.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
              <div class="hero--desktop-wrapper-wrapper">
                  <div class="hero--desktop-wrapper">
                      <div class="hero__div--status">NOW SHOWING AT SCOPE CINEMAS</div>
                      <h2 class="text-xl mt-1.5">TRANSFORMERS (3D)</h2>
                      <div class="hero__div--status">BUY TICKETS ONLINE</div>
                      <div class="flex gap-12">
                          <button class="hero__btn">
                              <div>
                                  <img class="hero__icon--white" src="/assets/img/icons/menu-white.svg" alt="">
                                  <img class="hero__icon--pink" src="/assets/img/icons/menu-pink.svg" alt="">
                              </div>
                              <div>
                                  <div class="text-start pb-1"><span>BUY</span> TICKETS <br><span>ONLINE</span></div>
                                  <div class="indicator"></div>
                              </div>
                          </button>
                          <button class="hero__btn">
                              <div>
                                  <img class="hero__icon--white" src="/assets/img/icons/trailor-white.svg" alt="">
                                  <img class="hero__icon--pink" src="/assets/img/icons/trailor-pink.svg" alt="">
                              </div>
                              <div>
                                  <div class="text-start pb-1">
                                      WATCH<br>
                                      <span>TRAILER</span>
                                  </div>
                                  <div class="indicator"></div>
                              </div>

                          </button>
                      </div>
                  </div>
              </div>

              <img src="/assets/img/movie-images/ccf17b34-8d7c-4eb7-9a7e-99c91bb62d1b.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
              <div class="hero--desktop-wrapper-wrapper">
                  <div class="hero--desktop-wrapper">
                      <div class="hero__div--status">NOW SHOWING AT SCOPE CINEMAS</div>
                      <h2 class="text-xl mt-1.5">FAST AND FURIOUS (3D)</h2>
                      <div class="hero__div--status">BUY TICKETS ONLINE</div>
                      <div class="flex gap-12">
                          <button class="hero__btn">
                              <div>
                                  <img class="hero__icon--white" src="/assets/img/icons/menu-white.svg" alt="">
                                  <img class="hero__icon--pink" src="/assets/img/icons/menu-pink.svg" alt="">
                              </div>
                              <div>
                                  <div class="text-start pb-1"><span>BUY</span> TICKETS <br><span>ONLINE</span></div>
                                  <div class="indicator"></div>
                              </div>
                          </button>
                          <button class="hero__btn">
                              <div>
                                  <img class="hero__icon--white" src="/assets/img/icons/trailor-white.svg" alt="">
                                  <img class="hero__icon--pink" src="/assets/img/icons/trailor-pink.svg" alt="">
                              </div>
                              <div>
                                  <div class="text-start pb-1">
                                      WATCH<br>
                                      <span>TRAILER</span>
                                  </div>
                                  <div class="indicator"></div>
                              </div>

                          </button>
                      </div>
                  </div>
              </div>

              <img src="/assets/img/movie-images/d460ee4a-d2c4-4890-90a5-a3655c68e699.png" alt="">
          </swiper-slide>
          <swiper-slide>
              <div class="hero--desktop-wrapper-wrapper">
                  <div class="hero--desktop-wrapper">
                      <div class="hero__div--status">NOW SHOWING AT SCOPE CINEMAS</div>
                      <h2 class="text-xl mt-1.5">SPIDER MAN: ACROSS THE SPIDER VERSE (3D)</h2>
                      <div class="hero__div--status">BUY TICKETS ONLINE</div>
                      <div class="flex gap-12">
                          <button class="hero__btn">
                              <div>
                                  <img class="hero__icon--white" src="/assets/img/icons/menu-white.svg" alt="">
                                  <img class="hero__icon--pink" src="/assets/img/icons/menu-pink.svg" alt="">
                              </div>
                              <div>
                                  <div class="text-start pb-1"><span>BUY</span> TICKETS <br><span>ONLINE</span></div>
                                  <div class="indicator"></div>
                              </div>
                          </button>
                          <button class="hero__btn">
                              <div>
                                  <img class="hero__icon--white" src="/assets/img/icons/trailor-white.svg" alt="">
                                  <img class="hero__icon--pink" src="/assets/img/icons/trailor-pink.svg" alt="">
                              </div>
                              <div>
                                  <div class="text-start pb-1">
                                      WATCH<br>
                                      <span>TRAILER</span>
                                  </div>
                                  <div class="indicator"></div>
                              </div>

                          </button>
                      </div>
                  </div>
              </div>

              <img src="/assets/img/movie-images/39e99da4-6a02-40fd-888c-6839fdc00408.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
              <div class="hero--desktop-wrapper-wrapper">
                  <div class="hero--desktop-wrapper">
                      <div class="hero__div--status">NOW SHOWING AT SCOPE CINEMAS</div>
                      <h2 class="text-xl mt-1.5">LITTLE MERMAID (3D)</h2>
                      <div class="hero__div--status">BUY TICKETS ONLINE</div>
                      <div class="flex gap-12">
                          <button class="hero__btn">
                              <div>
                                  <img class="hero__icon--white" src="/assets/img/icons/menu-white.svg" alt="">
                                  <img class="hero__icon--pink" src="/assets/img/icons/menu-pink.svg" alt="">
                              </div>
                              <div>
                                  <div class="text-start pb-1"><span>BUY</span> TICKETS <br><span>ONLINE</span></div>
                                  <div class="indicator"></div>
                              </div>
                          </button>
                          <button class="hero__btn">
                              <div>
                                  <img class="hero__icon--white" src="/assets/img/icons/trailor-white.svg" alt="">
                                  <img class="hero__icon--pink" src="/assets/img/icons/trailor-pink.svg" alt="">
                              </div>
                              <div>
                                  <div class="text-start pb-1">
                                      WATCH<br>
                                      <span>TRAILER</span>
                                  </div>
                                  <div class="indicator"></div>
                              </div>

                          </button>
                      </div>
                  </div>
              </div>

              <img src="/assets/img/movie-images/368d7394-74d4-4bb7-a1ef-c9ba8ca0c3a9.jpg" alt="">
          </swiper-slide>
      </swiper-container>

      <div class="hero__side-bar cursor-pointer">
          <div class="text-4xl font-bold leading-none hover:text-pink-600">BUY</div>
          <div class="text-lg tracking-wider font-light leading-none">TICKETS</div>
          <div class="text-xl font-bold tracking-wide leading-none pb-14">ONLINE</div>
      </div>
<!--      <div class=" h-screen">-->
<!--          <div class="swiper-wrapper">-->

<!--          </div>-->

<!--      </div>-->

<!--      <div class="hero-container ">-->
<!--          <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" space-between="30" loop="true"-->
<!--                            centered-slides="true" autoplay-delay="2500" effect="fade">-->
<!--              <swiper-slide>-->
<!--                  <div class="hero&#45;&#45;mobile-wrapper">-->
<!--                      <div class="hero__div&#45;&#45;status">NOW SHOWING AT SCOPE CINEMAS</div>-->
<!--                      <h2 class="text-xl mt-1.5">FLASH (3D)</h2>-->
<!--                      <div class="flex gap-2">-->
<!--                          <button class="hero__btn hero__btn&#45;&#45;buy-tickets btn&#45;&#45;buy-tickets">-->
<!--                              <div>-->
<!--                                  <img src="/assets/img/icons/menu-white.svg" alt="">-->
<!--                              </div>-->
<!--                              <div><span>BUY</span> TICKETS</div>-->
<!--                          </button>-->
<!--                          <button class="hero__btn">-->
<!--                              <div>-->
<!--                                  <img src="/assets/img/icons/trailor-white.svg" alt="">-->
<!--                              </div>-->
<!--                              WATCH <span>TRAILER</span>-->
<!--                          </button>-->
<!--                      </div>-->
<!--                  </div>-->
<!--                  <img src="/assets/img/movie-images/f7839864-8ca7-4c65-9eb0-b078a14b46bd.jpg" alt="">-->

<!--              </swiper-slide>-->
<!--              <swiper-slide>-->
<!--                  <div class="hero&#45;&#45;mobile-wrapper">-->
<!--                      <div class="hero__div&#45;&#45;status">NOW SHOWING AT SCOPE CINEMAS</div>-->
<!--                      <h2 class="text-xl mt-1.5">TRANSFORMERS (3D)</h2>-->
<!--                      <div class="flex gap-2">-->
<!--                          <button class="hero__btn hero__btn&#45;&#45;buy-tickets btn&#45;&#45;buy-tickets">-->
<!--                              <div>-->
<!--                                  <img src="/assets/img/icons/menu-white.svg" alt="">-->
<!--                              </div>-->
<!--                              <div><span>BUY</span> TICKETS</div>-->
<!--                          </button>-->
<!--                          <button class="hero__btn">-->
<!--                              <div>-->
<!--                                  <img src="/assets/img/icons/trailor-white.svg" alt="">-->
<!--                              </div>-->
<!--                              WATCH <span>TRAILER</span>-->
<!--                          </button>-->
<!--                      </div>-->
<!--                  </div>-->
<!--                  <img src="/assets/img/movie-images/ccf17b34-8d7c-4eb7-9a7e-99c91bb62d1b.jpg" alt="">-->

<!--              </swiper-slide>-->
<!--              <swiper-slide>-->
<!--                  <div class="hero&#45;&#45;mobile-wrapper">-->
<!--                      <div class="hero__div&#45;&#45;status">NOW SHOWING AT SCOPE CINEMAS</div>-->
<!--                      <h2 class="text-xl mt-1.5">FAST AND FURIOUS (3D)</h2>-->
<!--                      <div class="flex gap-2">-->
<!--                          <button class="hero__btn hero__btn&#45;&#45;buy-tickets btn&#45;&#45;buy-tickets">-->
<!--                              <div>-->
<!--                                  <img src="/assets/img/icons/menu-white.svg" alt="">-->
<!--                              </div>-->
<!--                              <div><span>BUY</span> TICKETS</div>-->
<!--                          </button>-->
<!--                          <button class="hero__btn">-->
<!--                              <div>-->
<!--                                  <img src="/assets/img/icons/trailor-white.svg" alt="">-->
<!--                              </div>-->
<!--                              WATCH <span>TRAILER</span>-->
<!--                          </button>-->
<!--                      </div>-->
<!--                  </div>-->
<!--                  <img src="/assets/img/movie-images/d460ee4a-d2c4-4890-90a5-a3655c68e699.png" alt="">-->

<!--              </swiper-slide>-->
<!--              <swiper-slide>-->
<!--                  <div class="hero&#45;&#45;mobile-wrapper">-->
<!--                      <div class="hero__div&#45;&#45;status">NOW SHOWING AT SCOPE CINEMAS</div>-->
<!--                      <h2 class="text-xl mt-1.5">SPIDER MAN: ACROSS THE SPIDER VERSE</h2>-->
<!--                      <div class="flex gap-2">-->
<!--                          <button class="hero__btn hero__btn&#45;&#45;buy-tickets btn&#45;&#45;buy-tickets">-->
<!--                              <div>-->
<!--                                  <img src="/assets/img/icons/menu-white.svg" alt="">-->
<!--                              </div>-->
<!--                              <div><span>BUY</span> TICKETS</div>-->
<!--                          </button>-->
<!--                          <button class="hero__btn">-->
<!--                              <div>-->
<!--                                  <img src="/assets/img/icons/trailor-white.svg" alt="">-->
<!--                              </div>-->
<!--                              WATCH <span>TRAILER</span>-->
<!--                          </button>-->
<!--                      </div>-->
<!--                  </div>-->
<!--                  <img src="/assets/img/movie-images/39e99da4-6a02-40fd-888c-6839fdc00408.jpg" alt="">-->

<!--              </swiper-slide>-->
<!--              <swiper-slide>-->
<!--                  <div class="hero&#45;&#45;mobile-wrapper">-->
<!--                      <div class="hero__div&#45;&#45;status">NOW SHOWING AT SCOPE CINEMAS</div>-->
<!--                      <h2 class="text-xl mt-1.5">LITTLE MERMAID</h2>-->
<!--                      <div class="flex gap-2">-->
<!--                          <button class="hero__btn hero__btn&#45;&#45;buy-tickets btn&#45;&#45;buy-tickets">-->
<!--                              <div>-->
<!--                                  <img src="/assets/img/icons/menu-white.svg" alt="">-->
<!--                              </div>-->
<!--                              <div><span>BUY</span> TICKETS</div>-->
<!--                          </button>-->
<!--                          <button class="hero__btn">-->
<!--                              <div>-->
<!--                                  <img src="/assets/img/icons/trailor-white.svg" alt="">-->
<!--                              </div>-->
<!--                              WATCH <span>TRAILER</span>-->
<!--                          </button>-->
<!--                      </div>-->
<!--                  </div>-->
<!--                  <img src="/assets/img/movie-images/368d7394-74d4-4bb7-a1ef-c9ba8ca0c3a9.jpg" alt="">-->

<!--              </swiper-slide>-->
<!--          </swiper-container>-->


<!--      </div>-->
  `,
  styleUrl: './desktop-hero-section.component.scss'
})
export class DesktopHeroSectionComponent {

}
