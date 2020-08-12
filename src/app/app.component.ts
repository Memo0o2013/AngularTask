import { Component } from '@angular/core';
import * as $ from 'jquery'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AphrieTask';
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
});


