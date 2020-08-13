import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { WhyusComponent } from './components/whyus/whyus.component';
import { OurteamComponent } from './components/ourteam/ourteam.component';
import { OurclientsComponent } from './components/ourclients/ourclients.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

import { TestimonialsService } from './services/testimonials.service'

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
  })
  ],
  providers: [TestimonialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
