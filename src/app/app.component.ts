import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}


$(document).ready(function () {
  $(window).scroll(function () {

      if ($(this).scrollTop() > 100) {
          $('.scroll-up').fadeIn();
      } else {
          $('.scroll-up').fadeOut();
      }
  });

  $('.scroll-up').click(function () {
      $("html,body").animate({
          scrollTop: 0
      }, 1000);
      return false;
  });

  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".active").removeClass("active");
    $(this).addClass("active");
  });


  $('a[href*="#"]')
  .click(function(event) {
    var target = $(this.hash);
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
  });

});


