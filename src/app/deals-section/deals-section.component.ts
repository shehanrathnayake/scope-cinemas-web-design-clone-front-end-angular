import { Component } from '@angular/core';

@Component({
  selector: 'app-deals-section',
  template: `
      <div class="bg-white pt-6 px-4 pb-11">
          <h2 class="deals__heading">DEALS & EXCLUSIVE</h2>

          <div class="deal-card lg:flex-row-reverse">
              <img src="/assets/img/deals/c5d68d40-e026-4206-8eeb-43478dbba52c.jpg" alt="">
              <div class="deal-content">
                  <h3>"DOLBY ATMOS Delight: 50% Off for HNB Youth and TEEN+ Debit Cardholders!"</h3>
                  <p>
                      🎬 Exciting News for HNB Youth and TEEN+ Debit Cardholders! 🎟️
                  </p>
                  <div class="deals--more-info">
                      <a href="#">MORE INFO</a>
                      <div class="indicator"></div>
                  </div>
              </div>
          </div>

          <div class="deal-card">
              <img src="/assets/img/deals/606adfd5-af73-4c58-8328-ec87d070192e.jpg" alt="">
              <div class="deal-content">
                  <h3>Season's Savings With People's Bank</h3>
                  <div class="deals--more-info">
                      <a href="#">MORE INFO</a>
                      <div class="indicator"></div>
                  </div>
              </div>

          </div>

          <div class="deal-card lg:flex-row-reverse">
              <img src="/assets/img/deals/bc8bb16a-c2be-4798-a705-241d5470ed16.png" alt="">
              <div class="deal-content">
                  <h3>Season's Savings With Standard Chartered Bank</h3>
                  <p>
                      Enjoy 25% savings on your 2nd Movie Ticket when you purchase online (website only) at www.scopecinemas.com & 25% savings on the Combo Meal with StanChart credit cards. Offer valid once per card, day, transaction and mobile number every Friday and weekends until 23 December 2023. T&C apply. Scope Cinemas, CCC & Liberty by Scope Cinemas, Colpetty
                  </p>
                  <div class="deals--more-info">
                      <a href="#">MORE INFO</a>
                      <div class="indicator"></div>
                  </div>
              </div>

          </div>

          <div class="deal-card">
              <img src="/assets/img/deals/9efa2d23-266a-404d-a98d-8ab56bb1476e.jpg" alt="">
              <div class="deal-content">
                  <h3>Red Bull Hotdog Combo Meal</h3>
                  <div class="deals--more-info">
                      <a href="#">MORE INFO</a>
                      <div class="indicator"></div>
                  </div>
              </div>

          </div>
      </div>
  `,
  styleUrl: './deals-section.component.scss'
})
export class DealsSectionComponent {

}
