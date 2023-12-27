import { Component } from '@angular/core';
import Swiper from "swiper";

@Component({
  selector: 'app-mobile-hero-section',
  template: `
      <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" space-between="30" loop="true"
                        centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="true" effect="fade">
          <swiper-slide>
              <img src="/assets/img/movie-images/43f23679-99b1-4669-9299-2288471e6621.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
              <img src="/assets/img/movie-images/256c6ac6-8563-4b10-a499-d4bc13ec3826.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
              <img src="/assets/img/movie-images/af27acdd-c55a-464c-be6e-d34a6e24cc07.png" alt="">
          </swiper-slide>
          <swiper-slide>
              <img src="/assets/img/movie-images/d36c99a4-2622-4aed-bacd-721594a94201.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
              <img src="/assets/img/movie-images/fbebbef6-3b0d-4c06-b862-cbe7bc2e7142.jpg" alt="">
          </swiper-slide>
      </swiper-container>



      <swiper-container class="mySwiper" loop="true" slides-per-view="1.5"
                        centered-slides="true"
                        freemode="true">
          <swiper-slide>
              <img src="/assets/img/movie-images/43f23679-99b1-4669-9299-2288471e6621.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
              <img src="/assets/img/movie-images/256c6ac6-8563-4b10-a499-d4bc13ec3826.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
              <img src="/assets/img/movie-images/af27acdd-c55a-464c-be6e-d34a6e24cc07.png" alt="">
          </swiper-slide>
          <swiper-slide>
              <img src="/assets/img/movie-images/d36c99a4-2622-4aed-bacd-721594a94201.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
              <img src="/assets/img/movie-images/fbebbef6-3b0d-4c06-b862-cbe7bc2e7142.jpg" alt="">
          </swiper-slide>
      </swiper-container>

  `,
  styleUrl: './mobile-hero-section.component.scss'
})
export class MobileHeroSectionComponent {

}
