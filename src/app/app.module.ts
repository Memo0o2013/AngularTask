import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { WhyusComponent } from './components/whyus/whyus.component';
import { OurteamComponent } from './components/ourteam/ourteam.component';
import { OurclientsComponent } from './components/ourclients/ourclients.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

import { TestimonialsService } from './services/testimonials.service'

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    WhyusComponent,
    OurteamComponent,
    OurclientsComponent,
    ContactusComponent,
    PortfolioComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TestimonialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
