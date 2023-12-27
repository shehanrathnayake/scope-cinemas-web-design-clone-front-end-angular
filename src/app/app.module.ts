import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MobileHeroSectionComponent } from './mobile-hero-section/mobile-hero-section.component';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { MobileSliderSectionComponent } from './mobile-slider-section/mobile-slider-section.component';
import { DealsSectionComponent } from './deals-section/deals-section.component';
// register Swiper custom elements
register();


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileHeroSectionComponent,
    MobileSliderSectionComponent,
    DealsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
