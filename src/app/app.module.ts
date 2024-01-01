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
import { FooterComponent } from './footer/footer.component';
import { MobileAsideComponent } from './mobile-aside/mobile-aside.component';
import { DesktopSliderSectionComponent } from './desktop-slider-section/desktop-slider-section.component';
import { DesktopHeroSectionComponent } from './desktop-hero-section/desktop-hero-section.component';
import { HeaderDesktopComponent } from './header-desktop/header-desktop.component';
// register Swiper custom elements
register();


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileHeroSectionComponent,
    MobileSliderSectionComponent,
    DealsSectionComponent,
    FooterComponent,
    MobileAsideComponent,
    DesktopSliderSectionComponent,
    DesktopHeroSectionComponent,
    HeaderDesktopComponent
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
